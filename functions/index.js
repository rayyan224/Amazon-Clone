const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51Hfu4TCNNnqjVekotawRNOanMMVIRvahfdyjh0eANyEra3JUcm7w6XXC7zqaj7eTX9VkqNR5Rrlnk7huE4TfYMe400Zg0okRd6"
);
// App Cofig

const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());
// API Routes

app.get("/", (req, res) => res.status(200).send("Test"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Boom --- Totall", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // 200 good, 201 --> created smth
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Comand

exports.api = functions.https.onRequest(app);

// End Point: http://localhost:5001/clone-b82b7/us-central1/api

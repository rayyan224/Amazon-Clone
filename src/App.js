import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";
import "bootstrap/dist/css/bootstrap.min.css";
import MetaTags from "react-meta-tags";
const promise = loadStripe(
  "pk_test_51Hfu4TCNNnqjVekon2yWUQEPCp69NhLRYmKfnqp47QTIoSh715DsHBXtPZ54QvOtOsAJSLXScstS3SVgWMdlo8Tc00dNxbhBXo"
);
function App() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    // Use Effect only runs when the variable inside [] changes in this case it only runs on load
    // Attach a listener on Load
    auth.onAuthStateChanged((authUser) => {
      console.log(`User `, authUser);
      if (authUser) {
        // Looged In
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // Not Loged In
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <MetaTags>
          <title>Rayyan-- Amazon Clone</title>
          <meta name="description" content="My Cover Letter Fro Shopify" />
          <meta
            property="og:image"
            content="https://digital.com/wp-content/uploads/shopify-logo-new.png"
          />
        </MetaTags>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header></Header>
            <Orders></Orders>
          </Route>
          <Route path="/payment">
            <Header></Header>
            <ReactNotification className="addToCartNotification" />

            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <ReactNotification className="addToCartNotification" />

            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

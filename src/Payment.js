import React from "react";
import CheckOutProduct from "./CheckOutProduct";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
// Pull from local axios
import axios from "./axios";
import {
  CardElement,
  useStripe,
  useElements,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { db } from "./firebase";
function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(null);
  const [clientSecret, setSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("Client Secret", clientSecret);

  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // Payment Confirmation if correect
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(false);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} Items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__sectionTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>12 Brechin Crescent</p>
            <p>Ottawa, ON</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__sectionTitle">
            <h3>Review Items And Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              return (
                <CheckOutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                ></CheckOutProduct>
              );
            })}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__sectionTitle">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                {
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <p>
                          Subtotal ({basket?.length} items):{" "}
                          <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                          <input type="checkbox" />
                          This order contains a gift
                        </small>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                }
                <button
                  className={
                    (processing ||
                      disabled ||
                      succeeded ||
                      getBasketTotal(basket) <= 0) &&
                    "disabledBtn"
                  }
                  disabled={
                    processing ||
                    disabled ||
                    succeeded ||
                    getBasketTotal(basket) <= 0
                  }
                >
                  <span>{processing ? <p>Processing</p> : "Pay Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

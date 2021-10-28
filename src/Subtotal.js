import React from "react";
import "./Subtototal.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const calculateTotal = () => {
    let total = 0;
    basket.map((item) => (total = total + item.price));
    return total;
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{`${value}`}</strong>
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

      <button
        disabled={!getBasketTotal(basket) > 0 || !user}
        className={(!getBasketTotal(basket) > 0 || !user) && "disabledBtn"}
        onClick={(e) => history.push("/payment")}
      >
        Proceed To Checkout
      </button>
      {!user && (
        <p className="subtotal__SignIn"> * Please Sign In to Purchase</p>
      )}
    </div>
  );
}

export default Subtotal;

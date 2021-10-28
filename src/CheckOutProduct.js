import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckOutProduct({ image, price, id, rating, title, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkProduct">
      <img className="checkProduct__image" src={image} alt="" />
      <div className="checkProduct__info">
        <p className="checkProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckOutProduct;

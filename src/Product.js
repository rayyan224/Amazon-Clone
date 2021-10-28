import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";
import { store } from "react-notifications-component";
function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    store.addNotification({
      title: "Added Item To Cart",
      message: `${title} has been added to cart`,
      touchSlidingExit: {
        swipe: {
          duration: 400,
          timingFunction: "ease-out",
          delay: 0,
        },
        fade: {
          duration: 400,
          timingFunction: "ease-out",
          delay: 0,
        },
      },
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2500,
        onScreen: true,
        showIcon: true,
        pauseOnHover: true,
      },
    });
    // Send to data Layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add To Cart</button>
    </div>
  );
}

export default Product;

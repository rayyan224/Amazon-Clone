export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => {
  // Es6 way of tallying

  return basket?.reduce((amount, item) => {
    console.log(`Amount----> ${amount} Item----> ${item.price}`);
    return parseFloat(item.price) + amount;
  }, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      // Find product we are trying to delete. Only returns 1
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id == action.id
      );
      console.log(index);
      let tempBasket = [...state.basket];
      if (index >= 0) {
        tempBasket.splice(index, 1);
      } else {
        console.warn("Prodcut Does Not exist");
      }
      return {
        ...state,
        basket: tempBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;

export const removeFromCart = id => ({ type: "REMOVE_FROM_CART", id });
export const addToCart = product => ({ type: "ADD_TO_CART", product });
export const plusItem = id => ({ type: "PLUS_ITEM", id });
export const minusItem = id => ({ type: "MINUS_ITEM", id });

// export const remove = id => ({ dispatch }) => {
//   dispatch(removeProductFromCart(id));
// };

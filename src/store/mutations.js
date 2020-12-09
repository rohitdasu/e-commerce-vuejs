export const SET_AUTH = (state, payload) => {
    state.isAuthenticated = payload;
}

export const ADD_TO_CART = (state, payload) => {
  state.cartData.push(payload);
}
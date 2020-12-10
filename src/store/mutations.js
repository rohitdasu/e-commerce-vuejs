export const SET_AUTH = (state, payload) => {
    state.isAuthenticated = payload;
}

export const ADD_TO_CART = (state, payload) => {
  state.cartData.push(payload);
}

export const SET_ROUTE_ORDER = (state, payload) => {
  state.routeOrder = payload;
}

export const CLEAR_CART_DATA = (state) => {
  state.cartData = [];
}
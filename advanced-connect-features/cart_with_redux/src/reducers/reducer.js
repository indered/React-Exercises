import { combineReducers } from "redux";
import sampleProducts from "../products/products";

const cartState = {
  products: [
    {
      name: "",
      price: "",
      qty: "",
      amount: ""
    }
  ],
  total: 0
};

const productState = [sampleProducts];

const cart = (state = cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let total = 0;
      const index = state.products.findIndex(p => p.id === action.id);
      if (!index) {
        const product = action.product;
        product.qty++;
        product.amount += product.amount;
        const products = [...state.products, action.product];
        products.map(p => (total += p.amount));
        return { ...state, products, total };
      } else {
        const product = state.products[index];
        product.qty += 1;
        product.amount += product.price;
        let products = state.filter(p => p.id !== action.product.id);
        products = [...products, product];
        products.map(p => (total += p.amount));
        return { products, total };
      }
    }

    case "REMOVE_FROM_CART": {
      const index = state.products.findIndex(p => p.id === action.id);
      const products = [
        ...state.products.slice(0, index),
        ...state.products.slice(index + 1)
      ];
      let total = 0;
      products.map(p => (total += p.amount));
      return { ...state, products, total };
    }

    case "PLUS_ITEM": {
      const index = state.products.findIndex(p => p.id === action.id);
      const products = state.products;
      products[index].qty++;
      products[index].amount += products[index].price;
      let total = 0;
      products.map(p => (total += p.amount));
      return { products, total };
    }

    case "MINUS_ITEM": {
      const index = state.products.findIndex(p => p.id === action.id);
      const products = state.products;
      if (products[index.quantity !== 0]) {
        products[index].qty--;
        products[index].amount -= products[index].price;
        let total = 0;
        products.map(p => (total += p.amount));
        return { products, total };
      } else {
        return state;
      }
    }

    default: {
      return state;
    }
  }
};

const products = (state = productState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = { ...state.find(p => p.id === action.product.id) };
      product.quantity -= 1;
      const products = state.filter(p => p.id !== action.product.id);
      return [...products, product];
    }

    case "PLUS_ITEM": {
      const product = { ...state.find(p => p.id === action.product.id) };
      if (product.quantity !== 0) {
        product.quantity -= 1;
        const products = state.filter(p => p.id !== action.product.id);
        return [...products, product];
      } else {
        console.log("no more items to add");
        return state;
      }
    }

    case "MINUS_ITEM": {
      const product = { ...state.find(p => p.id === action.product.id) };
      product.quantity += 1;
      const products = state.filter(p => p.id !== action.product.id);
      return [...products, product];
    }

    case "REMOVE_FROM_CART": {
      const index = { ...state.findIndex(p => p.id === action.id) };
      const product = state[index];
      product[index].quantity = sampleProducts[index].quantity;
      const products = state.filter(p => p.id !== action.product.id);
      return [products, product];
    }

    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  cart,
  products
});

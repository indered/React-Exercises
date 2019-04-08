import sampleProducts from "../products/products";

const cartState = {
  products: [],
  total: 0
};

const productState = [...sampleProducts];
const originalState = [...sampleProducts];

const cart = (state = cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let total = 0;
      const index = state.products.findIndex(p => p.id === action.product.id);
      if (index === -1) {
        const product = action.product;
        product.qty++;
        product.amt = product.price;
        const products = [...state.products, action.product];
        products.map(p => (total += p.amt));
        return { products, total };
      } else {
        const product = state.products[index];
        product.qty += 1;
        product.amt += product.price;
        let products = state.products.filter(p => p.id !== action.product.id);
        products = [...products, product];
        products.map(p => (total += p.amt));
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
      const products = [...state.products];
      products[index].qty++;
      products[index].amt += products[index].price;
      let total = 0;
      products.map(p => (total += p.amt));
      return { ...state, products, total };
    }

    case "MINUS_ITEM": {
      const index = state.products.findIndex(p => p.id === action.id);
      const products = [...state.products];
      if (products[index.quantity !== 0]) {
        products[index].qty--;
        products[index].amount -= products[index].price;
        let total = 0;
        products.map(p => (total += p.amount));
        return { ...state, products, total };
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
      const products = [...state];
      const index = products.findIndex(p => p.id === action.product.id);
      products[index].quantity -= 1;
      return [...products];
    }

    case "PLUS_ITEM": {
      const index = state.findIndex(p => p.id === action.id);

      const products = [...state];

      if (products[index].quantity !== 0) {
        products[index].quantity -= 1;

        return [...products];
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
      const index = state.findIndex(p => p.id === action.id);
      const products = [...state];
      products[index].quantity = originalState[index].quantity;
      return [...products];
    }

    default: {
      return state;
    }
  }
};

export { cart, products };

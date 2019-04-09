import sampleProducts from "../products/products";

const cartState = {
  products: [],
  total: 0
};

const productState = [...sampleProducts];

//cart reducer

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
        const products = [...state.products];
        products[index].qty += 1;
        products[index].amt += products[index].price;

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
      products.map(p => (total += p.amt));
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
      if (products[index].quantity !== 0) {
        products[index].qty--;
        products[index].amt -= products[index].price;
        let total = 0;
        products.map(p => (total += p.amt));
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

//products reducer

const products = (state = productState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const products = [...state];
      const index = products.findIndex(p => p.id === action.product.id);

      return [
        ...products.slice(0, index),
        {
          ...products[index],
          quantity: products[index].quantity - 1
        },
        ...products.slice(index + 1)
      ];
    }

    case "PLUS_ITEM": {
      const index = state.findIndex(p => p.id === action.id);

      const products = [...state];

      if (products[index].quantity !== 0) {
        return [
          ...products.slice(0, index),
          {
            ...products[index],
            quantity: products[index].quantity - 1
          },
          ...products.slice(index + 1)
        ];
      } else {
        console.log("no more items to add");
        return state;
      }
    }

    case "MINUS_ITEM": {
      const index = state.findIndex(p => p.id === action.id);

      const products = [...state];

      return [
        ...products.slice(0, index),
        {
          ...products[index],
          quantity: products[index].quantity + 1
        },
        ...products.slice(index + 1)
      ];
    }

    case "REMOVE_FROM_CART": {
      const index = state.findIndex(p => p.id === action.id);
      const products = [...state];
      products[index].quantity = productState[index].quantity;
      return [...products];
    }

    default: {
      return state;
    }
  }
};

export { cart, products };

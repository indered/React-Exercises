import { createStore, applyMiddleware } from "redux";

const product = [];

const products = (state = product, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return [...state, action.product];
    }

    default: {
      return state;
    }
  }
};

const handleProducts = store => next => action => {
  if (Array.isArray(action)) {
    action.map(product =>
      store.dispatch({ type: "ADD_PRODUCT", product: product })
    );
  } else {
    next(action);
  }
};

const middleware = applyMiddleware(handleProducts);

const store = createStore(products, middleware);
store.subscribe(() => {
  console.log("Store has changed", store.getState());
});

const addProduct = product => ({ type: "ADD_PRODUCT", product });

store.dispatch(addProduct({ id: 1, name: "Red bull" }));
store.dispatch(addProduct({ id: 2, name: "Coke" }));

store.dispatch([
  {
    id: 3,
    name: "toy"
  },
  {
    id: 4,
    name: "story"
  }
]);

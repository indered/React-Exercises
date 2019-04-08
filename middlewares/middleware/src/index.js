import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";

ReactDOM.render(<App />, document.getElementById("root"));

const product = []; //initial state

//reducer

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

//middleware that handles both arrays and objects

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

//store
const store = createStore(products, middleware);
store.subscribe(() => {
  console.log("Store has changed", store.getState());
});

//action_creator
const addProduct = product => ({ type: "ADD_PRODUCT", product });

//actions fired
store.dispatch(addProduct({ id: 1, name: "Red bull" }));
store.dispatch(addProduct({ id: 2, name: "Coke" }));

//array_action fired
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

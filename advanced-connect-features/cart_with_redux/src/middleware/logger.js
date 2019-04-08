import { applyMiddleware } from "redux";

const logger = store => next => action => {
  console.log(action.type, "fired", action);
  next(action);
};

export default applyMiddleware(logger);

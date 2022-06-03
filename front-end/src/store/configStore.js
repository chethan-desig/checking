import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PositionsReducers from "../reducer/positions/refercandidatereducer";
const Store = () => {
  const store = createStore(
    combineReducers({
      positions: PositionsReducers,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default Store;

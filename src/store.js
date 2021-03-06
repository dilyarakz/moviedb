import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initalState = {};
const middleware = [thunk];

let store;



if (window.navigator.userAgent.includes("Chrome")) {
  store = createStore(
    rootReducer,
    initalState,
    composeEnhancers(
      applyMiddleware(...middleware),
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    rootReducer,
    initalState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

store.subscribe(() => {
  localStorage.setItem('fmovie', JSON.stringify(store.getState().fmovies))
})

export default store;
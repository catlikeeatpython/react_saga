import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import rootReducers from "./../reducers"
import rootSagas from "./../saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  );

console.log("111111")
sagaMiddleware.run(rootSagas);

export default store;

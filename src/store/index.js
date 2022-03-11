import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import registerReducer from "./reducer/register-reducer";
import reducerRegistry from "./reducer/registry";
import registerSaga from "./saga/register-saga";

let htmlBaseName = "";
const browserHistory = createBrowserHistory({
  basename: `${htmlBaseName}`,
});
const connectBrowserHistoryRouter = connectRouter(browserHistory);

// 1 integrate with chrome tool: redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 2 initiate middlewares
const middlewares = [];

// setup redux-saga
const sagaMiddleWare = createSagaMiddleware();
middlewares.push(sagaMiddleWare);

// register main reducers
registerReducer();

// create store
const initialState = {};
const store = createStore(
  connectBrowserHistoryRouter(reducerRegistry.getReducers()), // rootReducer
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

// register worker sagas
sagaMiddleWare.run(registerSaga, store.dispatch);

export { store, browserHistory };

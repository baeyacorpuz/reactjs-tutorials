import { all } from "redux-saga/effects";

import saga from "./saga";
import prTableSaga from "./prTableSaga";

const callEachFunction = (x) => x();

export default function* fn(dispatch) {
  // const callEachFunctionWithDispatch = (x) => x(dispatch);
  yield all([...saga.map(callEachFunction)]);
  yield all([...prTableSaga.map(callEachFunction)])
}

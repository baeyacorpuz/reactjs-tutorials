import { all } from "redux-saga/effects";

import saga from "./saga";

const callEachFunction = (x) => x();

export default function* fn(dispatch) {
  const callEachFunctionWithDispatch = (x) => x(dispatch);
  yield all([...saga.map(callEachFunction)]);
}

import { takeEvery, put, call } from "redux-saga/effects";

function* watchFetchProducts() {
  yield takeEvery("PRODUCTS_REQUESTED", fetchProducts);
}

function* fetchProducts() {
  const products = [{ product: "", productDetails: "" }];
  yield takeEvery({ type: "PRTABLE_SET_DATA", payload: products });
  // try {
  //   const response = yield call(api);
  //   const { data } = response;
  //   yield put({
  //     type: "PRTABLE_SET_DATA",
  //     payload: data,
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
}

export default [watchFetchProducts, fetchProducts];

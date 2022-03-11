function* helloSaga() {
  console.log("Hello Sagas!");
}

function* increment() {
  console.log("Increment");
}

export default [helloSaga, increment];

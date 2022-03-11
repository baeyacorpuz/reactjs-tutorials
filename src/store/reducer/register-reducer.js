import reducerRegistry from "./registry";

import appReducer from "./appReducer";
import counterReducer from "./counterReducer";
import prTableReducer from "./prTableReducer";

const registerReducers = () => {
  reducerRegistry.register("app", appReducer);
  reducerRegistry.register("counter", counterReducer);
  reducerRegistry.register("prListing", prTableReducer)
};

export { registerReducers as default };

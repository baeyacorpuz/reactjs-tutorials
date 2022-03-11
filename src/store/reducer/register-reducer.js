import reducerRegistry from "./registry";

import appReducer from "./appReducer";
import counterReducer from "./counterReducer";

const registerReducers = () => {
  reducerRegistry.register("app", appReducer);
  reducerRegistry.register("counter", counterReducer);
};

export { registerReducers as default };

import { combineReducers } from "redux";

export class ReducerRegistry {
  constructor() {
    this._emitChange = null;
    this._reducers = {};
  }

  getReducers() {
    const reducers = { ...this._reducers };
    return combineReducers(reducers);
  }

  register(name, reducer) {
    this._reducers = { ...this._reducers, [name]: reducer };
    if (this._emitChange) {
      this._emitChange();
    }
  }

  unregister = () => {}

  setChangeListener(listener) {
    this._emitChange = listener;
  }
}

const reducerRegistry = new ReducerRegistry();
export {
  reducerRegistry as default,
}
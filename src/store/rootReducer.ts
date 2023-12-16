// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
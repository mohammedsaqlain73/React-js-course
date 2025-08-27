import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const appstore = configureStore({
  reducer: {
  cart:cartReducer
}
})
export default appstore;

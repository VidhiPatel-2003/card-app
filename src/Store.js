import { configureStore } from "@reduxjs/toolkit";
import cardItemReducer from "./component/Slice/Datamanagement";

export const store = configureStore({
  reducer: {
    cardItem: cardItemReducer,
  },
});

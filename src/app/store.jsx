import { configureStore } from "@reduxjs/toolkit";
import marketSlice from "../features/marketSlice";
import myReducer from "../features/mySlice";
import cardSlice from "../features/cardSlice";
export default configureStore({
  reducer: {
    market: marketSlice,
    my: myReducer,
    counter: cardSlice,
  },
});
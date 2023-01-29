import { configureStore } from "@reduxjs/toolkit";
import marketSlice from "../features/marketSlice";
import myReducer from "../features/mySlice";
export default configureStore({
  reducer: {
    market: marketSlice,
    my: myReducer,
  },
});
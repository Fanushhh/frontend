import { configureStore } from "@reduxjs/toolkit";
import toastrReducer from "../features/toastr/toastr-slice";

export default configureStore({
  reducer: {
    toastr: toastrReducer,
  },
});

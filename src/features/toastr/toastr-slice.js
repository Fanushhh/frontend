import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./toastr-initial-state";
import { hideToastr as hideToastrReducer } from "./toastr-reducers";
import { resetToastr as resetToastrReducer } from "./toastr-reducers";
import { showToastr as showToastrReducer } from "./toastr-reducers";

export const toastrSlice = createSlice({
  name: "toastr",
  initialState,
  reducers: {
    hideToastr: hideToastrReducer,
    resetToastr: resetToastrReducer,
    showToastr: showToastrReducer
  },
});

export const { hideToastr, resetToastr, showToastr } = toastrSlice.actions;
export default toastrSlice.reducer;

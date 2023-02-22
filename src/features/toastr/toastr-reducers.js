import { initialState } from "./toastr-initial-state";

export const hideToastr = (state) => {
  state.open = false;
};

export const resetToastr = (state) => {
  state = initialState;
};

export const showToastr = (state, { payload }) => {
  state.open = true;
  state.message = payload.message;
  state.severity = payload.severity;
};

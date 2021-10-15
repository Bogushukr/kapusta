import { createAction } from "@reduxjs/toolkit";

// export const registerRequest = createAction("auth/registerRequest");
// export const registerSuccess = createAction("auth/registerSuccess");
// export const registerError = createAction("auth/registerError");

export const incrementMonthPicker = createAction("report/IncrementMonthPicker")
export const dectementMonthPicker = createAction("report/DectementMonthPicker")

export default {
    incrementMonthPicker,
    dectementMonthPicker
}
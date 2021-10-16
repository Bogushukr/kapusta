import { createAction } from "@reduxjs/toolkit";

export const fetchAllTransactionRequest = createAction("report/AllTransactionsRequest");
export const fetchAllTransactionSuccess = createAction("report/AllTransactionsSuccess");
export const fetchAllTransactionError = createAction("report/AllTransactionsError");

export const fetchReportCashInSixMonthRequest = createAction("report/getCashInSixMonthRequest");
export const fetchReportCashInSixMonthSuccess = createAction("report/getCashInSixMonthSuccess");
export const fetchReportCashInSixMonthError = createAction("report/getCashInSixIMonthError");

export const fetchReportCashOutSixMonthRequest = createAction("report/getCashOutSixMonthRequest");
export const fetchReportCashOutSixMonthSuccess = createAction("report/getCashOutSixMonthSuccess");
export const fetchReportCashOutSixMonthError = createAction("report/getCashOutSixMonthError");

export const testRequest = createAction("report/testRequest");
 
export const incrementMonthPicker = createAction("report/IncrementMonthPicker")
export const dectementMonthPicker = createAction("report/DectementMonthPicker")

export default {
    incrementMonthPicker,
    dectementMonthPicker,

    fetchAllTransactionRequest,
    fetchAllTransactionSuccess,
    fetchAllTransactionError,

    fetchReportCashInSixMonthRequest,
    fetchReportCashInSixMonthSuccess,
    fetchReportCashInSixMonthError,
  
    fetchReportCashOutSixMonthRequest,
    fetchReportCashOutSixMonthSuccess,
    fetchReportCashOutSixMonthError,
    testRequest
}
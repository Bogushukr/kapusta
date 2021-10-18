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

export const fetchReportCashInOneMonthRequest = createAction("report/getCashInOneMonthRequest");
export const fetchReportCashInOneMonthSuccess = createAction("report/getCashInOneMonthSuccess");
export const fetchReportCashInOneMonthError = createAction("report/getCashInOneMonthError");

export const fetchReportCashOutOneMonthRequest = createAction("report/getCashOutOneMonthRequest");
export const fetchReportCashOutOneMonthSuccess = createAction("report/getCashOutOneMonthSuccess");
export const fetchReportCashOutOneMonthError = createAction("report/getCashOutOneMonthError");


export const testRequest = createAction("report/testRequest");
 
export const incrementMonthPicker = createAction("report/IncrementMonthPicker")
export const dectementMonthPicker = createAction("report/DectementMonthPicker")


export const sortedArrCashIn = createAction("report/sortedArrCashIn")
export const sortedArrCashOut = createAction("report/sortedArrCashOut")

export const activeOfArrCashIn = createAction("report/activeOfArrCashIn")
export const activeOfArrCashOut = createAction("report/activeOfArrCashOut")

export const activeSvgCashInPicker = createAction("report/activeSvgCashInPicker")
export const activeSvgCashOutPicker = createAction("report/activeSvgCashOutPicker")

export const PickerCash = createAction("report/PickerCash")

export default {
    sortedArrCashIn,
    sortedArrCashOut,

    activeOfArrCashIn,
    activeOfArrCashOut,
    
    incrementMonthPicker,
    dectementMonthPicker,

    activeSvgCashInPicker,
    activeSvgCashOutPicker,

    PickerCash,

    fetchAllTransactionRequest,
    fetchAllTransactionSuccess,
    fetchAllTransactionError,

    fetchReportCashInSixMonthRequest,
    fetchReportCashInSixMonthSuccess,
    fetchReportCashInSixMonthError,
  
    fetchReportCashOutSixMonthRequest,
    fetchReportCashOutSixMonthSuccess,
    fetchReportCashOutSixMonthError,

    fetchReportCashInOneMonthRequest,
    fetchReportCashInOneMonthSuccess,
    fetchReportCashInOneMonthError,

    fetchReportCashOutOneMonthRequest,
    fetchReportCashOutOneMonthSuccess,
    fetchReportCashOutOneMonthError,
    
    testRequest
}
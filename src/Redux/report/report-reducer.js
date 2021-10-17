import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  testRequest,
  incrementMonthPicker,
  dectementMonthPicker,
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

} from './report-actions';
import { incrementData, dectementData } from './report-operations';

axios.defaults.baseURL = 'https://kapusta-organizer.herokuapp.com/api';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const reportData = {
  currentReportYear: currentYear,
  currentReportMonth: currentMonth,
};

const date = createReducer(reportData, {
  [incrementMonthPicker]: incrementData,
  [dectementMonthPicker]: dectementData,
});

const stateCash = true

const cashIncomeReducer = createReducer(stateCash, {
  [PickerCash]: (state, _) => {
    return !state
  }
});

const report = createReducer((reportData, []), {
  [incrementMonthPicker]: incrementData,
  [dectementMonthPicker]: dectementData,
  [fetchAllTransactionSuccess]: (_, { payload }) => {
    return {
      allTran: payload,
    };
  },
  [fetchAllTransactionError]: (_, { payload }) => {
    alert(`Error : ${payload}`);
    return payload;
  },
});

const test = createReducer([], {
  [testRequest]: dectementData,
});

const cashInSixMonth = createReducer([], {
  [fetchReportCashInSixMonthSuccess]: (_, { payload }) => payload,
  [fetchReportCashInSixMonthError]: (_, { payload }) => {
    return null;
  },
});

const cashOutSixMonth = createReducer([], {
  [fetchReportCashOutSixMonthSuccess]: (_, { payload }) => payload,
  [fetchReportCashOutSixMonthError]: (_, { payload }) => {
    return null;
  },
});

const cashInOneMonth = createReducer([], {
  [fetchReportCashInOneMonthSuccess]: (_, { payload }) => payload,
  [fetchReportCashInOneMonthError]: (_, { payload }) => {
    return null;
  },
});

const cashOutOneMonth = createReducer([], {
  [fetchReportCashOutOneMonthSuccess]: (_, { payload }) => payload,
  [fetchReportCashOutOneMonthError]: (_, { payload }) => {
    return null;
  },
});

const loading = createReducer(false, {
  [fetchAllTransactionRequest]: () => true,
  [fetchAllTransactionSuccess]: () => false,
  [fetchAllTransactionError]: () => false,

  [fetchReportCashInSixMonthRequest]: () => true,
  [fetchReportCashInSixMonthSuccess]: () => false,
  [fetchReportCashInSixMonthError]: () => false,

  
  [fetchReportCashOutSixMonthRequest]: () => true,
  [fetchReportCashOutSixMonthSuccess]: () => false,
  [fetchReportCashOutSixMonthError]: () => false,

  
  [fetchReportCashInOneMonthRequest]: () => true,
  [fetchReportCashInOneMonthSuccess]: () => false,
  [fetchReportCashInOneMonthError]: () => false,

  [fetchReportCashOutOneMonthRequest]: () => true,
  [fetchReportCashOutOneMonthSuccess]: () => false,
  [fetchReportCashOutOneMonthError]: () => false,


});

const reportReducer = combineReducers({
  date,
  report,
  loading,
  test,
  cashInSixMonth, 
  cashOutSixMonth,
  cashInOneMonth,
  cashOutOneMonth,
  cashIncomeReducer,
});

export default reportReducer;

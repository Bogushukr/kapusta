import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  testRequest,
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
});

const reportReducer = combineReducers({
  date,
  report,
  loading,
  test,
  cashInSixMonth, 
  cashOutSixMonth
});

export default reportReducer;

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { sortedArrCashFetch } from '../../Utils/CategoriesMap';
import { arrCashIn, arrCashOut } from '../../Utils/category';

import {
  sortedArrCashIn,
  sortedArrCashOut,
  activeOfArrCashIn,
  activeOfArrCashOut,
  activeSvgCashInPicker,
  activeSvgCashOutPicker,
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

const stateCash = true;

const cashIncomeReducer = createReducer(stateCash, {
  [PickerCash]: (state, _) => {
    return !state;
  },
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
  [fetchReportCashInSixMonthSuccess]: (_, { payload }) => {
    return payload;
  },
  [fetchReportCashInSixMonthError]: (_, { payload }) => {
    return null;
  },
});

const cashOutSixMonth = createReducer([], {
  [fetchReportCashOutSixMonthSuccess]: (_, { payload }) => {
    return payload;
  },
  [fetchReportCashOutSixMonthError]: (_, { payload }) => {
    return null;
  },
});

const cashInOneMonth = createReducer(
  {},
  {
    [fetchReportCashInOneMonthSuccess]: (_, { payload }) => {
      const arrCategories = payload.arrCategories;
      const cashOutMonth = payload.cashOutMonth;
      const cashInMonth = payload.cashInMonth;
      return {
        arrCategories,
        cashOutMonth,
        cashInMonth,
      };
    },
    [fetchReportCashInOneMonthError]: (_, { payload }) => {
      return null;
    },
  },
);

const cashOutOneMonth = createReducer(
  {},
  {
    [fetchReportCashOutOneMonthSuccess]: (_, { payload }) => {
      const arrCategories = payload.arrCategories;
      const cashOutMonth = payload.cashOutMonth;
      const cashInMonth = payload.cashInMonth;
      return {
        arrCategories,
        cashOutMonth,
        cashInMonth,
      };
    },

    [fetchReportCashOutOneMonthError]: (_, { payload }) => {
      return null;
    },
  },
);


const sortedArrCashInReducer = createReducer([], {
  [sortedArrCashIn]: (_, { payload }) => payload,
});
const sortedArrCashOutReducer = createReducer([], {
  [sortedArrCashOut]: (_, { payload }) => payload,
});

const activeOfArrCashInReducer = createReducer(1, {
  [activeOfArrCashIn]: (_, { payload }) => payload,
  [activeSvgCashInPicker]: (_, { payload }) => payload,
});
const activeOfArrCashOutReducer = createReducer(1, {
  [activeOfArrCashOut]: (_, { payload }) => payload,
  [activeSvgCashOutPicker]: (_, { payload }) => payload,
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
  sortedArrCashInReducer,
  sortedArrCashOutReducer,
  activeOfArrCashInReducer,
  activeOfArrCashOutReducer
});

export default reportReducer;

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  sortedArrCashIn,
  sortedArrCashOut,
  activeOfArrCashIn,
  activeOfArrCashOut,
  activeSvgCashInPicker,
  activeSvgCashOutPicker,
  incrementMonthPicker,
  dectementMonthPicker,
  PickerCash,
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

const activeOfArrCashInReducer = createReducer(0, {
  [activeOfArrCashIn]: (_, { payload }) => payload,
  [activeSvgCashInPicker]: (_, { payload }) => payload,
});
const activeOfArrCashOutReducer = createReducer(0, {
  [activeOfArrCashOut]: (_, { payload }) => payload,
  [activeSvgCashOutPicker]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
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
  loading,
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

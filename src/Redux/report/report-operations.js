import axios from 'axios';

import {
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

export const incrementData = (state, { payload }) => {
  if (state.currentReportMonth === 11) {
    return {
      currentReportMonth: 0,
      currentReportYear: state.currentReportYear + 1,
    };
  }
  return {
    ...state,
    currentReportMonth: state.currentReportMonth + payload,
  };
};
export const dectementData = (state, { payload }) => {
  if (state.currentReportMonth === 0) {
    return {
      currentReportMonth: 11,
      currentReportYear: state.currentReportYear - 1,
    };
  }
  return {
    ...state,
    currentReportMonth: state.currentReportMonth - payload,
  };
};

export const getAllTransactions = () => async dispatch => {
  dispatch(fetchAllTransactionRequest());

  try {
    const { data } = await axios.get('/transactions');
    dispatch(fetchAllTransactionSuccess(data.transactions));
  } catch (error) {
    dispatch(fetchAllTransactionError(error.message));
  }
};

export const fetchReportCashOutSixMonth = () => async dispatch => {
  dispatch(fetchReportCashOutSixMonthRequest());
  

  try {
    const { data } = await axios.get('/reports/cash-out/last-six-month');
    const obj = data.data
    if (Array.isArray(obj)) {
      dispatch(fetchReportCashOutSixMonthSuccess(obj));
    } else {
      dispatch(fetchReportCashOutSixMonthSuccess(obj.result));
    }
  } catch (error) {
    dispatch(fetchReportCashOutSixMonthError(error.message));
  }
};

export const fetchReportCashInSixMonth = () => async dispatch => {
  dispatch(fetchReportCashInSixMonthRequest());
  try {
    const { data } = await axios.get('/reports/cash-in/last-six-month');
    const obj = data.data
    if (Array.isArray(obj)) {
      dispatch(fetchReportCashInSixMonthSuccess(obj));
    } else {
      dispatch(fetchReportCashInSixMonthSuccess(obj.result));
    }
  } catch (error) {
    dispatch(fetchReportCashInSixMonthError(error.message));
  }
};


export const fetchReportCashInOneMonth = ({year, month}) => async dispatch => {
  dispatch(fetchReportCashInOneMonthRequest());
  try {
    const { data } = await axios.get(`/reports/cash-in/${year}/${month + 1}`);
    const cashInMonth = data.data.cashInMonth; // cashOutMonth
    const arrCategories = data.data.details.categoriesAndDescription    
    dispatch(fetchReportCashInOneMonthSuccess({cashInMonth, arrCategories}));
  } catch (error) {
    dispatch(fetchReportCashInOneMonthError(error.message));
  }
};

export const fetchReportCashOutOneMonth = ({year, month}) => async dispatch => {
  dispatch(fetchReportCashOutOneMonthRequest());
  try {
    const { data } = await axios.get(`/reports/cash-out/${year}/${month + 1}`);
    const cashInMonth = data.data.cashInMonth; // cashOutMonth
    const arrCategories = data.data.details.categoriesAndDescription   
    dispatch(fetchReportCashOutOneMonthSuccess({cashInMonth, arrCategories}));
  } catch (error) {
    dispatch(fetchReportCashOutOneMonthError(error.message));
  }
};

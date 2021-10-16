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
  console.log('asd');
  dispatch(fetchAllTransactionRequest());

  try {
    const { data } = await axios.get('/transactions');

    dispatch(fetchAllTransactionSuccess(data.transactions));
  } catch (error) {
    dispatch(fetchAllTransactionError(error.message));
  }
};

export const fetchReportCashOutSixMonth = () => async dispatch => {
  console.log('asd');
  dispatch(fetchReportCashOutSixMonthRequest());

  try {
    const { data } = await axios.get('/reports/cash-out/last-six-month');

    dispatch(fetchReportCashOutSixMonthSuccess(data.data.result));
  } catch (error) {
    dispatch(fetchReportCashOutSixMonthError(error.message));
  }
};

export const fetchReportCashInSixMonth = () => async dispatch => {
  console.log('asd');
  dispatch(fetchReportCashInSixMonthRequest());
  try {
    const { data } = await axios.get('/reports/cash-in/last-six-month');

    dispatch(fetchReportCashInSixMonthSuccess(data.data.result));
  } catch (error) {
    dispatch(fetchReportCashInSixMonthError(error.message));
  }
};

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
    dispatch(fetchReportCashOutSixMonthSuccess(data.data));
  } catch (error) {
    dispatch(fetchReportCashOutSixMonthError(error.message));
  }
};

export const fetchReportCashInSixMonth = () => async dispatch => {
  dispatch(fetchReportCashInSixMonthRequest());
  try {
    const { data } = await axios.get('/reports/cash-in/last-six-month');
    console.log(data.data);

    dispatch(fetchReportCashInSixMonthSuccess(data.data));
  } catch (error) {
    dispatch(fetchReportCashInSixMonthError(error.message));
  }
};


export const fetchReportCashInOneMonth = ({year, month}) => async dispatch => {
  dispatch(fetchReportCashInOneMonthRequest());
  try {
    const { data } = await axios.get(`/reports/cash-in/${year}/${month}`);

    dispatch(fetchReportCashInOneMonthSuccess(data.data));
  } catch (error) {
    dispatch(fetchReportCashInOneMonthError(error.message));
  }
};

export const fetchReportCashOutOneMonth = ({year, month}) => async dispatch => {
  dispatch(fetchReportCashOutOneMonthRequest());
  try {
    const { data } = await axios.get(`/reports/cash-out/${year}/${month}`);

    dispatch(fetchReportCashOutOneMonthSuccess(data.data));
  } catch (error) {
    dispatch(fetchReportCashOutOneMonthError(error.message));
  }
};

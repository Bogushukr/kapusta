import axios from 'axios';

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

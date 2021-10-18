import { createAction } from '@reduxjs/toolkit';

export const setBalanceRequest = createAction('balance/setBalanceRequest');
export const setBalanceSuccess = createAction('balance/setBalanceSuccess');
export const setBalanceError = createAction('balance/setBalanceError');

export default {
  setBalanceRequest,
  setBalanceSuccess,
  setBalanceError,
};

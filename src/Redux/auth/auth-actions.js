import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const getCurrentBalanceRequest = createAction('auth/getCurrentBalanceRequest');
const getCurrentBalanceSuccess = createAction('auth/getCurrentBalanceSuccess');
const getCurrentBalanceError = createAction('auth/getCurrentBalanceError');

const setBalanceRequest = createAction('auth/setBalanceRequest');
const setBalanceSuccess = createAction('auth/setBalanceSuccess');
const setBalanceError = createAction('auth/setBalanceError');

const actions = {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  getCurrentBalanceRequest,
  getCurrentBalanceSuccess,
  getCurrentBalanceError,
  setBalanceRequest,
  setBalanceSuccess,
  setBalanceError,
};

export default actions;

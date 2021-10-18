import axios from 'axios';
import {
  setBalanceRequest,
  setBalanceSuccess,
  setBalanceError,
} from './balance-actions';

import authActions from '../auth/auth-actions';

axios.defaults.baseURL = 'https://kapusta-organizer.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const setUserBalance = balance => async dispatch => {
  dispatch(setBalanceRequest());

  try {
    const response = await axios.patch('/users/setBalance', { balance });
    dispatch(setBalanceSuccess(response.data.user.currentBalance));
  } catch (error) {
    dispatch(setBalanceError(error.message));
  }
};

export default { token, getCurrentUser, setUserBalance };

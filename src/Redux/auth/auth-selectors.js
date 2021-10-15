const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const getUserBalance = state => state.auth.user.currentBalance;

export default {
  getIsAuthenticated,
  getUsername,
  getUserBalance,
};

const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const getUserBalance = state => state.auth.user.currentBalance;

const authSelectors = {
  getIsAuthenticated,
  getUsername,
  getUserBalance,
};

export default authSelectors;

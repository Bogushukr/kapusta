// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import balanceActions from './balance-actions';
// // import authActions from '../auth/auth-actions';

// const currentBalance = createReducer(0, {
//   [balanceActions.setBalanceSuccess]: (_, { payload }) => payload,
// });

// // const balance = createReducer(0, {
// //   [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.data,
// //   [balanceActions.setBalanceSuccess]: (_, { payload }) =>
// //     payload.data.user.currentBalance,
// // });

// const isLoadingAction = action => action.type.endsWith('Request');
// const isEndLoadingAction = action =>
//   action.type.endsWith('Success') || action.type.endsWith('Error');

// const loading = createReducer(false, builder => {
//   builder
//     .addMatcher(isLoadingAction, () => true)
//     .addMatcher(isEndLoadingAction, () => false);
// });

// export default combineReducers({ loading, currentBalance });

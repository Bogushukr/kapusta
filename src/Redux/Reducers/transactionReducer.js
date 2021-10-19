import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from 'redux';

import transactionActions from "../Actions/transactionActions"

const transactions = createReducer([], {
    [transactionActions.addTransactionSuccess]: (state, action) => state.push(action.payload.transaction),
    [transactionActions.removeTransactionSuccess]: (state, { payload }) => state,
    [transactionActions.getAllTransactionsSuccess]: (state, { payload }) => payload,
})

const date = createReducer('', {
    [transactionActions.selectedDate]: (state, { payload } ) => payload
})

// eslint-disable-next-line
export default combineReducers ({
    transactions,
    date
})
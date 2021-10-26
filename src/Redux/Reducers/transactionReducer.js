import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from 'redux';

import transactionActions from "../Actions/transactionActions"

const transactions = createReducer([], {
    [transactionActions.addTransactionSuccess]: (state, action) => [...state, action.payload.transaction],
    [transactionActions.removeTransactionSuccess]: (state, { payload }) => {
        return state.filter(transaction => transaction._id !== payload.data.transaction._id)
    },
    [transactionActions.getAllTransactionsSuccess]: (state, { payload }) => payload.transactions,
})

const date = createReducer('', {
    [transactionActions.selectedDate]: (state, { payload } ) => payload
})

// eslint-disable-next-line
export default combineReducers ({
    transactions,
    date
})
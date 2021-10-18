import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from 'redux';

import transactionActions from "../Actions/transactionActions"

const transactions = createReducer([], {
    [transactionActions.addTransactionSuccess]: (state, action) => {
        console.log('action.payload.transaction in transaction reducer: ', action.payload.transaction)
        action.payload.transaction.cashIncome === false && 
        state.push(action.payload.transaction)
        return
    },
    // [expenseActions.removeExpenseSuccess]: (state={}, action) => state
})

const date = createReducer('', {
    [transactionActions.selectedDate]: (state, { payload } ) => {
        console.log('in date createReducer payload: ', payload)
        return payload
    }
})

// eslint-disable-next-line
export default combineReducers ({
    transactions,
    date
})
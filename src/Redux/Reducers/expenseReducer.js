import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from 'redux';

import expenseActions from "../Actions/expenseActions"

const expense = createReducer([], {
    [expenseActions.addExpenseSuccess]: (state={}, action) => state,
    [expenseActions.removeExpenseSuccess]: (state={}, action) => state
})

const transactions = createReducer([], { 
    [expenseActions.selectedDateSuccess]: (state, { payload }) => {
        console.log('in transactions createReducer')
        state.push(payload)
        console.log('state: ', state)
    }
})

// eslint-disable-next-line
export default combineReducers ({
    expense,
    transactions,
})
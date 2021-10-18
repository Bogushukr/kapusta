import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from 'redux';
// import store from '../store'

import expenseActions from "../Actions/expenseActions"

const expense = createReducer([], {
    [expenseActions.addExpenseSuccess]: (state, action) => {
        console.log('action.payload.transaction in exp reducer: ', action.payload.transaction)
        action.payload.transaction.cashIncome === false && 
        state.push(action.payload.transaction)
        return
    },
    [expenseActions.removeExpenseSuccess]: (state={}, action) => state
})

const transactions = createReducer([], { 
    [expenseActions.selectedDateSuccess]: (state, { payload }) => {
        console.log('in transactions createReducer')
        state.push(payload)
        console.log('state: ', state)
    }
})

const date = createReducer('', {
    [expenseActions.selectedDate]: (state, { payload } ) => {
        console.log('in date createReducer payload: ', payload)
        // state.splice(0, state.length)
        // state.push(payload)
        return payload
    }
})

// const date = createReducer([], {
//     [expenseActions.selectedDate]: (state, { payload } ) => {
//         console.log('in date createReducer payload: ', payload)
//         state.splice(0, state.length)
//         state.push(payload)
//     }
// })

// eslint-disable-next-line
export default combineReducers ({
    expense,
    transactions,
    date
})
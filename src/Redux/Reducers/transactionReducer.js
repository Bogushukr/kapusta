import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from 'redux';

import transactionActions from "../Actions/transactionActions"

const transactions = createReducer([], {
    [transactionActions.addTransactionSuccess]: (state, action) => {
        console.log('action.payload.transaction in transaction reducer: ', action.payload.transaction)
        state.push(action.payload.transaction)
    },
    [transactionActions.removeTransactionSuccess]: (state, { payload }) => {
        console.log('payload in tr reducer: ', payload)
        console.log('state in tr reducer: ', state)
        // console.log('state.transactions.transactions: ', state.transactions.transactions);
        // console.log('payload.data.transaction._id: ', payload.data.transaction._id)
        // const filteredState = state.filter(({transactions}) => transactions._id !== payload.data.data.transaction._id)
        state.transactions.transactions.filter((transaction) => transaction._id !== payload.data.data.transaction._id)
        // state.push(filteredState)
    }
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
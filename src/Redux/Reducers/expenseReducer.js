import { createReducer } from "@reduxjs/toolkit"
// import { combineReducers } from "redux"

import expenseActions from "../Actions/expenseActions"

const expense = createReducer([], {
    [expenseActions.addExpenseSuccess]: (state={}, action) => state,
    [expenseActions.removeExpenseSuccess]: (state={}, action) => state
})

export default expense
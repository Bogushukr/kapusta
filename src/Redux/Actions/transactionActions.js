import { createAction } from '@reduxjs/toolkit'

const addTransactionRequest = createAction('transactions/addRequest')
const addTransactionSuccess = createAction('transactions/addSuccess')
const addTransactionError = createAction('transactions/addError')

// const removeExpenseRequest = createAction('expenses/removeRequest')
// const removeExpenseSuccess = createAction('expenses/removeSuccess')
// const removeExpenseError = createAction('expenses/removeError')

// const selectedDateRequest = createAction('date/selectRequest')
// const selectedDateSuccess = createAction('date/selectSuccess')
// const selectedDateError = createAction('date/selectError')

const selectedDate = createAction('date/select')

// const fetchTasksRequest = createAction('tasks/fetchRequest')
// const fetchTasksSuccess = createAction('tasks/fetchSuccess')
// const fetchTasksError = createAction('tasks/fetchError')

// const toggleCompletedRequest = createAction('tasks/toggleCompletedRequest')
// const toggleCompletedSuccess = createAction('tasks/toggleCompletedSuccess')
// const toggleCompletedError = createAction('tasks/toggleCompletedError')

// const changeFilter = createAction('tasks/changeFilter')

// eslint-disable-next-line
export default {
    addTransactionRequest,
    addTransactionSuccess,
    addTransactionError,

    // removeExpenseRequest,
    // removeExpenseSuccess,
    // removeExpenseError,

    // selectedDateRequest,
    // selectedDateSuccess,
    // selectedDateError,

    selectedDate,

//   toggleCompletedRequest,
//   toggleCompletedSuccess,
//   toggleCompletedError,
//   changeFilter,
}

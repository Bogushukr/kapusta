import { createAction } from '@reduxjs/toolkit'

const addTransactionRequest = createAction('transactions/addRequest')
const addTransactionSuccess = createAction('transactions/addSuccess')
const addTransactionError = createAction('transactions/addError')

const removeTransactionRequest = createAction('transaction/removeRequest')
const removeTransactionSuccess = createAction('transaction/removeSuccess')
const removeTransactionError = createAction('transaction/removeError')

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

    removeTransactionRequest,
    removeTransactionSuccess,
    removeTransactionError,

    // selectedDateRequest,
    // selectedDateSuccess,
    // selectedDateError,

    selectedDate,

//   toggleCompletedRequest,
//   toggleCompletedSuccess,
//   toggleCompletedError,
}

import { createAction } from '@reduxjs/toolkit'

const addExpenseRequest = createAction('expenses/addRequest')
const addExpenseSuccess = createAction('expenses/addSuccess')
const addExpenseError = createAction('expenses/addError')

// const fetchTasksRequest = createAction('tasks/fetchRequest')
// const fetchTasksSuccess = createAction('tasks/fetchSuccess')
// const fetchTasksError = createAction('tasks/fetchError')

// const removeTaskRequest = createAction('tasks/removeRequest')
// const removeTaskSuccess = createAction('tasks/removeSuccess')
// const removeTaskError = createAction('tasks/removeError')

// const toggleCompletedRequest = createAction('tasks/toggleCompletedRequest')
// const toggleCompletedSuccess = createAction('tasks/toggleCompletedSuccess')
// const toggleCompletedError = createAction('tasks/toggleCompletedError')

// const changeFilter = createAction('tasks/changeFilter')

export default {
    addExpenseRequest,
    addExpenseSuccess,
    addExpenseError,
//   fetchTasksRequest,
//   fetchTasksSuccess,
//   fetchTasksError,
//   removeTaskRequest,
//   removeTaskSuccess,
//   removeTaskError,
//   toggleCompletedRequest,
//   toggleCompletedSuccess,
//   toggleCompletedError,
//   changeFilter,
}

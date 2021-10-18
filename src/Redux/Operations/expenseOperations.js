import axios from 'axios'
import expenseActions from '../Actions/expenseActions'

axios.defaults.baseURL = 'https://kapusta-organizer.herokuapp.com/api';

const addExpense = expense => async (dispatch) => {
    dispatch(expenseActions.addExpenseRequest())
    // const data = JSON.stringify(expense)
    // const dataParse = JSON.parse(data)
    // console.log('data in addExpense operations: ',  data)
    // console.log('dataParse in addExpense operations: ',  dataParse)
    await axios
      .post('/transactions',  expense)
      // .post('/transactions',  JSON.stringify(expense))
      // .then(({ data }) => console.log('data in addExpense: ', data))
      .then(({ data }) => dispatch(expenseActions.addExpenseSuccess(data)))
      .catch(error => dispatch(expenseActions.addExpenseError(error)))
  }

// const selectedDate = date => async (dispatch) => {
//   dispatch(expenseActions.selectedDateRequest())
//   await axios
//     .get('/transactions')
//     .then(data => {
//       console.log('data in selectedDate: ', data)
//       dispatch(expenseActions.selectedDateSuccess(data.data))
//       console.log('after dispatch')
//     })
//     .catch(err => console.log('err in selectedDate', err))
// }

// eslint-disable-next-line
export default {
    addExpense,
    // selectedDate
}

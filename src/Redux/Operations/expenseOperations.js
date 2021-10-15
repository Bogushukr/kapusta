import axios from 'axios'
import expenseActions from '../Actions/expenseActions'

axios.defaults.baseURL = 'https://kapusta-organizer.herokuapp.com/api';

const addExpense = description => async (dispatch) => {
    dispatch(expenseActions.addExpenseRequest())
    await axios
      .post('/', { description })
      .then(({ data }) => dispatch(expenseActions.addExpenseSuccess(data)))
      .catch(error => dispatch(expenseActions.addExpenseError(error)))
  }

const selectedDate = date => async (dispatch) => {
  dispatch(expenseActions.selectedDateRequest())
  await axios
    .get('/transactions')
    .then(data => {
      console.log('data in selectedDate: ', data)
      dispatch(expenseActions.selectedDateSuccess(data.data))
      console.log('after dispatch')
    })
    .catch(err => console.log('err in selectedDate', err))
}

// eslint-disable-next-line
export default {
    addExpense,
    selectedDate
}

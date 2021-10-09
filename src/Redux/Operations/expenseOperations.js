import axios from 'axios'
import expenseActions from '../Actions/expenseActions'

const addExpense = description => dispatch => {
    dispatch(expenseActions.addExpenseRequest())
    axios
      .post('/', { description })
      .then(({ data }) => dispatch(expenseActions.addExpenseSuccess(data)))
      .catch(error => dispatch(expenseActions.addExpenseError(error)))
  }
// eslint-disable-next-line
export default {
    addExpense
}
  
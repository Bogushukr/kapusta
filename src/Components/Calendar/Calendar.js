import { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from 'react-redux'
import styles from './Calendar.module.css'

import expenseOperations from '../../Redux/Operations/expenseOperations'

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date())
    const dispatch = useDispatch()
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
      <button className={styles.datePickerBTN} onClick={onClick} ref={ref}>
        {value}
      </button>
    ))
    const handleChange = date => {
      setStartDate(date)
      dispatch(expenseOperations.selectedDate(date))
    }
    return (
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        customInput={<ExampleCustomInput />}
        dateFormat='dd.MM.yyyy'
      />
    )
}

export default Calendar
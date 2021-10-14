import { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './Calendar.module.css'

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date())
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
      <button className={styles.datePickerBTN} onClick={onClick} ref={ref}>
        {value}
      </button>
    ));
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date)
          
        }}
        customInput={<ExampleCustomInput />}
        dateFormat='dd.MM.yyyy'
      />
    )
}

export default Calendar
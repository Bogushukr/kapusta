import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import TableSection from '../../Components/TableSection/TableSection'

import styles from './SectionIncome.module.css'

const INITIAL_STATE = {
    description: '',
    category: '',
    sum: ''
}

class SectionIncome extends Component {

    static defaultProps = {}

    state = {...INITIAL_STATE}

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onAddExpense( {...this.state} )
        this.reset()
    }

    reset = () => this.setState( {...INITIAL_STATE} )

    render() {
        const { description, category, sum } = this.state
        return (
            <div className={styles.formContainer}>
                {/* <Calendar /> */}
                <form onSubmit={this.handleSubmit} className={styles.formBody}>
                    <div className={styles.formFields}>
                        <input type='text' placeholder='Описание дохода' name='description' 
                            value={description} onChange={this.handleChange} className={styles.formDescription} required/>
                        <select size='1' name='category' value={category} onChange={this.handleChange} className={styles.formCategory} required>
                            <option value='' defaultValue>Категория дохода</option>
                            <option>ЗП</option>
                            <option>Доп. доход</option>
                        </select>
                        <input placeholder='0.00' name='sum' value={sum} onChange={this.handleChange} className={styles.formSum} required/>
                        {/* <Calculator /> */}
                    </div>
                    <button type='submit' className={styles.enterBTN}>Ввод</button>
                    <button className={styles.clearBTN}>Очистить</button>
                </form>
                <TableSection description={description} category={category} sum={sum}/>
                {/* <Summary /> */}
            </div>
        )
    }
}

export default SectionIncome
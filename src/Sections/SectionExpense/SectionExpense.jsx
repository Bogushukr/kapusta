import React, { Component } from 'react'

const INITIAL_STATE = {
    description: '',
    category: '',
    sum: ''
}

export default class SectionExpense extends Component {

    static defaultProps = {}

    state = {...INITIAL_STATE}

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit( {...this.state} )
        this.reset()
    }

    reset = () => this.setState( {...INITIAL_STATE} )

    render() {
        const { description, category, sum } = this.state
        return (
            <>
                <Calendar />
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Описание товара' name='description' value={description} onChange={this.handleChange} required/>
                    <p>
                        <select size='1' name='Категория товара' value={category} onChange={this.handleChange} required>
                            <option>Транспорт</option>
                            <option>Продукты</option>
                            <option>Здоровье</option>
                        </select>
                    </p>
                    <input placeholder='0.00' value={sum} onChange={this.handleChange} onChange={this.handleChange} required/>
                    <Calculator />
                    <button type='submit'>Ввод</button>
                    <button>Очистить</button>
                    <TableSection />
                    <Summary />
                </form>
            </>
        )
    }
}
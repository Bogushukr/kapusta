import React from 'react'
// import { Link } from 'react-router-dom'

const SectionExpense = () => {
    return (
        // <div>
        //     <Link to='/expense' />
        //     <Link to='/income' />
        // </div>
        <>
            <Calendar />
            <form onSubmit={handleSubmit}>
                <input placeholder='Описание товара' />
                <p>
                    <select size='1' name='Категория товара'>
                        <option>Транспорт</option>
                        <option>Продукты</option>
                        <option>Здоровье</option>
                    </select>
                </p>
                <input placeholder='0.00' onChange={handleChange} />
                <Calculator />
                <button type='submit'>Ввод</button>
                <button>Очистить</button>
            </form>
        </>
    )
}

export default SectionExpense
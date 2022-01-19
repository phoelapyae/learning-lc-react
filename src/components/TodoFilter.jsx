import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

function TodoFilter() {
    const { todosFilter, filter, setFilter } = useContext(TodosContext);

    return (
        <div>
            <button onClick={() => {
                todosFilter()
                setFilter('all')
            }} className={`button filter-button ${
                filter === 'all' ? 'filter-button-active' : '' 
            }`}>
            All
            </button>
            <button onClick={() => {
                todosFilter()
                setFilter('active')
            }} className={`button filter-button ${
                filter === 'active' ? 'filter-button-active' : '' 
            }`}>Active</button>
            <button onClick={() => {
                todosFilter()
                setFilter('completed')
            }} className={`button filter-button ${
                filter === 'completed' ? 'filter-button-active' : '' 
            }`}>Completed</button>
        </div>
    )
}

export default TodoFilter

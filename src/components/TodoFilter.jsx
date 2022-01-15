import React from 'react'
import PropTypes from 'prop-types'

TodoFilter.propTypes = {
    todosFilter: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}

function TodoFilter(props) {
    return (
        <div>
            <button onClick={() => {
                props.todosFilter('all')
                props.setFilter('all')
            }} className={`button filter-button ${
                props.filter === 'all' ? 'filter-button-active' : '' 
            }`}>
            All
            </button>
            <button onClick={() => {
                props.todosFilter('active')
                props.setFilter('active')
            }} className={`button filter-button ${
                props.filter === 'active' ? 'filter-button-active' : '' 
            }`}>Active</button>
            <button onClick={() => {
                props.todosFilter('completed')
                props.setFilter('completed')
            }} className={`button filter-button ${
                props.filter === 'completed' ? 'filter-button-active' : '' 
            }`}>Completed</button>
        </div>
    )
}

export default TodoFilter

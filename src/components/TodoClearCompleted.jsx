import React from 'react'
import PropTypes from 'prop-types'

function TodoClearCompleted(props) {
    return (
        <div>
            <button
                onClick={props.clearCompleted}
                className="button"
            >Clear completed</button>
        </div>
    )
}

TodoClearCompleted.propTypes = {
    clearCompleted: PropTypes.func.isRequired
}

export default TodoClearCompleted

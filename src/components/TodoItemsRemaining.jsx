import React from 'react'
import PropTypes from 'prop-types'

TodoItemsRemaining.propType = {
    remaining: PropTypes.func.isRequired
}

function TodoItemsRemaining(props) {
    return (<span>{props.remaining()} items remaining</span>)
}

export default TodoItemsRemaining

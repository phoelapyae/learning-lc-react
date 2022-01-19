import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { TodosContext } from '../context/TodosContext';

function TodoClearCompleted(props) {

    const { todos, setTodos } = useContext(TodosContext);

    function clearCompleted() {
        setTodos([...todos].filter(todo => !todo.isComplete));
    }

    return (
        <div>
            <button
                onClick={clearCompleted}
                className="button"
            >Clear completed</button>
        </div>
    )
}

export default TodoClearCompleted

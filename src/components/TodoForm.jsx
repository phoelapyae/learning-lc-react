import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoForm(props) {

    const [todoInput, setTodoInput] = useState('');

    function handleTodo(event) {
        setTodoInput(event.target.value);
    }

    function handleInput(event) {
        event.preventDefault();

        if (todoInput.trim().length === 0) {
          return;
        }

        props.addToDo(todoInput);

        setTodoInput('');
    }

    return (
        <div>
            <form action="#" onSubmit={ handleInput }>
                <input
                    type="text"
                    value={todoInput}
                    onChange={ handleTodo }
                    className="todo-input"
                    placeholder="What do you need to do?"
                />
            </form>
        </div>
    )
}

TodoForm.propTypes = {
    addToDo: PropTypes.func
}

export default TodoForm;
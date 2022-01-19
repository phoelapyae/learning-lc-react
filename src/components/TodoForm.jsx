import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { TodosContext } from '../context/TodosContext';

function TodoForm() {

    const [todoInput, setTodoInput] = useState('');
    const { todos, setTodos, idForTodo, setIdForTodo } = useContext(TodosContext);

    function handleTodo(event) {
        setTodoInput(event.target.value);
    }

    function addTodo(event) {
        event.preventDefault();

        if (todoInput.trim().length === 0) {
          return;
        }

        setTodos([...todos, {
            id: idForTodo,
            title: todoInput,
            isComplete: false
        }]);

        setIdForTodo(prevIdForTodo => prevIdForTodo + 1);

        setTodoInput('');
    }

    return (
        <div>
            <form action="#" onSubmit={addTodo}>
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

export default TodoForm;
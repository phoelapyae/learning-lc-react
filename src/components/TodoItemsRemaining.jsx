import React, { useMemo, useContext } from 'react'
import { TodosContext } from '../context/TodosContext';

function TodoItemsRemaining(props) {

    const { todos, setTodos, idForTodo, setIdForTodo } = useContext(TodosContext);

    function remainingCalculation() {
        // console.log('Calculating remaining todos. This is slow.');
        // for (let index = 0; index < 2000000000; index++) {
        // }
        return todos.filter(todo => !todo.isComplete).length;
    }

    const remaining = useMemo(remainingCalculation, [todos]);
    
    return (<span>{remaining} items remaining</span>)
}

export default TodoItemsRemaining

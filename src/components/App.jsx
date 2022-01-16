import { useState, useRef, useEffect, useMemo } from 'react';
import '../reset.css';
import '../App.css';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [name, setName] = useState('');
  const nameInputEl = useRef('');

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
      isEditing: false
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
      isEditing: false
    },
  ]);

  const [idForTodo, setIdForTodo] = useState(4);

  function addToDo(todo) {
    setTodos([...todos, {
      id: idForTodo,
      title: todo,
      isComplete: false
    }])

    setIdForTodo(prevIdForTodo => prevIdForTodo + 1)
  }

  function deleteTodo(id) {
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  function completeTodo(id) {
    const updatedTodos = todos.map(function (todo) {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function markAsEditing(id) {
    const updatedTodos = todos.map(function (todo) {
      if (todo.id === id) {
        todo.isEditing = true;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function cancelEdit(event, id) {
    const updatedTodos = todos.map(function (todo) {
      if (todo.id === id) {
        todo.isEditing = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    const updatedTodos = todos.map(function (todo) {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function remainingCalculation() {
    // console.log('Calculating remaining todos. This is slow.');
    // for (let index = 0; index < 2000000000; index++) {
    // }
    return todos.filter(todo => !todo.isComplete).length;
  }

  const remaining = useMemo(remainingCalculation, [todos]);

  function clearCompleted() {
    setTodos([...todos].filter(todo => !todo.isComplete));
  }

  function completeAllTodos() {
    const updatedTodos = todos.map(todo => {
      todo.isComplete = true;
      return todo;
    });
    setTodos(updatedTodos);
  }

  function todosFilter(filter) {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.isComplete);
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.isComplete);
    }
  }

  useEffect(() => {
    // console.log('use effect running');
    nameInputEl.current.focus();
    
    return function cleanup() {
      // console.log('Clean up.');
    }
  }, []);

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <div className="name-container">
          <h2>What's your name?</h2>
          <button onClick={() => nameInputEl.current.focus()}>Get Ref</button>
          <form action="#">
            <input
              type="text"
              ref={nameInputEl}
              className="todo-input"
              placeholder="What is your name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </form>
          {name && <p className="name-label">Hello, {name}</p>}
        </div>
        <h2>Todo App</h2>

        <TodoForm addToDo={addToDo}/>

        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            completeTodo={completeTodo}
            markAsEditing={markAsEditing}
            updateTodo={updateTodo}
            cancelEdit={cancelEdit}
            deleteTodo={deleteTodo}
            remaining={remaining}
            clearCompleted={clearCompleted}
            completeAllTodos={completeAllTodos}
            todosFilter={todosFilter}
          /> 
        ): (
          <NoTodos/>
        )}
        
      </div>
    </div>
  );
}

export default App;
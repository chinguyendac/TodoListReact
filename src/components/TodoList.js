import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] =  useState([]);
    const [isSort, setIsSort] = useState(false);

    //Add New Todo
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(newTodos);
    }

    //Update Todo
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    //Remove Todo
    const removeTodo = id => {
        const newArr = [...todos].filter(todo => todo.id !== id);
        setTodos(newArr);
    }

    //Change Sort 
    const handleChangeSort = () => {
        let newIsSort = !isSort;
        setIsSort(newIsSort);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onSubmit={addTodo}/>
            <button className="todo-button todo-button--square" onClick={handleChangeSort}>Sort Time</button>
            <Todo todos={todos}
                isSort={isSort} 
                completeTodo={completeTodo} 
                removeTodo={removeTodo} 
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList

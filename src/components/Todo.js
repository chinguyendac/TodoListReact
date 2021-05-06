import React, { useState, useEffect, useRef } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })


    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: '',
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => {
        return <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <HighlightOffIcon onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <EditIcon onClick={() => setEdit({id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div>
    })
}

export default Todo

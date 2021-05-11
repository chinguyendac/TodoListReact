import React, { useState, useEffect, useRef } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import * as _ from "lodash";

function Todo({ todos, isSort, completeTodo, removeTodo, updateTodo }) {
    console.log(isSort);
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        time: '',
    })


    const submitUpdate = (value,time) => {
        updateTodo(edit.id, value,time);
        setEdit({
            id: null,
            value: '',
            time: '',
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    const sortTodos = _.sortBy(todos, 'time');
    console.log(sortTodos);


    if(!isSort) {
        return sortTodos.map((todo, index) => {
                return <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key={index}>
                    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.time} : {todo.text} 
                    </div>
                    <div className="icons">
                        <HighlightOffIcon onClick={() => removeTodo(todo.id)}
                            className='delete-icon'
                        />
                        <EditIcon onClick={() => setEdit({id: todo.id, value: todo.text, time: todo.time })}
                            className='edit-icon'
                        />
                    </div>
                </div>
        })
    } else {
        return sortTodos.reverse().map((todo, index) => {
            return <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.time} : {todo.text} 
                </div>
                <div className="icons">
                    <HighlightOffIcon onClick={() => removeTodo(todo.id)}
                        className='delete-icon'
                    />
                    <EditIcon onClick={() => setEdit({id: todo.id, value: todo.text, time: todo.time })}
                        className='edit-icon'
                    />
                </div>
            </div>
    })
    }

    // return (
    //      !isSort ? (sortTodos.map((todo, index) => {
    //         <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    //         key={index}>
    //             <div key={todo.id} onClick={() => completeTodo(todo.id)}>
    //             {todo.time} : {todo.text} 
    //             </div>
    //             <div className="icons">
    //                 <HighlightOffIcon onClick={() => removeTodo(todo.id)}
    //                     className='delete-icon'
    //                 />
    //                 <EditIcon onClick={() => setEdit({id: todo.id, value: todo.text, time: todo.time })}
    //                     className='edit-icon'
    //                 />
    //             </div>
    //         </div>
    //     })) : (reverseTodos.map((todo, index) => {
    //         return <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    //         key={index}>
    //             <div key={todo.id} onClick={() => completeTodo(todo.id)}>
    //             {todo.time} : {todo.text} 
    //             </div>
    //             <div className="icons">
    //                 <HighlightOffIcon onClick={() => removeTodo(todo.id)}
    //                     className='delete-icon'
    //                 />
    //                 <EditIcon onClick={() => setEdit({id: todo.id, value: todo.text, time: todo.time })}
    //                     className='edit-icon'
    //                 />
    //             </div>
    //         </div>
    //     }))
    // ) 
    
    
    // sortTodos.map((todo, index) => {
    //     return <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    //     key={index}>
    //         <div key={todo.id} onClick={() => completeTodo(todo.id)}>
    //         {todo.time} : {todo.text} 
    //         </div>
    //         <div className="icons">
    //             <HighlightOffIcon onClick={() => removeTodo(todo.id)}
    //                 className='delete-icon'
    //             />
    //             <EditIcon onClick={() => setEdit({id: todo.id, value: todo.text, time: todo.time })}
    //                 className='edit-icon'
    //             />
    //         </div>
    //     </div>
    // })
}

export default Todo

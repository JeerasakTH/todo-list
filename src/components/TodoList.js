import React from 'react';

const TodoList = ({ todos, handleDelete, toggleComplete }) => {
    return (
        <ul className='list-group'>
            {todos.map((todo) => (
                <li className='list-group-item' key={todo.id}>
                    <div className='d-flex justify-content-between'>
                        <span className='d-flex align-items-center'>
                            <input 
                                type="checkbox"
                                className="form-check-input"
                                onChange={() => toggleComplete(todo.id)}
                                checked={todo.complete}
                            />
                            {todo.todo}
                        </span>
                        <button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
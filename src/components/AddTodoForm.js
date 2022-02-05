import React from 'react';
import TodoList from './TodoList';

const AddTodoForm = ({ handleChange, handleSubmit }) => {
    return (
            <form onSubmit={handleSubmit} className='form-inline mt-3 mb-3'>
                <label className='sr-only'>Name</label>
                <input 
                    type="text"
                    className='form-control mb-2 mr-sm-2 w-50'
                    placeholder='Add todo...'
                    name='todo'
                    onChange={handleChange}
                    required
                />
                <button type='submit' className='btn btn-primary mb-2'>
                    Submit
                </button>
            </form>
    );
};

export default AddTodoForm;
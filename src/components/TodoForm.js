import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value)
        setValue("")
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <button type="submit" className='todo-btnn'>Enter the task:</button>
            <input type="text" className='todo-input' 
            value={value}placeholder="Get Groceries" 
            onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}
import React from 'react'

interface TodoProps {
    onClick(): void
    completed: boolean
    text: string
}


const Todo = ({ onClick, completed, text }: TodoProps) => (
    <li className={`list-group-item rounded list-group-item-action ${completed ? 'completed' : ''}`}
        onClick={onClick}
    >
        {text}
    </li>
)

export default Todo

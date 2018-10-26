import React from 'react'
import { TodoModel } from '../models';

interface TodoListProps {
    todos: TodoModel[];
    toggleTodo(id: number): void;
}

const TodoList = ({ todos, toggleTodo }: TodoListProps) => {
    if (!todos.length) {
        return <div className="empty-list">There are no todos yet!</div>;
    }

    return (
        <ol>
            {todos.map(todo =>
                <li
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    className={todo.completed ? 'completed' : ''}>
                    {todo.text}
                </li>)}
        </ol>
    );
};

export default TodoList;

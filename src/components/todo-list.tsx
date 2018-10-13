import React from 'react'
import Todo from './todo'

interface TodoListProps {
    todos: { id: number, completed: boolean, text: string }[]
    toggleTodo(id: number): void
}

const TodoList = ({ todos, toggleTodo }: TodoListProps) => (
    <ul className="list-group mt-3">
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        )}
    </ul>
)

export default TodoList

import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/add-todo'
import VisibleTodoList from '../containers/visible-todo-list'
import TodoHeader from './todo-header';

const App = () =>
    <div className="container my-3 p-3 rounded">
        <TodoHeader />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>

export default App

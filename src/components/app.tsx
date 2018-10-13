import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/add-todo'
import VisibleTodoList from '../containers/visible-todo-list'

const App = () =>
    <div className="container my-3 p-3 rounded">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>

export default App

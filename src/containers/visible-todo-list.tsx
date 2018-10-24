import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { VisibilityFilter, toggleTodo } from '../actions'
import { AppState, TodoModel } from '../models'
import TodoList from '../components/todo-list';

const getVisibleTodos = (todos: TodoModel[], filter: VisibilityFilter) => {
    switch (filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error(`Unknown filter: ${filter}`)
    }
}

const mapStateToProps = (state: AppState) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

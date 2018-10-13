import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/todo-list'
import { VisibilityFilter } from '../actions'
import { AppState, TodoState } from '../models'

const getVisibleTodos = (todos: TodoState[], filter: VisibilityFilter) => {
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

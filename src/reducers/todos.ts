import { Action, ActionType } from '../actions/action-types'
import { TodoState } from '../models'

const todos = (state: TodoState[] = [], action: Action): TodoState[] => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case ActionType.FETCH_TODOS:
            return action.todos.slice();
        case ActionType.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case ActionType.RESET:
            return [];
        default:
            return state
    }
}

export default todos

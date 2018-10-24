import { Action, ActionType } from '../actions/action-types'
import { TodoModel } from '../models'

const todos = (state: TodoModel[] = [], action: Action): TodoModel[] => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case ActionType.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        case ActionType.FETCH_TODOS:
            return action.todos.slice();
        case ActionType.RESET_TODOS:
            return [];
        default:
            return state
    }
}

export default todos

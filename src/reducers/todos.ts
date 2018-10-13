import { Action } from 'redux'
import { TodoState } from '../models'

const todos = (state: TodoState[] = [], action: Action): TodoState[] => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: (action as any).id,
                    text: (action as any).text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === (action as any).id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}

export default todos

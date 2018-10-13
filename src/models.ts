import { VisibilityFilter } from './actions'

export interface AppState {
    todos: TodoState[]
    visibilityFilter: VisibilityFilter
}

export interface TodoState {
    id: number
    completed: boolean
    text: string
}

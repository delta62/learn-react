import { VisibilityFilter } from './actions'

export interface AppState {
    todos: TodoModel[]
    visibilityFilter: VisibilityFilter
}

export interface TodoModel {
    id: number
    completed: boolean
    text: string
}

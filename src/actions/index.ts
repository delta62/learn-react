import { Action, ActionType } from "./action-types";

let nextTodoId = 0

export const addTodo = (text: string): Action => ({
    type: ActionType.ADD_TODO,
    id: nextTodoId++,
    text: text
})

export const toggleTodo = (id: number): Action => ({
    type: ActionType.TOGGLE_TODO,
    id: id
})

export const setVisibilityFilter = (filter: VisibilityFilter): Action => ({
    type: ActionType.SET_VISIBILITY_FILTER,
    filter: filter
})

export enum VisibilityFilter {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
}

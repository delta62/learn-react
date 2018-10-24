import { Action } from "redux";
import { TodoModel } from "../models";
import { VisibilityFilter } from ".";

export enum ActionType {
    ADD_TODO = "ADD_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    RESET_TODOS = "RESET_TODOS",
    FETCH_TODOS = "FETCH_TODOS",
    SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
}

// Define action payloads
export interface AddTodoAction extends Action<ActionType.ADD_TODO> {
    id: number;
    text: string;
}
export interface ToggleTodoAction extends Action<ActionType.TOGGLE_TODO> {
    id: number;
}
export interface ResetTodoAction extends Action<ActionType.RESET_TODOS> {}
export interface FetchTodosAction extends Action<ActionType.FETCH_TODOS> {
    todos: TodoModel[];
}
export interface SetVisibilityFilterAction extends Action<ActionType.SET_VISIBILITY_FILTER> {
    filter: VisibilityFilter;
}

// union all actions
export type Action =
    FetchTodosAction |
    AddTodoAction |
    ToggleTodoAction |
    ResetTodoAction |
    SetVisibilityFilterAction;

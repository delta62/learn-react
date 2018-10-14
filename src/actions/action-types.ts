import { Action } from "redux";
import { TodoState } from "../models";
import { VisibilityFilter } from ".";

export enum ActionType {
    ADD_TODO = "ADD_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    FETCH_TODOS = "FETCH_TODOS",
    RESET = "RESET",
    SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
}

// Define action payloads
export interface AddTodoAction extends Action<ActionType.ADD_TODO> {
    id: number;
    text: string;
}
export interface FetchTodosAction extends Action<ActionType.FETCH_TODOS> {
    todos: TodoState[];
}
export interface ResetAction extends Action<ActionType.RESET> {}
export interface ToggleTodoAction extends Action<ActionType.TOGGLE_TODO> {
    id: number;
}
export interface SetVisibilityFilterAction extends Action<ActionType.SET_VISIBILITY_FILTER> {
    filter: VisibilityFilter;
}

// union all actions
export type Action =
    AddTodoAction |
    FetchTodosAction |
    ResetAction |
    SetVisibilityFilterAction |
    ToggleTodoAction;

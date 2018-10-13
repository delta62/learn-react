import { Action } from "redux";
import { VisibilityFilter } from ".";

export enum ActionType {
    ADD_TODO = "ADD_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
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
export interface SetVisibilityFilterAction extends Action<ActionType.SET_VISIBILITY_FILTER> {
    filter: VisibilityFilter;
}

// union all actions
export type Action =
    AddTodoAction |
    SetVisibilityFilterAction |
    ToggleTodoAction;

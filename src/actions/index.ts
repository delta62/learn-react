import * as TodoApi from '../api/todo-api';
import { Action, ActionType } from "./action-types";

export const addTodo = (text: string): Action => {
    const id = TodoApi.addNewTodo(text);

    return {
        type: ActionType.ADD_TODO,
        id,
        text
    };
};

export const fetchTodos = (): Action => {
    const todos = TodoApi.getAll();

    return {
        type: ActionType.FETCH_TODOS,
        todos
    };
};

export const toggleTodo = (id: number): Action => {
    TodoApi.toggleTodo(id);

    return {
        type: ActionType.TOGGLE_TODO,
        id
    };
};

export const resetTodos = () => {
    TodoApi.clearAll();

    return {
        type: ActionType.RESET
    };
};

export const setVisibilityFilter = (filter: VisibilityFilter): Action => ({
    type: ActionType.SET_VISIBILITY_FILTER,
    filter: filter
});

export enum VisibilityFilter {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
}

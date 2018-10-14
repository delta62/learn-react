import { TodoState } from "../models";

// Wrapper around local storage
const Database = (() => {
    const STORAGE_KEY = "app";

    // initial load from storage
    let { nextTodoId, todoTable } = (() => {
        const prevData = localStorage.getItem(STORAGE_KEY);
        let nextTodoId = 0;
        let todoTable: Record<string, TodoState> = {};

        if (prevData) {
            try {
                let { id, todos } = JSON.parse(prevData);
                nextTodoId = id;
                todoTable = todos;
            } catch { }
        };

        return { nextTodoId, todoTable };
    })();

    const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify({
        id: nextTodoId,
        todos: todoTable
    }));

    return {
        add: (text: string) => {
            const todo = { id: nextTodoId++, text, completed: false };
            todoTable[todo.id] = todo;
            save();
            return todo.id;
        },

        reset: () => {
            localStorage.removeItem(STORAGE_KEY);
            nextTodoId = 0;
            todoTable = {};
        },

        updateTodo: (todo: TodoState) => {
            todoTable[todo.id] = todo;
            save();
        },

        getById: (id: number) => ({ ...todoTable[id] }),

        getAll: () => Object.keys(todoTable).map(id => ({ ...todoTable[id] })),
    };
})();

export const addNewTodo = (text: string) => Database.add(text);

export const toggleTodo = (id: number) => {
    const todo = Database.getById(id);
    if (!todo) return;

    todo.completed = !todo.completed;
    Database.updateTodo(todo);
};

export const getAll = () => Database.getAll().sort((todo1, todo2) => todo1.id - todo2.id);

export const clearAll = () => Database.reset();

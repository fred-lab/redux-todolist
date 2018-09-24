import types from "./types";

export const addTodo = (todo) => ({
    type: types.ADD_TODO,
    payload: todo
});

export const removeTodo = (index) => ({
    type: types.REMOVE_TODO,
    payload: index
});

export const editTodo = (index, todo) => ({
    type: types.EDIT_TODO,
    payload: {
        index,
        todo
    }
});
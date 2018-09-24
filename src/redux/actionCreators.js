import types from "./types";

export default {
    addTodo : (todo) => ({
        type: types.ADD_TODO,
        payload: todo
    }),
    removeTodo : (index) => ({
        type: types.REMOVE_TODO,
        payload: index
    }),
    editTodo : (index, todo) => ({
        type: types.EDIT_TODO,
        payload: {
            index,
            todo
        }
    })
}
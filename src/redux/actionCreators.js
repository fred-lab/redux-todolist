import types from "./types";

export default {
    addTodo : (todo) => ({
        type: types.ADD_TODO,
        payload: todo
    }),
    removeTodo : (todo) => ({
        type: types.REMOVE_TODO,
        payload: todo
    }),
    editTodo : (todo) => ({
        type: types.EDIT_TODO,
        payload: todo
    }),
    updateStatus: (id, status) => ({
        type: types.UPDATE_STATUS,
        payload: {
            id,
            status
        }
    })
}
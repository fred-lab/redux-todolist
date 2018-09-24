import types from "./types";

/**
 * Initiate a state with defaults values
 * @type {{todoList: string[]}}
 */
const initialState = {
    todoList : [
        "Apprendre React",
        "Comprendre Redux",
        "Faire les courses"
    ]
};

/**
 * Root reducer
 * @param state
 * @param action
 * @returns {{todoList: string[]}}
 */
export default (state = initialState, action) => {
    const {todoList} = state;
    const {type, payload} = action;

    switch (type) {
        case types.ADD_TODO:
            return {
                ...state,
                todoList : [payload, ...todoList]
            };
        case types.REMOVE_TODO:
            return {
                ...state,
                todoList: todoList.filter((todo, index) => index !== payload)
            };
        case types.EDIT_TODO:
            return {
                ...state,
                todoList: [
                    ...todoList.slice(0, payload.index),
                    payload.todo,
                    ...todoList.slice(payload.index +1)
                ]
            };
        default:
            return state;
    }
};

import types from "./types";

export const initialState = {
    todoList : [
        "Apprendre React",
        "Comprendre Redux",
        "Faire les courses"
    ]
};

export const rootReducer = (state = initialState, action) => {
    const {todoList} = state;
    const {type, payload} = action;

    switch (type) {
        case types.ADD_TODO:
            /** Comme le state peut être différent de celui de initialState, il vaut mieux réinjecter le state puis modifié la propriété adéquat */
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

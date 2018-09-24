import types from "./types";
import Parameters from "../Parameters";

/**
 * Initiate a state with defaults values
 * @type {{todoList: string[]}}
 */
const initialState = {
    todoList : [
        {
            id: 0,
            title: "Apprendre React",
            status: Parameters.status.done
        },
        {
            id: 1,
            title: "Comprendre Redux",
            status: Parameters.status.inProgress
        },
        {
            id: 2,
            title: "Trouver un job",
            status: Parameters.status.inProgress
        },
        {
            id: 3,
            title: "Faire les courses",
            status: Parameters.status.done
        },
        {
            id: 4,
            title: "Apprendre PWA",
            status: Parameters.status.await
        },
        {
            id: 5,
            title: "Apprendre NodeJS",
            status: Parameters.status.await
        },
        {
            id: 6,
            title: "Jouer au Loto",
            status: Parameters.status.await
        }
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
                todoList : [...todoList, {id : todoList.length, title: payload, status : Parameters.status.await}]
            };
        case types.REMOVE_TODO:
            return {
                ...state,
                todoList: todoList.filter((todo) => todo !== payload)
            };
        case types.EDIT_TODO:
            // Todo à mettre à jour
            return {
                ...state,
                todoList: [
                    ...todoList.slice(0, payload.index),
                    payload.todo,
                    ...todoList.slice(payload.index +1)
                ]
            };
        case types.UPDATE_STATUS:
            return {
                ...state,
                todoList: [
                    ...todoList.slice(0, payload.id),
                    {
                        id : payload.id,
                        title: todoList[payload.id].title,
                        status: payload.status
                    },
                    ...todoList.slice(parseInt(payload.id) + 1)
                ]
            };
        default:
            return state;
    }
};

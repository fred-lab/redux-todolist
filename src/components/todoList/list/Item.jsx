import React from "react";
import actionCreator from "../../../redux/actionCreators";
import {connect} from "react-redux"
import PropTypes from "prop-types";

import "./Item.css";


function Item (props){
    /**
     * Remove a To-do from the list
     */
    const onRemove = (todo) => {
        const {dispatch} = props;
        const {removeTodo} = actionCreator;

        /** Update the store*/
        dispatch(removeTodo(todo))
    };

    const { todo, id } = props;

    return (
        <div className="item" draggable="true" id={id}>
            <p className="title">{ todo.title }</p>
            <span className="close" onClick={() => onRemove(todo)}>X</span>
        </div>
    )
}
/**
 * Connect to the store
 */
export default connect()(Item)

Item.proptypes = {
    text: PropTypes.string.isRequired
};
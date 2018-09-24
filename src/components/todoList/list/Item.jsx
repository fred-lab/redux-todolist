import React from "react";
import actionCreator from "../../../redux/actionCreators";
import {connect} from "react-redux"
import PropTypes from "prop-types";

import "./Item.css";


function Item (props){
    /**
     * Remove a To-do from the list
     */
    const onRemove = () => {
        const {index, dispatch} = props;
        const {removeTodo} = actionCreator;

        /** Update the store*/
        dispatch(removeTodo(index))
    };

    const { text } = props;

    return (
        <div className="item" draggable="true">
            <p className="title">{ text }</p>
            <span className="close" onClick={onRemove}>X</span>
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
import React from "react";
import actionCreator from "../../../redux/actionCreators";
import {connect} from "react-redux"
import PropTypes from "prop-types";


function Item (props){
    /**
     * Remove a To-do from the list
     */
    const onRemove = () => {
        const {index, dispatch} = this.props;
        const {removeTodo} = actionCreator;

        /** Update the store*/
        dispatch(removeTodo(index))
    };

    const { text } = props;

    return (
        <div>
            <p>{ text }</p>
            <span onClick={onRemove}>close</span>
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
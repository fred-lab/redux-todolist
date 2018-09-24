import React from "react";
import Item from "./list/Item";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./List.css";

const mapStateToProps = state =>({
    todoList: state.todoList
});

function List (props){
    const {todoList, title, color} = props;

    return (
        <div className={"list list-border-" + color}>
            <div className={"title list-title list-title-" + color}>
                <h2>{title}</h2>
            </div>
            {
                todoList.map( (todo, index) => <Item key={index} text={todo} index={index}/>)
            }
        </div>
    )
}

/**
 * Connect to the store and subscribe to the update
 */
export default connect(
    mapStateToProps
)(List)

List.proptypes = {
    todoList: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};
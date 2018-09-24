import React from "react";
import Item from "./list/Item";
import {connect} from "react-redux"
import PropTypes from "prop-types"

const mapStateToProps = state =>({
    todoList: state.todoList
});

function List (props){
    const {todoList} = props;

    return (
        <div>
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
    todoList: PropTypes.array.isRequired
};
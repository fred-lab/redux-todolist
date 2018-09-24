import React, {Component} from "react";
import actionCreator from "../../../redux/actionCreators";
import {connect} from "react-redux"

class Item extends Component {
    constructor(props){
        super(props);
    }

    /**
     * Remove a To-do from the list
     */
    onRemove = () => {
        const {index, dispatch} = this.props;
        const {removeTodo} = actionCreator;

        /** Update the store*/
        dispatch(removeTodo(index))
    };

    render(){
        const { text } = this.props;

        return (
            <div>
                <p>{ text }</p>
                <span onClick={this.onRemove}>close</span>
            </div>
        )
    }
}

export default connect()(Item)
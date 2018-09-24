import React, {Component} from "react";
import actionCreator from "../../redux/actionCreators";
import {connect} from "react-redux";

import "./Input.css";

const mapStateToProps = state =>({
    todoList: state.todoList
});

class Input extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: ""
        }
    }

    /**
     * Add a to-do to the store
     * @param event
     */
    addTodo = event => {
        const {value} = this.state;
        const {dispatch} = this.props;
        const {addTodo} = actionCreator;

        if(event.key !== "Enter" || !value){
            return;
        }

        /** Update the store */
        dispatch(addTodo(value))

        this.setState({value: ""})
    };

    render(){
        const {value} = this.state;

        return (
            <input
                className="input"
                type="text"
                value={value}
                placeholder="Appuyer sur entrée pour ajouter une tâche"
                onChange={event => this.setState({value: event.target.value})}
                onKeyPress={event => this.addTodo(event)}
            />
        )
    }
}

/**
 * Connect to the store and subscribe to the update
 */
export default connect(
    mapStateToProps
)(Input)
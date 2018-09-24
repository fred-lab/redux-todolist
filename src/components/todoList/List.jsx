import React, {Component} from "react";
import Item from "./list/Item";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import "./List.css";
import actionCreator from "../../redux/actionCreators";

const mapStateToProps = state =>({
    todoList: state.todoList
});

class List extends Component{
    constructor(props){
        super(props)

        this.dropZone = React.createRef();

        this.state = {
            isHover : false,
        }
    }

    componentDidMount() {
        /** Prevent default behaviors**/
        this.setListeners(['dragenter', 'dragover', 'dragleave', 'drop'], this.preventDefaults);

        /** When a element enter in the drop zone, highlight the drop zone **/
        this.setListeners(['dragenter', 'dragover'], () => this.setState(() => ({isHover: true})));

        /** When a element leave (or drop in) the drop zone, unhighlight the drop zone **/
        this.setListeners(['dragleave', 'drop'], () => this.setState(() => ({isHover: false})));

        /** Get the element currently dragged */
        this.setListeners(['dragstart'], e => e.dataTransfer.setData("id", e.target.id));

        /** Handle the element on the drop event **/
        // this.setListeners(['drop'], e => console.log('drop', e.dataTransfer.getData("id"), this.props.status));
        this.setListeners(['drop'], e => this.updateTodoStatus(e.dataTransfer.getData("id"), this.props.status));

    }


    /**
     * Set a list of listener with a callback
     * @param types
     * @param callback
     */
    setListeners(types, callback){
        types.forEach(eventName => {
            this.dropZone.current.addEventListener(eventName, callback, false)
        });
    }

    /**
     * Prevent default behaviors
     * @param event
     */
    preventDefaults(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    updateTodoStatus(id, status){
        const {dispatch} = this.props;
        const {updateStatus} = actionCreator;

        /** Update the store*/
        dispatch(updateStatus(id, status))
    }

    /**
     * Render the component
     * @returns {*}
     */
    render(){
        const {todoList, title, color, status} = this.props;
        const {isHover} = this.state;

        return (
            <div id={status} className={ isHover ? "list-hover list list-border-" + color : "list list-border-" + color} ref={this.dropZone}>
                <div className={"title list-title list-title-" + color}>
                    <h2>{title}</h2>
                </div>
                {
                    todoList
                        .filter(todo => todo.status === status)
                        .map( (todo, index) => <Item key={index} todo={todo} id={todo.id} />)
                }
            </div>
        )
    }
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
    color: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};
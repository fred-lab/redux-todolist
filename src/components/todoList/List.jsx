import React, {Component} from "react";
import Item from "./list/Item";
import {connect} from "react-redux"

const mapStateToProps = state =>({
    todoList: state.todoList
});

class List extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {todoList} = this.props;

        return (
            <div>
                {
                    todoList.map( (todo, index) => <Item key={index} text={todo} index={index}/>)
                }
            </div>
        )
    }
}

export default connect(
    mapStateToProps
)(List)
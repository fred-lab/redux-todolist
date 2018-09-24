import React, {Component} from "react";
import Item from "./list/Item";

export default class Input extends Component {
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
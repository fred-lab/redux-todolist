import React, {Component} from "react";
import InputTodo from "./todoList/Input";
import List from "./todoList/List";

export default class TodoList extends Component {
    constructor(props){
        super(props)
    }

    render(){
        /** Todo A supprimer */
        const list = ['toto', 'titi', 'tata'];

        return (
            <div>
                <h1>Redux Todo List</h1>
                <p>Ajouter une to-do</p>
                <InputTodo />
                <p>Editer une todo en cliquant dessus</p>
                <List todoList={list}/>
            </div>
        )
    }
}
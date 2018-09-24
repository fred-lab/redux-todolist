import React from "react";
import InputTodo from "./todoList/Input";
import List from "./todoList/List";

export default function TodoList (){
    return (
        <div>
            <h1>Redux Todo List</h1>
            <p>Ajouter une to-do</p>
            <InputTodo />
            <p>Editer une todo en cliquant dessus</p>
            <List />
        </div>
    )
}
import React from "react";
import InputTodo from "./todoList/Input";
import List from "./todoList/List";

import "./TodoList.css";

export default function TodoList (){
    return (
        <div className="container">
            <h1>Redux Todo List</h1>
            <InputTodo />
            <section className="todos-lists">
                <List title="En Attente" color="blue"/>
                <List title="En cours" color="green"/>
                <List title="Terminé" color="orange"/>
            </section>
        </div>
    )
}
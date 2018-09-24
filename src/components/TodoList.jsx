import React from "react";
import InputTodo from "./todoList/Input";
import List from "./todoList/List";
import Parameters from "../Parameters";

import "./TodoList.css";

export default function TodoList (){
    return (
        <div className="container">
            <h1>Redux Todo List</h1>
            <InputTodo />
            <section className="todos-lists">
                <List title="En Attente" color="blue" status={Parameters.status.await}/>
                <List title="En cours" color="green" status={Parameters.status.inProgress} />
                <List title="Terminé" color="orange" status={Parameters.status.done}/>
            </section>
        </div>
    )
}
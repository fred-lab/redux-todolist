import React, {Component} from "react";

export default class Input extends Component {
    constructor(props){
        super(props);

        this.onRemove = this.onRemove.bind(this)
    }

    /**
     * Remove a To-do from the list
     * @param index
     */
    onRemove(index){
        console.log(index)
    }

    render(){
        const { text, index } = this.props;

        return (
            <div>
                <p>{ text }</p>
                <span onClick={ () => this.onRemove(index) }>*</span>
            </div>
        )
    }
}
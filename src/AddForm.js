import React, { Component } from 'react'
import { css } from "emotion";

class AddForm extends Component{
    state={
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.content === "") {
            alert('The store is all out of empty strings :/')
        } else {
        this.props.addItem(this.state);
        this.setState({
            content: ""
        })
    }
    }

    render(){
        return(
            <form 
                className={css`
                margin: 20px;
                `}
                onSubmit={this.handleSubmit}>
                <input className={css`
                &:focus {
                    border: 5px solid hotpink;
                }
                `}
                type="textarea" 
                placeholder="add an item..."
                size="30"
                onChange={this.handleChange}
                value={this.state.content}
                ></input>
            </form>
        )
    }
}



export default AddForm
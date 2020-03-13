import React, { Component } from 'react'

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
        this.props.addItem(this.state);
        this.setState({
            content: ""
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="textarea" 
                placeholder="add an item"
                onChange={this.handleChange}
                value={this.state.content}
                ></input>
            </form>
        )
    }
}



export default AddForm
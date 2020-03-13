import React, { Component } from 'react';
import nextId from "react-id-generator";
import ListItems from './ListItems';

class App extends Component {
  state={
    listItems:[
      {id: nextId(), name: 'milk', complete: false},
      {id: nextId(), name: 'bread', complete: false},
      {id: nextId(), name: 'eggs', complete: false},
      {id: nextId(), name: 'bacon', complete: false}
    ]
  }

  deleteItem = (id) => {
    console.log(id);
    const listItems = this.state.listItems.filter( item => {
      return item.id !== id
    });
    this.setState({
      listItems
    })
  }

  render() {
  return (
    <div className="center">
      <h1>shopping l!st</h1>
        <ListItems listItems={this.state.listItems} deleteItem={this.deleteItem}/>
    </div>
  );
}
}

export default App;

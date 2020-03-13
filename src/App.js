import React, { Component } from 'react';
import nextId from "react-id-generator";
import ListItems from './ListItems';
import AddForm from './AddForm';
import {css} from 'emotion';

class App extends Component {
  state={
    listItems:[
      {id: nextId(), name: 'Milk', complete: false},
      {id: nextId(), name: 'Bread', complete: false},
      {id: nextId(), name: 'Eggs', complete: false},
      {id: nextId(), name: 'Bacon', complete: false}
    ]
  }

  addItem = (item) => {
    item.id = nextId();
    item.name = item.content;
    item.complete = false;
    let listItems = [...this.state.listItems, item];
    this.setState({
      listItems
    })
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

  toggleComplete = (id) => {
    console.log(id);
    this.setState({
      listItems: this.state.listItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        } else {
          return item;
        }
      } )
    })

  }

  render() {
  return (
    <>
    <div className="center">
      <h1 className={css`
        display: inline-block;
        padding: 20px;
        color: white;
        border-radius: 20px;
        background-color: hotpink;
        border: 2px solid pink;
      `}>Shopping L!st</h1>
        <AddForm addItem={this.addItem}/>
        </div>
        <ListItems 
        className={css`
        display: flex;
        flex-direction: column
        `}
        listItems={this.state.listItems} 
        deleteItem={this.deleteItem} 
        toggleComplete={this.toggleComplete}
        />
    
    </>
  );
}
}

export default App;

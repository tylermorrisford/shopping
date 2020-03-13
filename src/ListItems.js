import React from 'react';


const ListItems = ({listItems, deleteItem}) => {

    const shoppingList = listItems.length ? (
        listItems.map(item => {
            return(
            <>
            <div className="item" key={item.id}><h5>{item.name}</h5><span onClick={() => {deleteItem(item.id)}}> delete </span>
            </div>
            </>
            )
        })
    ) : (<p>"nice work!"</p>)

    return (
        <div>   
            {shoppingList}
        </div>
    )
}


export default ListItems
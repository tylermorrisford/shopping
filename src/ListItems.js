import React from 'react';


const ListItems = ({listItems, deleteItem}) => {

    const shoppingList = listItems.length ? (
        listItems.map(item => {
            return(
            <>
            <div className="item" key={item.id}><h4>{item.name}</h4><span onClick={() => {deleteItem(item.id)}}> delete </span>
            </div>
            </>
            )
        })
    ) : (<><h4>Nice work! You got everything!</h4>
        <p>wait... you forgot toilet paper.</p></>)

    return (
        <div>   
            {listItems.length ? (<><span>only {listItems.length} items left to grab</span><br /></>) : ""}
            {shoppingList}
        </div>
    )
}


export default ListItems
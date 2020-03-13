import React from 'react';
import {css} from 'emotion';


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
    ) : (<><h4 className={css`
            color: hotpink;
        `}>Nice work! You got everything!</h4>
        <p>wait... you forgot <span className={css`
            color: hotpink;
        `}>toilet paper.</span></p></>)

    return (
        <div>   
            {listItems.length ? (<><span className={css`
                color: hotpink;
                font-size: 0.9em;
            `}>only {listItems.length} items left to grab</span><br /></>) : ""}
            {shoppingList}
        </div>
    )
}


export default ListItems
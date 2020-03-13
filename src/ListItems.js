import React from 'react';
import {css} from 'emotion';
import 'font-awesome/css/font-awesome.min.css';


const ListItems = ({listItems, deleteItem, toggleComplete}) => {

    const completeItems = listItems.filter(item => {
            return !item.complete
    })

    const shoppingList = completeItems.length ? (
        listItems.map(item => {
            return(
            <>
            <div onClick={() => {toggleComplete(item.id)}}
            className={css`
                display: inline-block;
                text-decoration: none;
                padding: 15px;
            `} 
            style={{
                opacity: item.complete ? "0.3" : "1",
                fontWeight: !item.complete ? "bold" : ""
            }}
            key={item.id}>
                <span>{item.complete ? (<i class="fas fa-2x fa-check-circle"></i>) : (<i class="far fa-2x fa-circle"></i>)}</span>
                <h4 className={css`
                display: inline;
                padding: 10px;
                `}>{item.name}</h4>
            </div>
                <span onClick={() => {deleteItem(item.id)}}> X </span><br />
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
            {completeItems.length ? (<><span className={css`
                color: hotpink;
                font-size: 0.9em;
            `}>only {completeItems.length} items left to grab</span><br /></>) : ""}
            {shoppingList}
        </div>
    )
}


export default ListItems
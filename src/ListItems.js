import React from "react";
import { css } from "emotion";
import "font-awesome/css/font-awesome.min.css";

const ListItems = ({ listItems, deleteItem, toggleComplete }) => {
  const completeItems = listItems.filter(item => {
    return !item.complete;
  });

  const shoppingList = completeItems.length ? (
    listItems.map(item => {
      return (
        <>
          <div
            onClick={() => {
              toggleComplete(item.id);
            }}
            className={css`
              display: inline-block;
              text-decoration: none;
              padding: 15px;
            `}
            style={{
              opacity: item.complete ? "0.3" : "1",
              fontWeight: !item.complete ? "bold" : ""
            }}
            key={item.id}
          >
            <span>
              {item.complete ? (
                <i class="fas fa-2x fa-check-circle"></i>
              ) : (
                <i class="far fa-2x fa-circle"></i>
              )}
            </span>
            <h4
              className={css`
                display: inline;
                padding: 10px;
              `}
            >
              {item.name}
            </h4>
          </div>
          <span
            onClick={() => {
              deleteItem(item.id);
            }}
          >
            {" "}
            X{" "}
          </span>
          <br />
        </>
      );
    })
  ) : (
    <div className={css`
        align-content: center;
    `}>
      <h4
        className={css`
          color: hotpink;
        `}
      >
        Nice work! You got everything!
      </h4>
      <p>
        wait... you forgot{" "}
        <span
          className={css`
            color: hotpink;
          `}
        >
          toilet paper.
        </span>
      </p>
    </div>
  );

  return (
      <>
    <div className={css`
        justify-content: space-around;
        width: 150px;
        margin: 20px auto;
    `}>
      {completeItems.length ? (
        <>
          <span
            className={css`
              color: hotpink;
              font-size: 0.9em;
            `}
          >
            only {completeItems.length} items left to grab
          </span>
          <br />
        </>
      ) : (
        ""
      )}</div>
      <div
        className={css`
          display: flexbox;
          align-items: flex-start;
          flex-direction: column;
          flex-wrap: wrap;
          border: 2px solid pink;
          border-radius: 20px;
          height: 500px;
          @media (min-width: 420px) {
            width: 400px;
            margin: 0 auto;
          }
          @media (min-width: 1024px) {
            width: 900px;
            margin: 0 auto;
          }
        `}
      >
        {shoppingList}
      </div>
      </>
  );
};

export default ListItems;

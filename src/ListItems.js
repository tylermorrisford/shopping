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
        <div key={item.id} className={css`
        display: block;
        width: 200px;
        height: 80px;
        @media (min-width: 420px) and (max-width: 768px) {
          width: 350px;
        }
        `}>
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
              opacity: item.complete ? "0.3" : "1"
            }}
            key={item.id}
          >
            <span>
              {item.complete ? (
                <i className="fas fa-2x fa-check-circle"></i>
              ) : (
                <i className="far fa-2x fa-circle"></i>
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
        </div>
      );
    })
  ) : (
    <div className={css`
        text-align: center;
        width: 100%;
        margin: 0 auto;
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
          display: flex;
          flex-direction: column;
          flex-wrap:wrap;
          border: 2px solid pink;
          border-radius: 20px;
          height: 700px;
          @media (min-width: 420px) and (max-width: 768px) {
            width: 400px;
            margin: 10px auto;
            height: auto;
          }
          @media (min-width: 769px) and (max-width: 1023px) {
            width: 740px;
            margin: 10px auto;
          }
          @media (min-width: 1024px) {
            width: 960px;
            margin: 20px auto;
          }
        `}
      >
        {shoppingList}
      </div>
      </>
  );
};

export default ListItems;

import React, { useContext } from "react";

import { CartContext } from "../../context/CartContextProvider";

import { nameShortener } from "../../helper/functions";

import trashIcon from "../../assets/icons/trash.svg";

import styles from "./Card.module.css";

const Card = (props) => {
  const { image, title, price, quantity } = props.data;
  const { dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} alt="Product" />
      <div className={styles.data}>
        <h3>{nameShortener(title)}</h3>
        <p>{price}$</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity === 1 ? (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img src={trashIcon} alt="Trash" style={{ width: "20px" }} />
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "DECREASE_ITEM", payload: props.data })
            }
          >
            -
          </button>
        )}
        <button
          onClick={() =>
            dispatch({ type: "INCREASE_ITEM", payload: props.data })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;

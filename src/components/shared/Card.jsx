import React, { useContext } from "react";

import { CartContext } from "../../context/CartContextProvider";

import { nameShortener } from "../../helper/functions";

import trashIcon from "../../assets/icons/trash.svg";

const Card = (props) => {
  const { image, title, price, quantity } = props.data;
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <img src={image} alt="Product" />
      <div>
        <h3>{nameShortener(title)}</h3>
        <p>{price}$</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      {quantity === 1 ? (
        <button
          onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}
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
        onClick={() => dispatch({ type: "INCREASE_ITEM", payload: props.data })}
      >
        +
      </button>
    </div>
  );
};

export default Card;

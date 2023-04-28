import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { nameShortener, isInCart, quantityCount } from "../../helper/functions";
import { CartContext } from "../../context/CartContextProvider";
import trashIcon from "../../assets/icons/trash.svg";

import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <img
        className={styles.cardImage}
        src={productData.image}
        style={{ width: "250px" }}
      />
      <h3>{nameShortener(productData.title)}</h3>
      <p>{productData.price}$</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={trashIcon} alt="Trash" style={{ width: "20px" }} />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE_ITEM", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCount(state, productData.id)}
            </span>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "INCREASE_ITEM", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { nameShortener, isInCart, quantityCount } from "../../helper/functions";

import trashIcon from "../../assets/icons/trash.svg";
import styles from "./Product.module.css";

import { addItem, removeItem, increase, decrease } from "../../redux/cart/cartAction";

const Product = ({ productData }) => {

  const state = useSelector(state => state.cartState)
  const dispatch = useDispatch();

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
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch(removeItem(productData))
              }
            >
              <img src={trashIcon} alt="Trash" style={{ width: "20px" }} />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch(decrease(productData))
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
                dispatch(increase(productData))
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch(addItem(productData))
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

/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { nameShortener } from "../../helper/functions";

import trashIcon from "../../assets/icons/trash.svg";

import styles from "./Card.module.css";
import { decrease, increase, removeItem } from "../../redux/cart/cartAction";

const Card = (props) => {
  const { image, title, price, quantity } = props.data;
  const dispatch = useDispatch();
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
          <button onClick={() => dispatch(removeItem(props.data))}>
            <img src={trashIcon} alt="Trash" style={{ width: "20px" }} />
          </button>
        ) : (
          <button onClick={() => dispatch(decrease(props.data))}>-</button>
        )}
        <button onClick={() => dispatch(increase(props.data))}>+</button>
      </div>
    </div>
  );
};

export default Card;

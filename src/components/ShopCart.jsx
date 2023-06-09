/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";

import Card from "./shared/Card";
import { Link } from "react-router-dom";

import style from "./ShopCart.module.css";
import { checkout, clear } from "../redux/cart/cartAction";

const ShopCart = () => {
  const state = useSelector(state => state.cartState);
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <div className={style.cartContainer}>
        {state.selectedItems.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className={style.payments}>
          <p>
            <span>Total Items: </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total Payment: </span>
            {state.total}
          </p>
          <div className={style.buttonContainer}>
            <button
              className={style.clear}
              onClick={() => dispatch(clear())}
            >
              Clear
            </button>
            <button
              className={style.checkout}
              onClick={() => dispatch(checkout())}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={style.complete}>
          <h3>Checked out Successfuly!</h3>
          <Link to="/products">Buy more</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={style.complete}>
          <h3>Want to buy?</h3>
          <Link to="/products">Back to shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;

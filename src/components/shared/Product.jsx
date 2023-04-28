import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { nameShortener, isInCart, quantityCount } from "../../helper/functions";
import { CartContext } from "../../context/CartContextProvider";
import trashIcon from "../../assets/icons/trash.svg";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <img src={productData.image} style={{ width: "250px" }} />
      <h3>{nameShortener(productData.title)}</h3>
      <p>{productData.price}$</p>
      <div>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
            {quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="Trash" style={{width: "20px"}}/></button>}
            {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE_ITEM", payload: productData})}>-</button>}
          {isInCart(state, productData.id) ? (
            <button
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

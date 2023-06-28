/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Product from "./shared/Product";
import styles from "./Store.module.css";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/productsAction";
import Loader from "./shared/Loader";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts())
  }, [])

  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {productsState.isLoading ? (
        <Loader />
      ) : productsState.error ? (
        <p>Something went wrong</p>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Store;

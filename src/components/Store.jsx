import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import Product from "./shared/Product";
import styles from "./Store.module.css";

const Store = () => {
  const products = useContext(ProductContext);

  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Store;

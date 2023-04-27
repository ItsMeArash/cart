import React from 'react';
import { Link } from "react-router-dom";

import { nameShortener } from '../../helper/functions';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} style={{width: "250px"}}/>
            <h3>{nameShortener(productData.title)}</h3>
            <p>{productData.price}$</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
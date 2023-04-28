import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContextProvider';

import { Link } from 'react-router-dom';

import shopIcon from "../../assets/icons/shop.svg";

const Navbar = () => {
    const {state} = useContext(CartContext);
    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart"><img src={shopIcon} alt="Shop"/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
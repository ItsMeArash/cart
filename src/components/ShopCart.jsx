import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';

import Card from './shared/Card';
import { Link } from 'react-router-dom';


const ShopCart = () => {
    const {state, dispatch} = useContext(CartContext)
    return (
        <div>
            <div>
                {state.selectedItems.map(item => <Card key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter > 0 && <div>
                    <p><span>Total Items: </span>{state.itemsCounter}</p>
                    <p><span>Total Payment: </span>{state.total}</p>
                    <div>
                        <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                        <button onClick={() => dispatch({type: "CHECKOUT"})}>Checkout</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div>
                    <h3>Checked out Successfuly!</h3>
                    <Link to="/products">Buy more</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0 &&<div>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Back to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;
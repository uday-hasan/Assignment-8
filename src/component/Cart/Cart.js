import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
const Cart = (props) => {
    const{picture,name} = props.cart;
    const removeCart = props.removeCart;
    return (
        <div className='cart-container'>
            <div className="img">
                <img src={picture} alt="" />
            </div>
            <div>
                <h4>{name} <button onClick={removeCart}><FontAwesomeIcon  icon={faTrashCan}></FontAwesomeIcon></button></h4>
            </div>
        </div>
    );
};

export default Cart;
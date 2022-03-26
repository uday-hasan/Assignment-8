import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Glass.css';
const Glass = (props) => {
    const {picture,name,price} = props.glass
    const addToCart = props.addToCart;
    return (
        <div className='glass'>
                <div className='image'>
                    <img src={picture} alt="" />
                </div>
                <div>
                <h4>Product Name : {name}</h4>
                <p><b>Price : ${price}</b></p>
               <p> <button style={{display:'block',margin:'auto'}} onClick={addToCart}>Add to cart <span><FontAwesomeIcon icon={faCartPlus} /></span></button></p>
                </div>
        </div>
    );
};

export default Glass;
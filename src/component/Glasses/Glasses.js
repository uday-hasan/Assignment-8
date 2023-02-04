import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Glass from '../Glass/Glass';
import './Glasses.css';

const Glasses = () => {
    const [products, setproducts] = useState([]);
    const [carted, setCarted] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setproducts(data))
    }, [])
    const addToCart = (element) => {
        const newCarted = [...carted, element]
        if (carted.indexOf(element) !== -1) {
            alert('Already Exist')
        }
        else {
            if (carted.length > 3) {
                alert('You can selete only 4 items')
            }
            else {
                setCarted(newCarted);
            }
        }
    }
    const removeCart = element => {
        const rest = carted.filter(product => product !== element);
        setCarted(rest);
    }
    const clearCart = () => {
        setCarted([]);
    }
    const randomProduct = () => {
        if (carted.length <= 0) {
            alert('There have no sufficient element for choose one');
        }
        else {
            const hello = Math.floor(Math.random() * carted.length);
            const selectedProduct = [carted[hello]]
            setCarted(selectedProduct)
            console.log(selectedProduct);
        }
    }
    return (
        <>
            <div className='product-container'>
                <div className='glasses'>
                    {products.map(glass => <Glass glass={glass} key={glass.id} addToCart={() => addToCart(glass)} ></Glass>)}
                </div>
                <div className="cart">
                    {
                        carted.length ? <><h2 style={{ textAlign: 'center' }}>Carted Products</h2>
                            {
                                carted.map(cart => <Cart cart={cart} key={cart.id} removeCart={() => removeCart(cart)}></Cart>)
                            }
                            <button onClick={randomProduct}>Find one</button>
                            <button onClick={clearCart}>Clear cart</button></>
                            :
                            <h1>No items found in cart.</h1>
                    }
                </div>
            </div>
        </>
    );
};

export default Glasses;
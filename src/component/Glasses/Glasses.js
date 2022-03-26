import React,  { useState,useEffect }  from 'react';
import './Glasses.css';
import Glass from '../Glass/Glass';

const Glasses = () => {
    const [products, setproducts] = useState([]);
    const [carted,setCarted] = useState([])
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setproducts(data))
    },[])
    const addToCart = (id) =>{
        const newCarted = [...carted,id]
                setCarted(newCarted);
            }
    return (
       <>
          <div className='product-container'>
          <div className='glasses'>
          {products.map(glass => <Glass glass={glass} key = {glass.id} addToCart = {() => addToCart(glass)}></Glass>)}
        </div>
        <div className="cart">
            <h2>Carted items</h2>
            <button>Find one</button>
            <button>Reset</button>
        </div>
          </div>
       </>
    );
};

export default Glasses;
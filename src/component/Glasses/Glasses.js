import React,  { useState,useEffect }  from 'react';
import './Glasses.css';

const Glasses = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setproducts(data))
    },[])
    return (
       <>
          <div className='product-container'>
          <div className='glasses'>
            {products.map(glass => <h2>{glass.name}</h2>)}
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
import React,  { useState,useEffect }  from 'react';
import './Glasses.css';
import Glass from '../Glass/Glass';
import Cart from '../Cart/Cart';

const Glasses = () => {
    const [products, setproducts] = useState([]);
    const [carted,setCarted] = useState([])
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setproducts(data))
    },[])
    const addToCart = (id) =>{
        const newCarted = [...carted,id]
        if(carted.indexOf(id) !== -1){
            alert('Already Exist')
        }
        else{
            if(carted.length > 3){
             alert('You can selete only 4 items')   
            }
            else{
                setCarted(newCarted);
            }
        }
            }
    return (
       <>
          <div className='product-container'>
          <div className='glasses'>
          {products.map(glass => <Glass glass={glass} key = {glass.id} addToCart = {() => addToCart(glass)}></Glass>)}
        </div>
        <div className="cart">
            <h2>Carted items</h2>
            {
                carted.map(cart => <Cart cart={cart} key={cart.id}></Cart>)
            }
            <button>Find one</button>
            <button>Reset</button>
        </div>
          </div>
       </>
    );
};

export default Glasses;
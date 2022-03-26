import React,  { useState,useEffect }  from 'react';
import Cart from '../Cart/Cart';
import Glass from '../Glass/Glass';
import './Glasses.css';

const Glasses = () => {
    const [products, setproducts] = useState([]);
    const [carted,setCarted] = useState([])
    const [remove, setRemove] = useState(carted)
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setproducts(data))
    },[])
    const addToCart = (element) =>{
        const newCarted = [...carted,element]
        if(carted.indexOf(element) !== -1){
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

  const removeCart = (id) => {
            console.log(id, 'clicked');
            const removedProduct = [...remove,id];
            setRemove(removedProduct);
            console.log(remove);
        }
        const clearCart = () => {
            setCarted([]);
        }
        const selectedOne = () => {
           const hello = Math.floor(Math.random() * carted.length);
               console.log(carted[hello]);
        }
    return (
       <>
          <div className='product-container'>
          <div className='glasses'>
            {products.map(glass => <Glass glass={glass} key = {glass.id} addToCart = {() => addToCart(glass)} ></Glass>)}
        </div>
        <div className="cart">
            {
                carted.map(cart => <Cart cart={cart} key={cart.id} removeCart = {() => removeCart(cart)}></Cart>)
            }
            <button onClick={selectedOne}>Find one</button>
            <button onClick={clearCart}>Clear cart</button>
        </div>
          </div>
       </>
    );
};

export default Glasses;
import React, { useState } from 'react'
import Header from './components/Header';
import Cart from './components/Cart';
import './Breakfast.css';



function Breakfast(){
    const [qty,setQty]=useState(0);
    
    const menuList = [
        { itemName: "Meals", price: 30,qty:0,amt:0 },
        { itemName: "Biriyani", price: 40,qty:0,amt:0},
        { itemName: "new", price: 60,qty:0,amt:0},

      ];

      const [cartItems,setCartItems]=useState([]);
      const [amt,setAmt]=useState(0);
  
      
      const addToCart=(name,price,quantity,amount)=>{
            console.log(name,price);
            setCartItems([
                ...cartItems,{itemName: name, price: price,qty:quantity,amt:amount}
            ])
      }

    return(
        <div>
            <Header/>
            <div className="path">
                Canteen-1/Breakfast
            </div>
            <div className="content">
                <div className="menu-section content-halfs">
                    
                        <div className="menu-title">
                            <p>Breakfast</p>
                        </div>
                            <div className="price-section">
                                <div className="price-titles">
                                    <li>Dishes</li>
                                    <li>Price</li>
                                </div>
                                <div className="items">
                                    {menuList.map(item=>(
                                        <div className='item'>
                                            <div className="item-name">{item.itemName}</div>
                                            <div className="item-price">{item.price}</div>
                                            <div className="add-to-cart-btn">
                                                <button className='btn' onClick={()=>{addToCart(item.itemName,item.price,item.qty,item.amt)}}>Add to cart</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>                
                </div>
                <div className="cart-section content-halfs">
                    <Cart amt={amt} setAmt={setAmt} cartItems={cartItems} setCartItems={setCartItems}/>
                </div>
            </div>
        </div>
    )
}


export default Breakfast;
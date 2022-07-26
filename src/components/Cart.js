import React,{useState} from 'react';
import CartItem from './CartItem';
import './Cart.css';
import emptyCart from './images/empty.jpg';

function Cart({cartItems,setCartItems,amt,setAmt}){

    console.log(cartItems);
    
    return(
        <div>
            <div className="cart-title">Your Cart</div>
            <div className="cart">
                
                <div className="cart-items">
                    {cartItems.length>0 &&

                    <div className="cart">
                        <div className="cart-titles ">
                            <li>Items</li>
                            <li>Price</li>
                            <li>Qty</li>
                            <li>Amount</li>
                        </div>
                        <CartItem amt={amt} setAmt={setAmt}  cartItems={cartItems} setCartItems={setCartItems}/>
                        <div className="cart-total">
                            Total Amount: ₹{amt}
                        </div>
                        <div className="payment-btns">
                            <div className="without-btn ">

                                <button className='payment-btn'>Checkout without payment</button>
                            </div>
                            <div className="with-btn ">
                                <button className='payment-btn'>Checkout with Payment</button>
                            </div>
                        </div>
                    </div>
                    }
                    {cartItems.length==0 &&
                        <div >
                            <img src={emptyCart} alt="" />
                            <div className="empty-text">
                                Cart is Empty
                            </div>
                        </div>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Cart;
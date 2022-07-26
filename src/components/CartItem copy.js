import React,{useState} from 'react';
import './Cart.css';

function CartItem({cartItems,setCartItems}){

    {cartItems.map(cartitem)=>(
        
    )}

    const [qty,setQty]=useState(0);
    const [amt,setAmt]=useState(0);

    const decrementQty=(price)=>{
        setQty(qty-1);
        console.log(qty);
        if((qty-1)<=0){
            setAmt(0);
        }else{
            setAmt(amt-price);
        }
    }
    
    const incrementQty=(price)=>{
        setQty(qty+1);
        console.log(qty+1);
            if((qty+1)==0 || (qty<0)){
                setAmt(0);
            }else{
                setAmt(amt+price);
            }
    }


    return(
        <div className='items'>
                <div className='singleItemDetails'>
                    <div className="cart-item-name">{cartitem.itemName}</div>
                    <div className="cart-item-price">{cartitem.price}</div>
                    <div className="cart-item-qty">
                        <button onClick={()=>{decrementQty(cartitem.price)}}>
                            <i className="fa fa-minus" aria-hidden="true"></i>
                        </button>
                        <div className="qty-btn">
                            Qty: {qty}
                        </div>
                        <button onClick={()=>{incrementQty(cartitem.price)}}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="cart-item-amount">{amt}</div>
                </div>
                    
        </div>
    )
}

export default CartItem;
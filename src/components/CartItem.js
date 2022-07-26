import React,{useState, useEffect} from 'react';
import './Cart.css';

function CartItem({cartItems,setCartItems,amt,setAmt}){

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), [])

    useEffect(()=>{

    },[cartItems])


    // const [qty,setQty]=useState(0);
    // const [amt,setAmt]=useState(0);

    // const decrementQty=(price,quantity,amount)=>{
    //     setQty(qty-1);
    //     console.log(qty);
    //     if((qty-1)<=0){
    //         setAmt(0);
    //     }else{
    //         setAmt(amt-price);
    //     }
    // }

    const incrementQty=(price,quantity,amount)=>{
        // setQty(quantity+1);
        quantity=quantity+1;
        console.log(quantity+1);
            if((quantity+1)==0 || (quantity<0)){
                // setAmt(0);
            }else{
                // setAmt(amt+price);
            }
    }


    return(
        <div>
            <div className='items'>
                {cartItems.map(cartitem=>(
                    <div className='singleItemDetails'>
                        <div className="cart-item-name">{cartitem.itemName}</div>
                        <div className="cart-item-price">{cartitem.price}</div>
                        <div className="cart-item-qty">
                            <button onClick={()=>{
                                if(cartitem.qty>0){
                                    cartitem.qty=cartitem.qty-1;
                                    console.log(cartitem.qty);
                                    cartitem.amt=cartitem.amt-cartitem.price
                                    console.log(cartitem.amt);
                                    // totalAmt=totalAmt-cartitem.amt;
                                    setAmt(amt-cartitem.price)
                                    forceUpdate();
                                }
                                }}>
                                <i className="fa fa-minus" aria-hidden="true"></i>
                            </button>
                            <div className="qty-btn btn">
                                Qty: {cartitem.qty}
                            </div>
                            <button onClick={()=>{
                                cartitem.qty=cartitem.qty+1;
                                console.log(cartitem.qty);
                                cartitem.amt=cartitem.amt+cartitem.price
                                console.log(cartitem.amt);
                                // totalAmt=totalAmt+cartitem.amt;
                                // console.log("totoal"+totalAmt);
                                setAmt(amt+cartitem.price)
                                forceUpdate();

                            }}>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="cart-item-amount">{cartitem.amt}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartItem;
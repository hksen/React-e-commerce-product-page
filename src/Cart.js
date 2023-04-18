import React from 'react'; 
import Images from './Images';

function Cart({ num, setNum, cart }){

    const price = () => {
        return "$" + 125 * num;
    }

    const deleteProduct = () => {
        setNum(0); 

    }

    return (
        <div className="cart-info">
        <div className="cart-title">
          <h2>Cart</h2>
        </div>
        <div className="main-cart-info">
        {num > 0 && cart ? (
          <div className="cart-product">
            <img className="cart-product-thumb" alt="product" src={Images.product1Thumb}></img>
                <div className="cart-product-info">
                    <p>Fall Limited Edition Sneakers</p>
                    <p className="price">$125.00 x {num}<span> {price()}</span></p>
                </div>
            <img className="delete" onClick={() => deleteProduct()} alt="delete" src={Images.delete}></img>
          </div>
          ) : (
            <div className="empty-cart-product" style={{ color: 'var(--Dark-grayish-blue)', margin: "0"}}>
            <p className="empty-cart">Your cart is empty.</p>
            </div>
          )}
          {num > 0 && cart ? (
                <button className="checkout">Checkout</button>
          ) : null}

        </div>
      </div>
    )
}

export default Cart;
import React, { useState } from 'react';
import './App.css';
import Images from './Images';
import ProductPreview from './Preview';
import Cart from './Cart';
import { ReactComponent as IconCart } from './images/icon-cart.svg';
import { ReactComponent as Logo } from './images/logo.svg';


function App() {
  const [ image, setImage ] = useState(1); 
  const [ preview, setPreview ] = useState(false);
  const [ items, setItems ] = useState(0);
  const [ cart, setCart ] = useState(false);
  const [ cartInfo, setCartInfo ] = useState(false);
  const [ num, setNum ] = useState(0);
  const [ menu, showMenu ] = useState(false);

  const Next = () => {
    if(image !== 4){
      setImage(image + 1);
    }
  }

  const Prev = () => {
    if(image !== 1){
      setImage(image - 1);
    }
  }

  const itemsNum = (symbol) => {
    if(symbol === "+"){
      setItems(items + 1); 
    }else if(symbol === "-" && items !== 0){
      setItems(items - 1);
    }
  }

  const addToCart = () => {
    setNum(items);
    setCart(true);
  }

  const imageState = () => {
    if (image === 1) {
      return Images.product1;
    } else if (image === 2) {
      return Images.product2;
    } else if (image === 3) {
      return Images.product3;
    } else if (image === 4) {
      return Images.product4;
    }
  };

  return (
    <div className="App">
      {preview ? <ProductPreview setPreview={setPreview} image={image} /> : null}
      <div className="b-background" aria-expanded={menu}></div>
      <div className="wrapper">

        <header>
          <div className="header-left">
            <div className="hamburger" aria-expanded={menu} onClick={() => showMenu(!menu)}></div>
            <Logo />
            <ul className="menu">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="header-right">
            <div className="cart-wrapper" onClick={() => setCartInfo(!cartInfo)}>
              {cart ? (
                  <div className="num">
                    <p>{num}</p>
                  </div>
              ) : null}
              <IconCart />
            </div>
            <div className="avatar-wrapper">
              <img src={Images.avatar} alt="avatar" className="avatar"></img>
            </div>
          </div>
          {cartInfo ? <Cart num={num} setNum={setNum} cart={cart} /> : null}
        </header>
        <main>
          <div className="product-images">
            <div className="produc-image-wrapper">
              <div className="product-1-wrapper">
                <div className="prev-button-m" onClick={Prev}></div>
                <div className="product-preview-c" onClick={() => setPreview(true)}></div>
                <img className="product1" src={imageState()}  alt="product"></img>
                <div className="next-button-m" onClick={Next}></div>
              </div>

              <div className="product-thumbnail">
                <div className="image-thumb-wrapper " onClick={() => setImage(1)}>
                    <div className={image === 1 ? "white-background" : "desactivated"}></div>
                    <img className="image-thumbnail" src={Images.product1Thumb} alt="product"></img>
                </div>
                <div className="image-thumb-wrapper" onClick={() => setImage(2)}>
                    <div className={image === 2 ? "white-background" : "desactivated"}></div>
                    <img className="image-thumbnail" src={Images.product2Thumb} alt="product"></img>
                </div>
                <div className="image-thumb-wrapper" onClick={() => setImage(3)}>
                    <div className={image === 3 ? "white-background" : "desactivated"}></div>
                    <img className="image-thumbnail" src={Images.product3Thumb} alt="product"></img>
                </div>
                <div className="image-thumb-wrapper" onClick={() => setImage(4)}>
                    <div className={image === 4 ? "white-background" : "desactivated"}></div>
                    <img className="image-thumbnail" src={Images.product4Thumb} alt="product"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="product-info">
            <h4 className="compagny">Sneaker Compagny</h4>
            <h1>Fall Limited Edition{'\n'}Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="product-price-wrapper">
              <div className="product-price">
                <h2><span className="d">$</span>125.00</h2>
                <div className="promo">
                  <h3>50%</h3>
                </div>
              </div>
              <h4 className="last-price"><span className="d">$</span>250.00</h4>
            </div>
            <div className="buy-product">
              <div className="how-many">
                <p className="minus" onClick={() => itemsNum("-")}>-</p>
                <p style={{ color: '#000', fontSize: '1em' }}>{items}</p>
                <p className="plus" onClick={() => itemsNum("+")}>+</p>
              </div>
              <button className="add-cart"  onClick={() => addToCart()}>
              <div className="icon-cart-container">
                <IconCart height="16" width="18" viewBox="0 0 20 20"/>
              </div>
                <h3>Add to cart</h3>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

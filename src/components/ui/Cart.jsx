import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductImg from "../../assets/product-img.jpg";

const Cart = () => {
  return (
    <div className="cart__wrapper">
      <nav className="cart">
        <div className="cart__header">
          <h3 className="cart__header__title">Your Shopping Cart</h3>
          <button className="cart__header__close">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="cart__items">
          <div className="cart__item">
            <div className="cart__item__left">
              <img src={ProductImg} alt="" className="cart__item__img" />
            </div>
            <div className="cart__item__mid">
              <h4 className="cart__item__title">Pulp Unit - 5 Compartments</h4>
              <span className="cart__item__price">$200</span>
              <div className="cart__item__quantity">
                <button className="cart__item__quantity__btn">-</button>
                <button className="cart__item__quantity__amount">1</button>
                <button className="cart__item__quantity__btn">+</button>
              </div>
            </div>
            <FontAwesomeIcon icon={faTimes} className="cart__item__remove" />
          </div>
        </div>
        <div className="cart__footer">
          <div className="cart__footer__details">
            <h4 className="cart__footer__title">Subtotal</h4>
            <span className="cart__footer__subtotal">$254</span>
          </div>
          <button className="cart__footer__btn">Go to Checkout</button>
        </div>
      </nav>
    </div>
  );
};

export default Cart;

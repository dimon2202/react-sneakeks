import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>Shop sneakers</h3>
            <p>Выбери кросовки своей мечты!</p>
          </div>
        </div>
      </Link>

      <ul className="headerRight">
        <li onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>{totalPrice} грн.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="heart" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

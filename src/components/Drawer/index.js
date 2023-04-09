import React from "react";
import axios from "axios";

import Info from "../Info";
import { useCart } from "../../hooks/useCart";

import s from "./Drawer.module.css"   

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default function Drawer({ items = [], onClose, onRemove, opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart()
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false)

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete("https://64038d6a80d9c5c7bab73929.mockapi.io/cart/" + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(')
    }
    setIsLoading(false);
  };

  return (
    <div className={`${s.overlay} ${opened ? s.overlayVisible : ''}`}>
      <div className={s.drawer}>
        <h2>
          Корзина
          <img onClick={onClose} src="/img/btn-remove.svg" alt="remove" />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((item, index) => (
                <div key={index} className="cartItem">
                  <img width={70} src={item.imageUrl} alt="sneakers" />
                  <div>
                    <p>{item.name}</p>
                    <b>{item.price} грн.</b>
                  </div>
                  <img
                    className="removeBtn"
                    width={35}
                    height={35}
                    src="/img/btn-remove.svg"
                    alt="remove_"
                    onClick={() => onRemove(item.id)}
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} грн.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{totalPrice * 0.05} грн.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                Оформыть заказ
                <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            image={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? "Ваш заказ #1 скоро будет передан курьерской доставке"
                : "Добавьте хотя бы одну пару кросовок, что бы сделать заказ"
            }
          />
        )}
      </div>
    </div>
  );
}

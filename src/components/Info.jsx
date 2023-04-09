import React from "react";
import AppContext from "../context";

const Info = ({image, title, description}) => {
  const {setCartOpened} = React.useContext(AppContext)
 
  return (
    <div className="cartEmpty">
      <img
        width="120px"
        src={image}
        alt="Empty-cart"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Вернутся назад
      </button>
    </div>
  );
};

export default Info;

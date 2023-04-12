import React from "react";
import Info from "../components/Info";

function Orders() {
  const orders = [];

  return (
    <div className="content">
      {!orders ? (
        <>
          <div>
            <h1>Мои заказы</h1>
          </div>
          <div className="cards">
            {/* {favorites.map((item, index) => (
              <Card
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                favorited={true}
                onFavorite={onAddToFavorite}
              />
            ))} */}
          </div>
        </>
      ) : (
        <>
          <Info
            image={"/img/smail_bed.jpg"}
            ladge={50}
            title={"У вас нет заказов"}
            description={"Вы нищеброд? Оформите хотя бы один заказ."}
          />
        </>
      )}
    </div>
  );
}

export default Orders;

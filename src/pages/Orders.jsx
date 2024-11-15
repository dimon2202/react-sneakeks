import React from "react";
import Info from "../components/Info";

function Orders() {
  const orders = [];

  return (
    <div className="content">
      {!orders ? (
        <>
          <div>
            <h1>Мої замовлення</h1>
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
            title={"У вас немає замовлень"}
            description={"Оформіть хоча б одне замовлення."}
          />
        </>
      )}
    </div>
  );
}

export default Orders;

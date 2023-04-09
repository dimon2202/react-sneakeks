import React from "react";

function Orders() {

  return (
    <div className="content">
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
    </div>
  );
}

export default Orders;

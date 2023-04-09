import React from "react";
import Card from "../components/Card";
import AppContext from "../context";


function Favorites() {
const {favorites, onAddToFavorite} = React.useContext(AppContext)

  return (
    <div className="content">
      <div>
        <h1>Мои закладки</h1>
      </div>
      <div className="cards">
        {favorites.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            favorited={true}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;

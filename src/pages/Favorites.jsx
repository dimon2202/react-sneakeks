import React from "react";
import Card from "../components/Card";
import AppContext from "../context";
import Info from "../components/Info";

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content">
      {!favorites ? (
        <>
          <div>
            <h1>Мої закладки</h1>
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
        </>
      ) : (
        <>
        <Info
            image={"/img/smail.jpg"}
            ladge={50}
            title={"Закладок немає :("}
            description={"Ви нічого не додавали до закладок"}
          />
        </>
      )}
    </div>
  );
}

export default Favorites;

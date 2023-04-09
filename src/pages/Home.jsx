import React from "react";
import Card from "../components/Card";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchValue,
  isLoading,
}) => {
  

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content">
      <div className="content-top">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кросовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          <input
            onChange={onChangeSearchValue}
            value={searchValue}
            placeholder="Поиск ..."
            alt="search"
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear removeBtn"
              src="/img/btn-remove.svg"
              alt="onClose"
            />
          )}
        </div>
      </div>

      <div className="cards">{renderItems()}</div>
    </div>
  );
};

export default Home;

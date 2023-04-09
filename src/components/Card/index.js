import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import s from "./Card.module.css";

export default function Card({
  id,
  name,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const {isItemAdded} = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, name, price, imageUrl }
  
  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={s.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={165}
          height={255}
          viewBox="0 0 155 265"  
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb" >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div onClick={onClickFavorite} className={s.favourite}>
            <img
              src={
                isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"
              }
              alt="Favorites"
            />
          </div>
          <img width={133} height={112} src={imageUrl} alt="sneakers" />
          <h5>{name}</h5>
          <div className={s.cardBottom}>
            <div>
              <span>Цена:</span>
              <b>{price} грн.</b>
            </div>

            <img
              className={s.plus}
              onClick={onClickPlus}
              src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              alt="plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div
        onClick={() => alert("Go to user profile !")}
        className="card-avatar-username"
      >
        <img alt={data.title} src={data.user.picture} />
        <span>{data.user.username}</span>
      </div>
      <div onClick={() => alert("Go to offer !")}>
        <img alt={data.title} src={data.picture} />
        <div className="card-price-size-brand">
          <span>{data.price} €</span>
          <span>{data.size}</span>
          <span>{data.brand}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

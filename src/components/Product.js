import React from "react";
import { NavLink } from "react-router-dom";
const Product = (curElem) => {
    // eslint-disable-next-line
  const { id, name, image, price, category } = curElem;

  return (
      <>
    <NavLink to={`/singleproduct/${id}`}>
      <figure>
        <img src={image} alt={name} />
        <figcaption className="caption">{category}</figcaption>
      </figure>

      <div className="card-data">
        <div className="card-data flex">
            <h3>{name}</h3>
            <p className="card-data--price">  </p>
        </div>
      </div>
    </NavLink>
    </>
  );
};

export default Product;

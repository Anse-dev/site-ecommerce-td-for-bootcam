import React from "react";
import "./product.css";
const Product = ({ id, category, description, title, price, image }) => {
  return (
    <a href={`/product/${id}`} className="product">
      <img src={image} alt="image " />
      <h2>{title}</h2>

      <div className="product-desc">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae et sequi a, dolores sint velit!</p>
        <small>{price}</small>
      </div>
    </a>
  );
};

Product.defaultProps = {
  author: "default autor",
};
export default Product;

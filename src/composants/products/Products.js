import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import productsData from "../../mocks/api_mock";
import "./products.css";
const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };

    // Appel de la fonction lors du montage du composant
    fetchProducts();
  }, []);
  return (
    <div className="products-section">
      <h2> Liste des produits</h2>
      <div className="products">
        {products?.map((product, index) => (
          <Product key={product.id + index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

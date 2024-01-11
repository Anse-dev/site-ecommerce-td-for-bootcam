import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../mocks/api_mock";
import WhatsAppButton from "../composants/ButtonWha";

const PageDetailProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const json = await response.json();
        setProduct(json);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };

    // Appel de la fonction lors du montage du composant
    fetchProducts();
  }, [productId]);
  return (
    <div>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <div>{product?.price}</div>
      <WhatsAppButton phoneNumber={"+2250777596686"} message={`je suis interessé par l'article: ${product?.title}`} />
    </div>
  );
};

export default PageDetailProduct;

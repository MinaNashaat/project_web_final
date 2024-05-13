import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import productsData from "./products.json"; // Import products data from JSON file

function ProductDetails() {
  const api_url = "/products.json"; // Update API URL to point to products.json
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    
    // Find the product by its ID from the imported JSON data
    const foundProduct = productsData.find((item) => item.id === parseInt(params.productId));
    setProduct(foundProduct);
  }, [params.productId]);

  return (
    <Product product={product} showButton={false} />,
    <Product product={product} showButton={false} showBuyButton={true} />
  
  );
}

export default ProductDetails;

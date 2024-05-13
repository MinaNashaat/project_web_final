import { useEffect, useState } from "react";
import Product from "./Product";
import productsData from "./products.json"; // Import products data from JSON file

function ProductsList() {
  const api_url = "/products.json"; // Update API URL to point to products.json
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    setProducts(productsData); // Set products from local JSON data
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h2 className="text-center p-3"> Our Products </h2>
      <div className="container">
        <button
          onClick={() => {
            getProducts();
          }}
          className="btn btn-info"
        >
          All
        </button>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;

import { Link } from "react-router-dom";

function Product(props) {
  const { product, showButton, showBuyButton } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          {showBuyButton && (
            <p className="card-text">{product.description}</p>
          )}

          <p> Price: {product.price}$</p>
          {showButton && (
            <Link className="btn btn-primary" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
          {showBuyButton && (
            <>
              {/* <button className="btn btn-success" style={{ margin: "10px" }}>Buy</button> */}
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="productId" value={product.id} />
                <div style={{ marginBottom: "10px" }}>
                  <input type="text" name="cardNumber" placeholder="Card Number" required />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <input type="text" name="cardName" placeholder="Cardholder Name" required />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <input type="text" name="address" placeholder="Address" required />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <select name="expirationMonth" required>
                    <option value="">Month</option>
                    {/* Add options for months */}
                  </select>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <select name="expirationYear" required>
                    <option value="">Year</option>
                    {/* Add options for years */}
                  </select>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <input type="password" name="cvv" placeholder="CVV" minLength="3" maxLength="4" required />
                </div>
                <button type="submit" className="btn btn-info">Place Order</button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;

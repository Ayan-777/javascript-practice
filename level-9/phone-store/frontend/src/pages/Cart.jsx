import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, subtotal, tax, total } = useCart();

  return (
    <div className="cart-page-container">
      <div className="cart-header-badge">SHOPPING CART</div>

      {cart.length === 0 ? (
        <div className="cart-empty" style={{ textAlign: "center", padding: "40px" }}>
          <h2>Your cart is empty</h2>
          <p>Explore our latest flagship smartphones.</p>
          <Link to="/">Go to Store</Link>
        </div>
      ) : (
        <div className="cart-main-grid">
          <div className="cart-items-section">
            <div className="cart-section-pill">YOUR PRODUCTS</div>
            <div className="cart-list">
              {cart.map((item) => (
                <div key={item._id} className="cart-item-card">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">${item.price}</p>
                    <div className="cart-qty-control">
                      <button onClick={() => updateQuantity(item._id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item._id, 1)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-img-wrapper">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary-section">
            <div className="order-summary-card">
              <h2>ORDER SUMMARY</h2>
              <div className="summary-row">
                <span>SUBTOTAL</span>
                <span>${subtotal}</span>
              </div>
              <div className="summary-row">
                <span>SHIPPING</span>
                <span>FREE</span>
              </div>
              <div className="summary-row">
                <span>TAX</span>
                <span>${tax}</span>
              </div>
              <hr className="summary-divider" />
              <div className="summary-row total-row">
                <span>TOTAL</span>
                <span>${total}</span>
              </div>
              <button className="checkout-btn">BUY NOW</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
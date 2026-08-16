import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function PhoneDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [phone, setPhone] = useState(null);
  const [selectedEdition, setSelectedEdition] = useState("standard");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/phones/${id}`)
      .then((res) => res.json())
      .then((data) => setPhone(data))
      .catch((err) => console.error("Failed to load phone details:", err));
  }, [id]);

  if (!phone) {
    return (
      <div className="details-loading">
        <p>Loading smartphone details...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const itemToAdd = {
      ...phone,
      selectedEdition: selectedEdition === "deal" ? "Special Deal Included" : "Standard Edition"
    };
    addToCart(itemToAdd);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="details-page-container">
      {/* 2-Column Grid Matching Wireframe */}
      <div className="details-main-grid">
        
        {/* Left Column: Product Image Box */}
        <div className="details-image-box">
          <img src={phone.image} alt={phone.name} />
        </div>

        {/* Right Column: Name + Editions + Add to Cart */}
        <div className="details-info-col">
          
          {/* Top Header Pill */}
          <div className="details-title-pill">
            <h2>{phone.name.toUpperCase()}</h2>
          </div>

          {/* Option 1: Standard Edition Card */}
          <div
            className={`edition-card ${selectedEdition === "standard" ? "active" : ""}`}
            onClick={() => setSelectedEdition("standard")}
          >
            <div className="edition-text">
              <h3>Standard Edition</h3>
              <div className="edition-price-row">
                <span className="label">PRICE</span>
                <span className="value">${phone.price}</span>
              </div>
            </div>
            <div className="radio-circle">
              {selectedEdition === "standard" && <div className="radio-dot" />}
            </div>
          </div>

          {/* Option 2: Special Deal Edition Card */}
          <div
            className={`edition-card ${selectedEdition === "deal" ? "active" : ""}`}
            onClick={() => setSelectedEdition("deal")}
          >
            <div className="edition-text">
              <h3>Special Deal Included</h3>
              {phone.deal && <p className="deal-subtext">{phone.deal}</p>}
              <div className="edition-price-row">
                <span className="label">PRICE</span>
                <span className="value">${phone.price}</span>
              </div>
            </div>
            <div className="radio-circle">
              {selectedEdition === "deal" && <div className="radio-dot" />}
            </div>
          </div>

          {/* Bottom CTA Button */}
          <button className="details-cart-btn" onClick={handleAddToCart}>
            {added ? "✓ ADDED TO CART" : "ADD TO CART"}
          </button>

          <Link to="/" className="details-back-link">
            ← Back to Store
          </Link>
        </div>

      </div>
    </div>
  );
}
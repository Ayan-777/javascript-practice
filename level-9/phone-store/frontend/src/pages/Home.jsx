import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [phones, setPhones] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/phones")
      .then((res) => res.json())
      .then((data) => setPhones(data))
      .catch((err) => console.error("Failed to fetch phones:", err));
  }, []);

  const filteredPhones = phones.filter((phone) =>
    phone.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="store-home-container">
      {/* Centered Hero & Search Section */}
      <div className="store-hero">
        <h1 className="store-title">Flagship Smartphone Store</h1>
        <p className="store-subtitle">
          Directly from authorized distributors with full manufacturer warranty.
        </p>

        {/* Clean, Modern Centered Search Bar */}
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by brand or model (e.g. iPhone 15, Pixel, Galaxy)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="store-search-input"
          />
          {search && (
            <button className="search-clear-btn" onClick={() => setSearch("")}>
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Phone Product Grid */}
      <div className="store-phones-grid">
        {filteredPhones.map((phone) => (
          <Link
            to={`/phone/${phone._id}`}
            key={phone._id}
            className="store-product-card"
          >
            <div className="product-image-box">
              <img src={phone.image} alt={phone.name} />
            </div>

            <div className="product-info-box">
              <h3 className="product-name">{phone.name}</h3>
              <p className="product-price">${phone.price}</p>
              {phone.deal && (
                <div className="product-deal-badge">{phone.deal}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
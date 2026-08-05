import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPhonesData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/phones");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setPhones(data);
      } catch (error) {
        console.log("Error fetching phones:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhonesData();
  }, []);

  const filteredPhones = phones.filter((phone) =>
    phone.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) return <h2>Loading Phones...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <div className="welcome-header">
        <h1 className="welcome-title">Welcome to</h1>
        <h2 className="store-title-handwritten">Phone Store</h2>
      </div>

      {/* Search Bar */}
      <div className="neomorphic-search-wrapper">
        <div className="neomorphic-search-box">
          <input
            type="text"
            className="neomorphic-input"
            placeholder="SEARCH..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="clear-btn" onClick={() => setSearchTerm("")}>
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Phone Grid / No Results */}
      {filteredPhones.length === 0 ? (
        <div className="no-results-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCg9eAy0kCQOYNSzAWVCgKR-7P0rWzTqMN8HlutNAJcg&s=10"
            alt="No search results"
            className="no-results-img"
          />
          <p className="no-results">
            No phones match your search "{searchTerm}".
          </p>
        </div>
      ) : (
        <div className="phone-grid">
          {filteredPhones.map((phone) => (
            <Link
              to={`/phone/${phone._id}`}
              key={phone._id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="phone-card">
                <img src={phone.image} alt={phone.name} />
                <h3>{phone.name}</h3>
                <p style={{ fontWeight: "bold" }}>${phone.price}</p>
                <p style={{ color: "green" }}>{phone.Offers}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

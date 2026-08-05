import { useParams,} from "react-router-dom"; 
import { useEffect, useState } from "react";

function PhoneDetails(){
    const{id} = useParams();
    const [phone, setPhone] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchPhoneDetails = async () => {
        try {
          const res = await fetch(`http://localhost:5000/api/phones/${id}`);
          if(!res.ok){
            throw new Error('Phone not Found')
          }
          const data = await res.json();
          setPhone(data)
        } catch (err) {
          console.error("Error fetching phone details:", err);
          setError("Failed to load phone details.")
        }finally{
          setLoading(false)
        }
      }
      fetchPhoneDetails();
    },[id])

    if(loading){
      return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading details...</h2>;
    }
    if (error || !phone) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>{error || "Phone not found"}</h2>;
return (
    <div className="details-container">
      {/* Back Button Navigation */}

      {/* Header Info */}
      <div className="details-header">
        <h1>Buy {phone.name}</h1>
        <p className="details-price">
          From <strong>${phone.price}</strong>
        </p>
        <p className="details-offer">{phone.Offers}</p>
      </div>

      {/* Main Content Layout: Left Image Showcase, Right Option Cards */}
      <div className="details-content">
        {/* Left Side: Product Image Display */}
        <div className="details-image-card">
          <img src={phone.image} alt={phone.name} />
        </div>

        {/* Right Side: Options & Checkout Box */}
        <div className="details-sidebar">
          <h3>Model Options</h3>

          <div className="option-box active">
            <div className="option-info">
              <h4>{phone.name}</h4>
              <p>Standard Edition</p>
            </div>
            <div className="option-price">${phone.price}</div>
          </div>

          <div className="trade-in-card">
            <h4>Special Deal Included</h4>
            <p>{phone.Offers}</p>
          </div>

          <button className="buy-now-btn">Add to Bag</button>
        </div>
      </div>
    </div>
  );
}

export default PhoneDetails;
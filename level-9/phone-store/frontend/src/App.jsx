import { useEffect, useState } from "react";


function App(){
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fecthPhonesData = async() => {
      try {
        const res = await fetch('http://localhost:5000/api/phones');
        if(!res.ok){
          throw new Error (`HTTP error! Status: ${res.status}`)
        }
        const data = await res.json();
        setPhones(data)
      } catch (error) {
        console.log("Error fetching phones:", error)
      } finally{
        setLoading(false);
      }
      

    };

    fecthPhonesData()
  },[]);

  const filteredPhones = phones.filter((phone) =>
    phone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if(loading){
    return <h2>Loading Phones....</h2>
  } 
return (
  <div style={{ padding: "20px" }}>
    <h1>Phone Store</h1>
    <input
        type="text"
        placeholder="Search phones..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    <div className="phone-grid">
      {filteredPhones.map((phone) => (
        <div key={phone._id} className="phone-card">
          <img src={phone.image} alt={phone.name} />
          <h3>{phone.name}</h3>
          <p style={{ fontWeight: "bold" }}>${phone.price}</p>
          <p style={{ color: "green" }}>{phone.Offers}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default App;
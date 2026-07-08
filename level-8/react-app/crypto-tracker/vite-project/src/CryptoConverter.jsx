import { useState, useEffect } from "react";

function CryptoConverter() {
  const [rates, setRates] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usdAmount, setUsdAmount] = useState(0);

  useEffect(() => {
    async function startFetcing() {
      try {
        let res = await fetch(
          `Enter your own Api key`,
        );
        if (!res.ok) throw new Error("Not Found!");
        let data = await res.json();

        setRates(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message)
        setIsLoading(false)
      }
    }
    startFetcing();
  }, []);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if(error){
    return <div>⚠️ Error: {error}</div>
  }
  return (
    <div>
      <h1>Crypto Converter App</h1>
      <input
        type="Number"
        value={usdAmount}
        onChange={(e) => setUsdAmount(Number(e.target.value))}
      />
      

      <div>
        <h3>Conversions from USD:</h3>
        <p>🇦🇪 AED (UAE Dirham): {usdAmount * rates.conversion_rates.AED}</p>
        <p>🇪🇺 EUR (Euro): {usdAmount * rates.conversion_rates.EUR}</p>
        <p>🇮🇳 INR (Indian Rupee): {usdAmount * rates.conversion_rates.INR}</p>
      </div>
    </div>
  );
}

export default CryptoConverter;

import { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    async function startFetcing() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        if (!res) throw new Error("User not found");
        const Data = await res.json();

        setData(Data);
        setIsLoading(false);
        console.log("User data:", Data);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
        console.log(error);
      }
    }

    startFetcing();
  }, [id]);

  if (isLoading) {
    return <div>Loading data from server...</div>;
  }

  if (error) {
    return <div>Something went wrong: {error}</div>;
  }


  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Real-World Data Fetcher</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {/* {data.map((x) => (
          <div
            key={x.id}
            style={{
              padding: "10px",
              border: "1px solid white",
              borderRadius: "15px",
              width: "350px",
            }}
          >
            <h3>Name: {x.name}</h3>
            <p>Username: {x.username}</p>
            <p>Email: {x.email}</p>
          </div>
        ))} */}
        <div style={{ padding: "10px", border: "1px solid white", borderRadius: "15px", width: "350px" }}>
          <h2>Name: {data?.name}</h2>
          <h4>Id: {data?.id}</h4>
          <p>Username: {data?.username}</p>
          <p>Email: {data?.email}</p>
        </div>
        <button onClick={() => setId((prvid) => prvid + 1)} disabled = {id >= 10}>{id >= 10 ? "There are only 10 users available!" : "Next User"}</button>
      </div>
    </div>
  );
}

export default DataFetcher;

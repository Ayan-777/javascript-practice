import { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        let Data = await res.json();
        setUser(Data);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, []);

  if(loading){
    return <h4>Loading User Data.....</h4>
  }

  return (
    <ol>
        {user.map((x) => (
            <li key={x.id}>
                <strong>Name:</strong> {x.name} | <strong>Username: </strong> {x.username}
            </li>
        ))}
    </ol>
  )
}

export default User;

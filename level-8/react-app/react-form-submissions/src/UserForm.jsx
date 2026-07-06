import { useState } from "react";

function UserForm(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState('')
    const [createUser, setCreateUser] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault();
            try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name, age,email})
        });
        
        let data = await res.json();

        setCreateUser(data)
        setName("");
        setAge("");
        setEmail("")
    } catch (error) {
       console.log(error) 
    }

    }
  

    return (
        <>
            <div style={{textAlign: "center", padding:"40px"}}>
                <h1>API Integration Practice</h1>
                <form onSubmit={handleSubmit} style={{ margin: "20px auto", padding: "20px", border: "1px dashed white", borderRadius: "15px", maxWidth:"400px" }}>
                    <h3>Create New User</h3>
                    <input type="text" placeholder="Enter your Name..." value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Your Age" value={age} onChange={(e) => setAge(e.target.value)}/>
                    <input type="text" placeholder="your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {createUser && (
                <div style={{ marginTop: "20px", padding: "15px", border: "1px solid green", borderRadius: "10px" }}>
                    <h3>🎉 User Created Successfully!</h3>
                    <p><strong>Name:</strong> {createUser?.name}</p>
                    <p><strong>Age:</strong> {createUser?.age}</p>
                    <p><strong>Email:</strong> {createUser?.email}</p>
                    <p><strong>Assigned Database ID:</strong> {createUser?.id}</p>
                </div>
            )}
        </>
    )

}

export default UserForm
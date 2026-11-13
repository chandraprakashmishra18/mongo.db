import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        try {
            const res = await axios.post(
                "http://localhost:3000/login",
                { email, password }
            );
            alert("Success: " + res.data.message);
        } catch (err) {
            alert("Error: " + err.response.data.message);
        }
    }

    return (
        <div style={{ padding: "50px" }}>
            <h2>Login</h2>
            <input 
                type="email" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />
            <input 
                type="password" placeholder="Enter Password"
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
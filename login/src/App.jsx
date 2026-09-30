import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState(localStorage.getItem("token"));

  const [role, setRole] = useState(localStorage.getItem("role"));

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "123456") {
      const userData = {
        userId: 101,
        role: "Admin",
      };

      const simulatedJWT = btoa(JSON.stringify(userData));
      localStorage.setItem("token", simulatedJWT);
      localStorage.setItem("role", userData.role);

      setToken(simulatedJWT);
      setRole(userData.role);

      alert("Login Successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setToken(null);
    setRole(null);

    setUsername("");
    setPassword("");
  };

  if (token) {
    return (
      <div className="container">
        <div className="dashboard">
          <h1>Dashboard</h1>

          <h2>Welcome, {role}!</h2>

          <p>You have successfully logged in.</p>

          <div className="info">
            <p>
              <strong>User ID:</strong> 101
            </p>

            <p>
              <strong>Role:</strong> {role}
            </p>

            <p>
              <strong>Token:</strong>
            </p>

            <textarea value={token} readOnly />
          </div>

          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  // Login Page
  return (
    <div className="container">
      <div className="login-box">
        <h1>JWT Authentication</h1>

        <p className="subtitle">Login to access your dashboard</p>

        <form onSubmit={handleLogin}>
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {/*  <div className="demo">
          <strong>Demo Credentials</strong>

          <p>
            Username: <b>admin</b>
          </p>

          <p>
            Password: <b>123456</b>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default App;

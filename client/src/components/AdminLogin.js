import React, { useState } from "react";

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminUser = process.env.REACT_APP_ADMIN_USER;
    const adminPass = process.env.REACT_APP_ADMIN_PASS;
    console.log(adminUser, adminPass);
    if (username === adminUser && password === adminPass) {
      localStorage.setItem("isAdmin", "true");
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        maxWidth: 320,
        margin: "4rem auto",
        padding: "2rem",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 16px rgba(25,118,210,0.08)",
      }}
    >
      <h2 style={{ color: "#1976d2", marginBottom: "1rem" }}>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "0.7rem",
            marginBottom: "1rem",
            borderRadius: 8,
            border: "1px solid #e3f2fd",
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "0.7rem",
            marginBottom: "1rem",
            borderRadius: 8,
            border: "1px solid #e3f2fd",
          }}
          required
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.7rem",
            borderRadius: 8,
            background: "#1976d2",
            color: "#fff",
            fontWeight: 600,
            border: "none",
          }}
        >
          Login
        </button>
        {error && (
          <div style={{ color: "red", marginTop: "1rem" }}>{error}</div>
        )}
      </form>
    </div>
  );
}

export default AdminLogin;

// import React from "react";
// import "./RegisteredUsers.css";

// const RegisteredUser: React.FC = () => {
//   return (
//     <div className="registered-user-container">
//       <div className="login-card">
//         <div className="logo-container">
//           {/* <img src="/logo.png" alt="Logo" className="logo" />  */}
//           <h2>BATTERY PASSPORT</h2>
//         </div>
//         <h3>Sign in with your email and password</h3>
//         <form className="login-form">
//           <label>Email</label>
//           <input type="email" placeholder="name@host.com" required />

//           <label>Password</label>
//           <input type="password" placeholder="Password" required />

//           <a href="/forgot-password" className="forgot-password">
//             Forgot your password?
//           </a>

//           <button type="submit" className="signin-button">Sign in</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisteredUser;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/RegisteredUsers.css";

const RegisteredUser: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "issuer@batterypassport.com" && password === "1234") {
      navigate("/issuer");
    } else if (email === "holder@batterypassport.com" && password === "1234") {
      navigate("/holder");
    } else if (email === "repurposer@batterypassport.com" && password === "1234") {
      navigate("/material");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="registered-user-container">
      <div className="login-card">
        <div className="logo-container">
          <h2>BATTERY PASSPORT</h2>
        </div>
        <h3>Sign in with your email and password</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="name@host.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <a href="/forgot-password" className="forgot-password">
            Forgot your password?
          </a>

          <button type="submit" className="signin-button">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default RegisteredUser;
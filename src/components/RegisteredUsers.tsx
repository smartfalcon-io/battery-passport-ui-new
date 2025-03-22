// import React from "react";
// import "./RegisteredUsers.css"

// const RegisteredUser: React.FC = () => {
//   return (
//     <div className="registered-user-container">
//       <h2>Registered User Login</h2>
//       <p>Enter your credentials to access your account.</p>
//     </div>
//   );
// };

// export default RegisteredUser;


import React from "react";
import "./RegisteredUsers.css";

const RegisteredUser: React.FC = () => {
  return (
    <div className="registered-user-container">
      <div className="login-card">
        <div className="logo-container">
          {/* <img src="/logo.png" alt="Logo" className="logo" />  */}
          <h2>BATTERY PASSPORT</h2>
        </div>
        <h3>Sign in with your email and password</h3>
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="name@host.com" required />

          <label>Password</label>
          <input type="password" placeholder="Password" required />

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

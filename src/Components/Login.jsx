import React, { useState } from "react";

const Login = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="login-container">
      <div className="wel">
        <h1 className="welcome-message">
          Welcome to the<br></br>
          Decentralized E-Voting Application 💻
        </h1>

        <button className="login-button" onClick={props.connectWallet}>
          Connect Metamask to Login
        </button>
      </div>
    </div>
  );
};

export default Login;

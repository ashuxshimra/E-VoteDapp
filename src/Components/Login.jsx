import React from "react";

const Login = (props) => {
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
      {/* <div className="ibg">
        <img
          src="https://media3.giphy.com/media/MFabj1E9mgUsqwVWHu/200w.webp?cid=ecf05e47zci1ihj9ujxnocdvyr28wa3on63e0ginadtjm7zr&ep=v1_gifs_search&rid=200w.webp&ct=g"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Login;

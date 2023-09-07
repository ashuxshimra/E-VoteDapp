import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Connected = (props) => {
  return (
    <div className="connected-container">
      <h1
        style={{ marginTop: "0.5rem", fontFamily: "cursive", color: "wheat" }}
        className="connected-header"
      >
        You are Connected to Metamask
      </h1>
      <p
        style={{ fontWeight: "bolder", color: "springgreen" }}
        className="connected-account"
      >
        Metamask Account: {props.account}
      </p>
      {/* <p className="connected-account">Remaining Time: {props.remainingTime}</p> */}
      {props.showButton ? (
        <p className="connected-account">You have already voted</p>
      ) : (
        <div>
          <div className="ic">
            <input
              style={{ backgroundColor: "WindowFrame", color: "snow" }}
              type="number"
              placeholder="Enter Candidate ID"
              value={props.number}
              onChange={props.handleNumberChange}
            ></input>
          </div>
          <br />
          <div className="btnC">
            <button
              style={{
                paddingBottom: "1rem",
                paddingLeft: "3rem",
                paddingRight: "3rem",
              }}
              className="login-button"
              onClick={props.voteFunction}
            >
              Vote
            </button>
          </div>
        </div>
      )}

      <table
        style={{ marginBottom: "4rem" }}
        id="myTable"
        className="candidates-table"
      >
        <thead>
          <tr>
            <th>Index</th>
            <th>Candidate name</th>
            <th>Candidate votes</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map((candidate, index) => (
            <tr key={index}>
              <td style={{ fontWeight: "bolder" }}>{candidate.index}</td>
              <td style={{ fontWeight: "bolder" }}>{candidate.name}</td>
              <td style={{ fontWeight: "bolder" }}>{candidate.voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default Connected;

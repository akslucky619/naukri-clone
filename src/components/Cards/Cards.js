import React from "react";
import Button from "../Button.js/Button";
import "./cards.css";

function Card(props) {
  console.log(props);
  return (
    <div style={props.style} className="card-parent">
      <div>
        <div className="title">
          <h2>Title</h2>
        </div>
        <div>
          <p>
            {" "}
            Lorem ipsum description Lorem ipsum description Lorem ipsum
            description Lorem ipsum description
          </p>
        </div>
        <div className="card-bottom">
          <p>Gurgaon</p>
          {/* <button></button> */}
          <Button
            styles={{ color: "#414141" }}
            onClick={props.onClick}
            text="View applicants"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

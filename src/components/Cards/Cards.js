import React from "react";
import Button from "../Button.js/Button";
import "./cards.css";

function Card(props) {
  console.log(props);
  return (
    <div style={props.style} className="card-parent">
      <div>
        <div>
          <h2>Title</h2>
        </div>
        <div>
          <p>
            {" "}
            Lorem ipsum description Lorem ipsum description Lorem ipsum
            description Lorem ipsum description
          </p>
        </div>
        <div>
          <p>Gurgaon</p>
          {/* <button></button> */}
          <Button onClick={props.onClick} text="View applicants" />
        </div>
      </div>
    </div>
  );
}

export default Card;

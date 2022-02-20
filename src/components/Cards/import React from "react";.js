import React from "react";
import Button from "../Button.js/Button";
import "./cards.css";

function Card(props) {
  console.log(props);
  const { post } = props;
  return (
    <div style={props.style} className="card-parent">
      {props.children && props.children}
      {!props.children && (
        <div className="card-inner">
          <div className="title">
            <h2>{post.title || "rrr"}</h2>
          </div>
          <div className="description">
            <p>{post.description || "rrr"}</p>
          </div>
          <div className="card-bottom">
            <p>{post.location || "eee"}</p>
            {/* <button></button> */}
            <Button
              styles={{ color: "#414141" }}
              onClick={props.onClick}
              text="View applicants"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;

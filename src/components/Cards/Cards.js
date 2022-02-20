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
            <div className="location-div">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="17"
                  viewBox="0 0 12 17"
                >
                  <path
                    id="Icon_material-location-on"
                    data-name="Icon material-location-on"
                    d="M12.5,3a5.126,5.126,0,0,0-5,5.25c0,3.937,5,9.75,5,9.75s5-5.813,5-9.75A5.126,5.126,0,0,0,12.5,3Zm0,7.125A1.833,1.833,0,0,1,10.714,8.25a1.788,1.788,0,1,1,3.571,0A1.833,1.833,0,0,1,12.5,10.125Z"
                    transform="translate(-6.5 -2)"
                    fill="none"
                    stroke="#43afff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </span>
              <span style={{ marginLeft: "5px" }}>
                {post.location || "eee"}
              </span>
            </div>
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

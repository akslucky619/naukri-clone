import React from "react";
import "./Button.css";

function Button(props) {
  const { classname, text, type, onClick } = props;
  console.log(props);

  return (
    <button onClick={onClick} className={classname ? classname : "default"} type={type}>
      {text ? text : "Click"}
    </button>
  );
}

export default Button;

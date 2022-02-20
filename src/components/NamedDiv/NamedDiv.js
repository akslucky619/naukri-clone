import React from "react";
import "./NamedDiv.css";
function NamedDiv(props) {
  const { letter } = props;
  return (
    <>
      {letter && <div className="letter">{letter}</div>}
      {!letter && <div className="letter">A</div>}
    </>
  );
}

export default NamedDiv;

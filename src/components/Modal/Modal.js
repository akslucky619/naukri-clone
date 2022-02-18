import React from "react";
import "./Modal.css";

function Modal(props) {
  if (!props.show) {
    return null;
  }

  console.log(props);
  return (
    <div className="modal">
      <div>Modal Header</div>
      <div>Modal Content</div>
      <button onClick={props.onClose} className="button">
        Close
      </button>
    </div>
  );
}

export default Modal;

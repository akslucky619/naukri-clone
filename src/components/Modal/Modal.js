import React from "react";
import "./Modal.css";

function Modal(props) {
  if (!props.show) {
    return null;
  }

  const isChildren = props.children ? true : false;
  return (
    <div className="modal">
      {/* <div className="modal-parent">
        <div>
          <div>
            <div>Modal Header</div>
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
          <div>
            <div>Modal underline</div>
          </div>
          <span>Total applicants</span>
          <div>cards</div>
        </div>
      </div> */}
      {isChildren && props.children}
      {!isChildren && <div className="modal-parent"></div>}
    </div>
  );
}

export default Modal;

import React, { useState } from "react";
import Card from "../Cards/Cards";
import Modal from "../Modal/Modal";
import Nav from "../Nav/Nav";
import "./JobsPage.css";

function JobsPage() {
  const [show, setShow] = useState(false);

  return (
    <div className="jobs-parent">
      <div className="jobs-header">
        <Nav />
      </div>
      <div className="jobs-main">
        {/* <div className="cards">
          <Card style={{width:'280px', height:'190px'}} />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}
        <button onClick={() => setShow(true)}>click</button>
        <Modal onClose={() => setShow(false)} show={show}>
          <div className="modal-parent">
            <div>
              <div>
                <div>Modal Header</div>
                <button onClick={() => setShow(false)} className="button">
                  Close
                </button>
              </div>
              <div>
                <div>Modal underline</div>
              </div>
              <span>Total applicants</span>
              <div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default JobsPage;

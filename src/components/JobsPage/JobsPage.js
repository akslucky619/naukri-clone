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
          <Card />
        </div> */}
        <button onClick={() => setShow(true)}>click</button>
        <Modal onClose={() => setShow(false)} show={show} />
      </div>
    </div>
  );
}

export default JobsPage;

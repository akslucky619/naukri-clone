import React, { useState } from "react";
import Card from "../Cards/Cards";
import Modal from "../Modal/Modal";
import Nav from "../Nav/Nav";
import Pagination from "../Pagination.js/Pagination";
import "./JobsPage.css";
import { apidata } from "../../data/apidata";

function JobsPage() {
  const [show, setShow] = useState(false);
  const [resultsToMap, setResultsToMap] = useState([]);
  const [remainingResults, setRemainingResults] = useState([]);

  console.log(apidata.data);

  return (
    <div className="jobs-parent">
      <div className="jobs-header">
        <Nav />
        <div style={{ marginLeft: "10%", marginTop: "12px" }}>
          <div style={{ display: "flex" }}>
            <span style={{ marginTop: "6px", marginRight: "4px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.015"
                height="9.245"
                viewBox="0 0 10.015 9.245"
              >
                <path
                  id="Icon_ionic-md-home"
                  data-name="Icon ionic-md-home"
                  d="M7.227,13.745V10.663H9.538v3.082h2.35V9.122h1.5L8.383,4.5,3.375,9.122h1.5v4.622Z"
                  transform="translate(-3.375 -4.5)"
                  fill="#fff"
                />
              </svg>
            </span>
            <span style={{ color: "white" }}>home</span>
          </div>
          <div style={{ marginTop: "10px", fontSize: "35px", color: "white" }}>
            Job posted by you
          </div>
        </div>
      </div>
      <div className="jobs-main">
        <div className="cards">
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />{" "}
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />{" "}
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />{" "}
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />{" "}
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />{" "}
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />{" "}
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />{" "}
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />{" "}
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />{" "}
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />{" "}
          <Card
            onClick={() => setShow(true)}
            style={{ width: "22%", height: "30%" }}
          />
        </div>
        <div className="paginate">
          <Pagination />
        </div>
        {/* <button onClick={() => setShow(true)}>click</button> */}
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

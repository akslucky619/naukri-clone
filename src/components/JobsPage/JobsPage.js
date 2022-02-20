import React, { useEffect, useState } from "react";
import Card from "../Cards/Cards";
import Modal from "../Modal/Modal";
import Nav from "../Nav/Nav";
import Pagination from "../Pagination.js/Pagination";
import "./JobsPage.css";
import { apidata } from "../../data/apidata";

function JobsPage(props) {
  const [show, setShow] = useState(false);
  const [currentPage, setCurentPage] = useState(1);
  const [postPerPage] = useState(12);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(apidata);
    setData(apidata.data);
  }, []);

  const indexLast = currentPage * postPerPage;
  const indexFirst = indexLast - postPerPage;
  const currentPosts = data.slice(indexFirst, indexLast);

  const pages = [];

  for (let i = 1; i <= Math.ceil(postPerPage / data.length); i++) {
    pages.push(i);
  }

  console.log(pages, "in jobs");

  return (
    <div className="jobs-parent">
      <div className="jobs-header">
        <Nav handleLogout={props.handleLogout} />
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
          <div style={{ fontSize: "35px", color: "white" }}>
            Jobs posted by you
          </div>
        </div>
      </div>
      <div className="jobs-main">
        {/* <div className="no-jobs">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="106.147"
              height="106.15"
              viewBox="0 0 106.147 106.15"
            >
              <g id="writing" transform="translate(-0.006 0)" opacity="0.5">
                <path
                  id="Path_49"
                  data-name="Path 49"
                  d="M425.491,154.833a6.228,6.228,0,0,0-8.324-.426c-.353.288-.08.034-5.456,5.411l13.956,13.956,5.016-4.953a6.227,6.227,0,0,0,0-8.8Z"
                  transform="translate(-326.349 -121.291)"
                  fill="#a9afbc"
                />
                <path
                  id="Path_50"
                  data-name="Path 50"
                  d="M241.163,231.527l-8.21,17.592a3.11,3.11,0,0,0,4.133,4.133l17.592-8.21c.7-.325-1.411,1.647,24.635-24.073l-13.929-13.929c-25.824,25.824-23.891,23.777-24.222,24.486Z"
                  transform="translate(-184.42 -164.116)"
                  fill="#a9afbc"
                />
                <path
                  id="Path_51"
                  data-name="Path 51"
                  d="M75.5,84.748a9.307,9.307,0,0,1-2.609,1.815L55.3,94.773a9.33,9.33,0,0,1-12.4-12.4l8.21-17.593a9.305,9.305,0,0,1,1.857-2.651L79.411,35.682V9.33A9.34,9.34,0,0,0,70.082,0H9.336A9.34,9.34,0,0,0,.006,9.33V96.82a9.34,9.34,0,0,0,9.33,9.33H70.082a9.34,9.34,0,0,0,9.33-9.33V80.883ZM16.592,20.11H63.033a3.11,3.11,0,0,1,0,6.22H16.592a3.11,3.11,0,1,1,0-6.22Zm0,16.586H53.081a3.11,3.11,0,0,1,0,6.22H16.592a3.11,3.11,0,1,1,0-6.22Zm-3.11,19.7a3.11,3.11,0,0,1,3.11-3.11H43.13a3.11,3.11,0,0,1,0,6.22H16.592A3.11,3.11,0,0,1,13.482,56.392Z"
                  fill="#a9afbc"
                />
              </g>
            </svg>
          </div>
          <h4>Your posted jobs will show here</h4>
        </div> */}
        <div className="cards">
          {currentPosts &&
            currentPosts.map((post) => (
              <>
                <Card
                  post={post}
                  onClick={() => setShow(true)}
                  style={{ width: "22%", height: "30%" }}
                />
              </>
            ))}
          {/* <Card
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
          /> */}
        </div>
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
                <Card style={{ width: "360px", height: "200px" }}>
                  <div className="cards-home">
                    <h1>Verify their</h1>
                    <h1>Abilities</h1>
                  </div>
                  <div className="cards-home-desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Modal>
        {!show && (
          <div className="paginate">
            <Pagination postPerPage={postPerPage} totalPages={data.length} />
          </div>
        )}
      </div>
    </div>
  );
}

export default JobsPage;

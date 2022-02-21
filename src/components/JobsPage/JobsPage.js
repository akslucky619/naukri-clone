import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Cards/Cards";
import Modal from "../Modal/Modal";
import Nav from "../Nav/Nav";
import Pagination from "../Pagination.js/Pagination";
import { apidata } from "../../data/apidata";
import { modalData } from "../../data/modaldata";
import NamedDiv from "../NamedDiv/NamedDiv";
import "./JobsPage.css";

function JobsPage(props) {
  const { user, handleLogout } = props;

  const [show, setShow] = useState(false);
  const [currentPage, setCurentPage] = useState(1);
  const [postPerPage] = useState(12);
  const [data, setData] = useState([]);

  useEffect(() => {
    // api not working!!

    // const fetchJobs = async () => {
    //   const result = await axios(
    //     "https://jobs-api.squareboat.info/api/v1 /recruiters/jobs",
    //     { headers: { Authorization: `${user}` } }
    //   );
    //   setData(result.data);

    //   fetchJobs();
    // };
    setData(apidata.data);
  }, []);

  const indexLast = currentPage * postPerPage;
  const indexFirst = indexLast - postPerPage;
  const currentPosts = data.slice(indexFirst, indexLast);

  const pageCount = Math.ceil(apidata.data.length / postPerPage);

  const paginate = (pageNumber) => setCurentPage(pageNumber);

  // const pages = [];

  // for (let i = 1; i <= Math.ceil(postPerPage / data.length); i++) {
  //   pages.push(i);
  // }

  return (
    <div className="jobs-parent">
      <div className="jobs-header">
        <Nav handleLogout={handleLogout} user={user} />
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
          /> */}
        </div>
        <Modal onClose={() => setShow(false)} show={show}>
          <div className="modal-parent">
            <div className="modal-child">
              <div className="close-header">
                <div className="modal-header">Modal Header</div>
                <button onClick={() => setShow(false)} className="button">
                  Close
                </button>
              </div>
              <div>
                <div className="modal-underline"></div>
              </div>
              <div className="modal-span">
                <span>{modalData.data.length} Total applicants</span>
              </div>
              <div className="modal-cards">
                {modalData.data.map((post) => (
                  <Card
                    style={{
                      width: "45%",
                      height: "180px",
                      marginBottom: "15px",
                      border: "1px solid #e6e6e6",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="modal-card-header">
                      <div style={{ width: "24px" }}>
                        <NamedDiv letter={post.name[0]} />
                      </div>
                      <div className="card-header-text">
                        <div>{post.name}</div>
                        <div>{post.email}</div>
                      </div>
                    </div>
                    <div className="modal-card-footer">
                      <div>skills</div>
                      <div>{post.skills}</div>
                    </div>
                  </Card>
                ))}
              </div>
              {/* <div className="no-applicants"> */}
              {/* <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="84.92"
                    height="106.15"
                    viewBox="0 0 84.92 106.15"
                  >
                    <g
                      id="curriculum"
                      transform="translate(-51.2)"
                      opacity="0.5"
                    >
                      <g
                        id="Group_2010"
                        data-name="Group 2010"
                        transform="translate(114.89)"
                      >
                        <g id="Group_2009" data-name="Group 2009">
                          <path
                            id="Path_52"
                            data-name="Path 52"
                            d="M358.4,0V21.23h21.23Z"
                            transform="translate(-358.4)"
                            fill="#a9afbc"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_2012"
                        data-name="Group 2012"
                        transform="translate(51.2)"
                      >
                        <g
                          id="Group_2011"
                          data-name="Group 2011"
                          transform="translate(0)"
                        >
                          <path
                            id="Path_53"
                            data-name="Path 53"
                            d="M104.275,31.845V0H56.507A5.014,5.014,0,0,0,51.2,5.308v95.535a5.014,5.014,0,0,0,5.307,5.308h74.305a5.014,5.014,0,0,0,5.307-5.308v-69ZM77.738,10.615A10.615,10.615,0,1,1,67.122,21.23,10.646,10.646,0,0,1,77.738,10.615ZM61.815,45.645c0-11.146,31.845-11.146,31.845,0v7.431H61.815Zm47.767,49.89H67.122a5.307,5.307,0,0,1,0-10.615h42.46a5.014,5.014,0,0,1,5.308,5.308A5.319,5.319,0,0,1,109.582,95.535ZM120.2,74.305H67.122a5.308,5.308,0,0,1,0-10.615H120.2A5.014,5.014,0,0,1,125.505,69,5.319,5.319,0,0,1,120.2,74.305Z"
                            transform="translate(-51.2)"
                            fill="#a9afbc"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div>No Applications available</div> */}
              {/* </div> */}
            </div>
          </div>
        </Modal>
        {!show && (
          <div className="paginate">
            <Pagination
              pageCount={pageCount}
              postPerPage={postPerPage}
              totalPages={data.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default JobsPage;

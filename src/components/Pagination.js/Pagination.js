import React from "react";
import "./Pagination.css";

function Pagination(props) {
  const { postsPerPage, totalPosts, pageCount, paginate, currentPage } = props;
  console.log({ props }, "in pagination");
  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  console.log(pages, "pages ------------->");

  const forward = () => {
    if (currentPage < pageCount) {
      paginate(currentPage + 1);
    }
  };

  const back = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="paginate-parent">
      <div onClick={back} className="prev" style={{ flex: "1" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5.518"
          height="10.247"
          viewBox="0 0 5.518 10.247"
        >
          <path
            id="Icon_awesome-caret-down"
            data-name="Icon awesome-caret-down"
            d="M1.484,13.5h8.868a.65.65,0,0,1,.486,1.116L6.406,18.826a.717.717,0,0,1-.975,0L1,14.616A.65.65,0,0,1,1.484,13.5Z"
            transform="translate(19.018 -0.794) rotate(90)"
            fill="#7a839a"
            opacity="0.5"
          />
        </svg>
      </div>
      {pages.map((page) => (
        <div
          key={page}
          onClick={() => paginate(page)}
          className={currentPage === page ? "active" : "pages"}
          key={page}
        >
          {page}
        </div>
      ))}
      <div onClick={forward} className="next" style={{ flex: "1" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5.518"
          height="10.247"
          viewBox="0 0 5.518 10.247"
        >
          <path
            id="Icon_awesome-caret-down"
            data-name="Icon awesome-caret-down"
            d="M1.484,13.5h8.868a.65.65,0,0,1,.486,1.116L6.406,18.826a.717.717,0,0,1-.975,0L1,14.616A.65.65,0,0,1,1.484,13.5Z"
            transform="translate(-13.5 11.042) rotate(-90)"
            fill="#7a839a"
          />
        </svg>
      </div>
    </div>
  );
}

export default Pagination;

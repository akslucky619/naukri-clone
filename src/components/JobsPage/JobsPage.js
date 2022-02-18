import React from "react";
import Card from "../Cards/Cards";
import Nav from "../Nav/Nav";
import "./JobsPage.css";

function JobsPage() {
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
      </div>
    </div>
  );
}

export default JobsPage;

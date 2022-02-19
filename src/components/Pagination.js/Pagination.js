import React from "react";

function Pagination() {
  const pages = [1, 2, 3];

  return (
    <div>
      <div>Previos</div>
      {pages.map((page) => (
        <div key={page}>{page}</div>
      ))}
      <div>Next</div>
    </div>
  );
}

export default Pagination;

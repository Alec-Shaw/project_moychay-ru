import React from "react";

const Pagination = ({ videosPerPage, totalVideos, pagiante, currentPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="flex justify-center items-center">
      {pageNumber.map((numb) => (
        <div
          className={`text-center ${
            numb === currentPage && "border border-green-500"
          }  rounded-sm w-[32px] h-[32px] m-2 pt-1`}
          key={numb}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              pagiante(numb);
            }}
          >
            {numb}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Pagination;

import React from "react";

const Pagination = ({ total, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(total / 5);

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
        onPageChange(currentPage + 1)
    }
  };

  return (
    <div className="pagination">
      <button
        className="arrow-btn"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        &#8592;
      </button>
      <span className="page-numbers">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="arrow-btn"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Pagination;

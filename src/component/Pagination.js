export default Pagination = ({
  handlePrev,
  handleChange,
  handleNext,
  totalPages,
  currentPage,
}) => {
  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 0}
        className="page-number"
        onClick={() => handlePrev()}
      >
        ◀
      </button>
      {[...Array(totalPages).keys()].map((n) => (
        <button
          className={"page-number " + (n === currentPage ? "active" : "")}
          key={n}
          onClick={() => handleChange(n)}
        >
          {n}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages - 1}
        className="page-number"
        onClick={() => handleNext()}
      >
        ▶
      </button>
    </div>
  );
};

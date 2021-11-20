export const Pagination = ({
  itemsPerPage,
  productList,
  currentPage,
  setCurrentPage,
}) => {
  // console.log({ itemsPerPage, productList });
  const pageNumbers = [];
  const pagesLength = Math.ceil(productList / itemsPerPage);
  for (let i = 1; i <= pagesLength; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li
            onClick={() => setCurrentPage(number)}
            className={
              currentPage === number
                ? "bg-blue-800 text-white rounded-full p-2 m-2 cursor-pointer"
                : "rounded-full border border-blue-800 text-blue-800 p-2 m-2 cursor-pointer"
            }
            key={number}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

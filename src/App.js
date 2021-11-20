import { useState } from "react";
import { AddProduct } from "./components/AddProduct";
import { Catalogue } from "./components/Catalogue";
import { Pagination } from "./components/Pagination";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="App m-4 p-1">
      <h1 className="text-center">Catalogue</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-800 text-white block px-5 py-2 mt-5text-white rounded-lg"
      >
        Add
      </button>
      <Catalogue productList={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        productList={productList.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <AddProduct
        showModal={showModal}
        setShowModal={setShowModal}
        setProductList={setProductList}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        productList={productList}
      />
    </div>
  );
}

export default App;

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { AddProduct } from "./components/AddProduct";
import { Catalogue } from "./components/Catalogue";
import { Pagination } from "./components/Pagination";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function App() {
  const [showModal, setShowModal] = useState(false);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("data.json");
      console.log({ data });
      setProductList(data);
    })();
  }, []);
  return (
    <div className="App m-4 p-1">
      <h1
        className="text-center font-bold text-xl
      sm:text-3xl"
      >
        Food Catalogue
      </h1>
      <div className="flex justify-end sm:px-28">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-800 hover:bg-blue-900 text-white block px-5 py-1 mt-5text-white rounded-lg my-4"
        >
          <div className="flex items-center justify-center">
          <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
          Add Product
          </div>
         
        </button>
      </div>
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

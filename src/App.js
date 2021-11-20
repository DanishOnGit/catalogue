import { useState } from "react";
import { AddProduct } from "./components/AddProduct";
import { Catalogue } from "./components/Catalogue";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [productList, setProductList] = useState([]);
  return (
    <div className="App m-4 p-1">
      <h1 className="text-center">Catalogue</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-800 text-white block px-5 py-2 mt-5text-white rounded-lg"
      >Add</button>
      <Catalogue productList={productList} />
      <AddProduct showModal={showModal} setShowModal={setShowModal} setProductList={setProductList} />
    </div>
  );
}

export default App;

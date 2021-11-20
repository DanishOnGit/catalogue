import { useEffect, useRef, useState } from "react";
import { ProductPreview } from "./ProductPreview";
import { v4 as uuidv4 } from "uuid";
export const AddProduct = ({ showModal, setShowModal, setProductList,productList,itemsPerPage, setCurrentPage }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [showCardPreview, setCardPreview] = useState(false);
  const titleRef = useRef(null);
  const inputRef = useRef();
  const cancelModal = () => {
    setTitle("");
    setDescription("")
    setProductImage(null)
    setImagePreview(null)
    setShowModal(false);
    setShowModal(false);
  };
  const addToCatalogue = () => {
    setProductList((prev) => [
      ...prev,
      { id: uuidv4(), title, description, src:imagePreview},
    ]);
    // if(productList.length>itemsPerPage){
    //     const newPage = Math.ceil(productList.length/itemsPerPage)
    //     setCurrentPage(newPage)
    // }
    setTitle("");
    setDescription("")
    setProductImage(null)
    setImagePreview(null)
    setShowModal(false);
  };
  useEffect(() => {
    if (productImage) {
      const reader = new FileReader();
      reader.readAsDataURL(productImage); //base 64 string
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      console.log({reader})
    } else {
      setImagePreview(null);
    }
    if(productList.length>itemsPerPage){
        const newPage = Math.ceil(productList.length/itemsPerPage)
        setCurrentPage(newPage)
    }
    console.log({productImage,imagePreview})
    // eslint-disable-next-line
  }, [productImage,imagePreview]);
  return (
    <>
      <div className={showModal ? "modal-wrapper" : "hidden"}>
        <div
          className={
            showModal
              ? "event-modal bg-white bg-opacity-80 block p-4 p sm:mx-4 w-full rounded-3xl text-center"
              : "hidden p-2 mx-2 sm:mx-4 event-modal max-w-xs w-full"
          }
        >
          <h2 className="mb-4">Add Product</h2>
          <input
            ref={titleRef}
            value={title}
            className="px-2 py-3 my-2 block w-full focus:ring-blue-800 focus:ring-2 focus:outline-none rounded-lg"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            value={description}
            className="px-2 py-3 my-2 block w-full focus:ring-blue-800 focus:ring-2 focus:outline-none rounded-lg"
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          {!imagePreview && <button
            onClick={() => inputRef.current.click()}
            className="bg-blue-800 block px-5 py-2 mt-5 text-white rounded-lg"
          >
            Add image
          </button>}
          <input
            ref={inputRef}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setProductImage(e.target.files[0]);
              } else {
                setProductImage(null);
              }
            }}
            type="file"
            accept="image/*"
            className="hidden px-2 py-3 my-2 w-full focus:ring-blue-800 focus:ring-2 focus:outline-none rounded-lg"
          />
          {imagePreview && (
            <button onClick={() => setCardPreview(true)}>show preview</button>
          )}
          <button
            onClick={addToCatalogue}
            className="bg-blue-800 block px-5 py-2 mt-5 text-white rounded-lg min-w-full"
          >
            Done
          </button>
          <button
            onClick={cancelModal}
            className="text-blue-800 block px-5 py-2 my-2 rounded-lg min-w-full"
          >
            Cancel
          </button>
        </div>
        {showCardPreview && (
          <div onClick={() => setCardPreview(false)} className="modal-wrapper">
            <ProductPreview
              showCardPreview={showCardPreview}
              setCardPreview={setCardPreview}
              item={{ title, description, src: imagePreview }}
            />
          </div>
        )}
      </div>
    </>
  );
};

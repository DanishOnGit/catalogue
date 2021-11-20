import { useEffect, useRef, useState, useCallback } from "react";
import { ProductPreview } from "./ProductPreview";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";
export const AddProduct = ({
  showModal,
  setShowModal,
  setProductList,
  productList,
  itemsPerPage,
  setCurrentPage,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [choosingFile, setChoosingFile] = useState(false);
  const [productImage, setProductImage] = useState([]);
  const [showCardPreview, setCardPreview] = useState(false);
  const titleRef = useRef(null);
  const inputRef = useRef();

  const onDrop = useCallback((acceptedFiles) => {
    const result = acceptedFiles.map((file) => URL.createObjectURL(file));
    setProductImage((prevImages) => prevImages.concat(result));
    acceptedFiles.map((file) => URL.revokeObjectURL(file));
    setChoosingFile(true);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setProductImage([]);
    setShowModal(false);
    setChoosingFile(false);
  };
  const cancelModal = (e) => {
    e.preventDefault();
    resetForm();
  };
  const addToCatalogue = (e) => {
    e.preventDefault();
    setProductList((prev) => [
      ...prev,
      { id: uuidv4(), title, description, src: productImage },
    ]);
    resetForm();
  };
  const handleImageInput = (e) => {
    const files = e.target.files; //its iterable but not array

    if (files) {
      const fileArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setProductImage((prevImages) => prevImages.concat(fileArray));
      Array.from(files).map((file) => URL.revokeObjectURL(file));
      setChoosingFile(true);
    } else {
      setProductImage([]);
      setChoosingFile(true);
    }
    e.target.value = null;
  };

  useEffect(() => titleRef.current.focus(), []);

  useEffect(() => {
    if (productList.length > itemsPerPage) {
      const newPage = Math.ceil(productList.length / itemsPerPage);
      setCurrentPage(newPage);
    }
  }, [productList, itemsPerPage, setCurrentPage]);
  return (
    <>
      <div className={showModal ? "modal-wrapper" : "hidden"}>
        <div
          className={
            showModal
              ? "event-modal bg-white bg-opacity-80 block p-4 p sm:mx-4 w-full rounded-3xl"
              : "hidden p-2 mx-2 sm:mx-4 event-modal max-w-xs w-full"
          }
        >
          <h2 className="mb-4 text-center font-bold text-xl">Add Product</h2>
          <form onSubmit={addToCatalogue}>
            <label htmlFor="itemTitle">Title:</label>
            <input
              required
              id="itemTitle"
              ref={titleRef}
              value={title}
              className="px-2 py-3 my-2 block w-full focus:ring-blue-800 focus:ring-2 focus:outline-none rounded-lg"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="itemDescription">Description:</label>
            <input
              required
              id="itemDescription"
              value={description}
              className="px-2 py-3 my-2 block w-full focus:ring-blue-800 focus:ring-2 focus:outline-none rounded-lg"
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            {!choosingFile && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  inputRef.current.click();
                }}
                className="bg-blue-800 hover:bg-blue-900 transition duration-150 ease-in-out block px-5 py-2 mt-5 text-white rounded-lg"
              >
                <div className="flex items-center justify-center">
                  <svg
                    className="w-6 h-6 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Add Image
                </div>
              </button>
            )}
            <input
              multiple
              ref={inputRef}
              onChange={(e) => handleImageInput(e)}
              type="file"
              accept="image/*"
              className="hidden px-2 py-3 my-2 w-full focus:ring-blue-800 focus:ring-2 focus:outline-none rounded-lg"
            />

            <p className="text-center my-3">-----OR-----</p>
            <div
              {...getRootProps()}
              className="w-full h-20 bg-indigo-50 flex items-center justify-center rounded-lg px-2"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-gray-400">Drop the files here ...</p>
              ) : (
                <p className="text-gray-400">
                  Drag 'n' drop some files here, or click to select files
                </p>
              )}
            </div>
            {choosingFile && (
              <button
                className="border border-blue-800 text-blue-800 my-2 rounded-lg p-2 w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setCardPreview(true);
                }}
              >
                show preview
              </button>
            )}
            <button className="bg-blue-800 hover:bg-blue-900 transition duration-150 ease-in-out block px-5 py-2 mt-5 text-white rounded-lg min-w-full">
              Done
            </button>
            <button
              onClick={cancelModal}
              className="text-blue-800 block px-5 py-2 my-2 rounded-lg min-w-full"
            >
              Cancel
            </button>
          </form>
        </div>
        {showCardPreview && (
          <div className="modal-wrapper">
            <ProductPreview
              showCardPreview={showCardPreview}
              setCardPreview={setCardPreview}
              item={{ title, description, src: productImage }}
            />
          </div>
        )}
      </div>
    </>
  );
};

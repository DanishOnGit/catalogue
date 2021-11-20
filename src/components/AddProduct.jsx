import { useRef, useState } from "react";

export const AddProduct = ({ showModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleRef = useRef(null);
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
          <h2 className="mb-4">Add new event</h2>
          <input
            ref={titleRef}
            value={title}
            className="px-2 py-3 my-2 block w-full focus:outline-none rounded-lg"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            value={description}
            className="px-2 py-3 my-2 block w-full focus:outline-none rounded-lg"
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="pri-btn block px-5 py-2 mt-5 bg-green-500 text-white rounded-lg min-w-full">
            Done
          </button>
          <button className="sec-btn block px-5 py-2 my-2 rounded-lg min-w-full">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

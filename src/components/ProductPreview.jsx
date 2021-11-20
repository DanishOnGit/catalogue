export const ProductPreview = ({ item, showCardPreview, setCardPreview }) => {
  return (
    <>
      <div
        className={showCardPreview ? "product-preview bg-white p-4 block z-20 break-words rounded-lg" : "hidden"}
        onClick={() => setCardPreview(false)}
      >
        <h1 className="text-center">Preview</h1>
        <div>
          <img className="rounded-lg preview-img" src={item?.src} alt="" />
        </div>
        <div>
          <p className="font-bold">{item?.title}</p>
          <p>{item?.description}</p>
        </div>
        <button className="absolute top-2 right-3">X</button>
      </div>
    </>
  );
};

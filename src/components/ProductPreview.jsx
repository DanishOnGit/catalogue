export const ProductPreview = ({ item, showCardPreview, setCardPreview }) => {
  return (
    <>
      <div
        className={
          showCardPreview
            ? "product-preview bg-white p-4 block z-20 break-words rounded-lg"
            : "hidden"
        }
        onClick={() => setCardPreview(false)}
      >
        <h1 className="text-center font-bold text-xl mb-4">Product preview</h1>
        <div>
          <img className="rounded-lg preview-img mb-2" src={item?.src} alt="" />
        </div>
        <div>
          <p className="font-bold mb-3 sm:mb-4">{item?.title}</p>
          <p>{item?.description}</p>
        </div>
        {/* <button className="absolute top-2 right-3">X</button> */}
      </div>
    </>
  );
};

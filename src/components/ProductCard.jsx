export const ProductCard = ({ item }) => {
  return (
    <>
      <div className="px-4 py-2">
        <div>
          <img
            className="preview-img rounded-lg mb-2"
            src={item?.src}
            alt="product-pic"
          />
        </div>
        <div>
          <p className="font-bold mb-3 sm:mb-4">{item?.title}</p>
          <p>{item?.description}</p>
        </div>
      </div>
    </>
  );
};

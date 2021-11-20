export const ProductCard = ({ item }) => {
  return (
    <>
      <div>
        <div>
          <img className="preview-img rounded-lg" src={item?.src} alt="product-pic" />
        </div>
        <div>
          <p className="font-bold">{item?.title}</p>
          <p>{item?.description}</p>
        </div>
      </div>
    </>
  );
};

export const ProductCard = ({ item }) => {
  return (
    <>
      <div>
        <div>
          <img src={item.src} alt="" />
        </div>
        <div>
          <p className="font-bold">{item.name}</p>
          <p>{item.description}</p>
        </div>
      </div>
    </>
  );
};

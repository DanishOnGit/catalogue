import { ProductCard } from "./ProductCard";

export const Catalogue = ({ productList }) => {
  return (
    <>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-4">
        {productList.map((item) => (
          <li key={item.id} className="hover:shadow-lg transition duration-300 ease-in-out">
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

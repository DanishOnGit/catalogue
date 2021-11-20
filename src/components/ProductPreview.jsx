import Slider from "react-slick";

export const ProductPreview = ({ item, showCardPreview, setCardPreview }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        className={
          showCardPreview
            ? "product-preview bg-white p-4 block z-20 break-words rounded-lg"
            : "hidden"
        }
      >
        <button onClick={()=>setCardPreview(false)} className="absolute top-1 right-1">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <h1 className="text-center font-bold text-xl mb-4">Product preview</h1>
        <div className="mb-4">
          <Slider {...settings}>
            {item.src.map((item) => (
              <img
                key={item.id}
                className="preview-img rounded-lg mb-2"
                src={item}
                alt="product-pic"
              />
            ))}
          </Slider>
        </div>
        <div>
          <p className="font-bold mb-3 sm:mb-4">{item?.title}</p>
          <p>{item?.description}</p>
        </div>
      </div>
    </>
  );
};

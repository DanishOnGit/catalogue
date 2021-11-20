import Slider from "react-slick";

export const ProductCard = ({ item }) => {
 
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="px-4 py-2 flex flex-col">
        <div className="mb-4 flex-grow">
          <Slider {...settings}>
            {item.src.map((item) => (
              <img
                key={item}
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

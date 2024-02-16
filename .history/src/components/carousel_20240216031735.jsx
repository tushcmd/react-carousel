const images = [car1, car2, car3, car4, car5];

const carousel = () => {
  const settings = {
    dots: false,
    inifinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };

  const renderImages = () =>
    images.map((image, index) => <CarouselItem key={index} image={image} />);

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full'>
        <Slider {...settings}>{renderImages()}</Slider>
      </div>
    </div>
  );
};

export default carousel;

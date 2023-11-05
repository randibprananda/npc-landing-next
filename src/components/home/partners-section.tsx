'use client';

import Slider from 'react-slick';

import HeadingText from '@/components/ui/heading-text';

const PartnersSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };

  return (
    <div className="w-full bg-white">
      <div className="py-[24px] xl:py-[70px] md:px-[84px] w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center">
        <HeadingText>Our Partners</HeadingText>
        <Slider
          className="w-full items-center flex overflow-hidden"
          {...settings}
        >
          <div>
            <img
              src="/companies/logo-konect.png"
              alt="Konect"
              className="max-h-[52px] md:max-h-[151px]"
            />
          </div>
          <div>
            <img
              src="/companies/logo-bayan-resources.png"
              alt="Bayan Resources"
              className="max-h-[52px] md:max-h-[151px]"
            />
          </div>
          <div>
            <img
              src="/companies/logo-bayan-peduli.png"
              alt="Bayan Peduli"
              className="max-h-[52px] md:max-h-[151px]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PartnersSection;

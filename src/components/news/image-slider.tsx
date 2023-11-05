'use client';

import moment from 'moment';
import { useEffect, useState } from 'react';

import { CardImageSlider } from '@/components/news/card-image-slider';
import { useGetTopNews } from '@/hooks/fetch/news/useGetTopNews';

interface ImageSliderProps {}

const ImageSlider: React.FC<ImageSliderProps> = () => {
  const [mounted, setMounted] = useState(false);
  const { data: dataGetTopNews } = useGetTopNews();

  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleCardClick = (image: string) => {
    setSelectedImage(process.env.NEXT_PUBLIC_API_IMAGE + image);
  };

  useEffect(() => {
    if (dataGetTopNews !== undefined) {
      setSelectedImage(
        process.env.NEXT_PUBLIC_API_IMAGE + dataGetTopNews[0].image
      );
    }
  }, [dataGetTopNews]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!dataGetTopNews) {
    return null;
  }

  return (
    <div className="max-w-[1440px] space-y-2 w-full flex-col xl:flex-row flex mx-auto bg-hitam-100 rounded-[8px]">
      <div
        className="w-full xl:w-[1076px] h-[233px] xl:h-[497px] rounded-[8px] p-[15px] relative flex flex-col justify-end bg-center bg-cover"
        style={{ backgroundImage: `url('${selectedImage}')` }}
      >
        <div className="rounded-[8px] px-[10px] xl:px-[42px] py-2 xl:py-[28px] backdrop-blur-2xl bg-hitam-300/20 text-white">
          <h1 className="text-[14px] xl:text-[28px] font-[700]">
            {dataGetTopNews[0].title}
          </h1>
          <div className="text-[8px] xl:text-[16px] flex gap-x-[8px] items-center">
            <h4 className="font-[400]">
              {moment(dataGetTopNews[0].date).format('DD MMM YYYY')}
            </h4>
            <span className="w-1 h-1 xl:w-[6px] xl:h-[6px] rounded-full bg-white self-center" />
            <h4 className="font-[500]">
              {dataGetTopNews[0].news_type.name_sport}
            </h4>
          </div>
        </div>
      </div>
      <div className=" gap-x-3 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-1 pb-2">
        {dataGetTopNews.map((data: any, index: number) => {
          return (
            <CardImageSlider
              onClick={handleCardClick}
              data={data}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;

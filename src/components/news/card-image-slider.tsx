import moment from 'moment';

interface CardImageSliderProps {
  onClick: (image: string) => void;
  data: any;
}

export const CardImageSlider: React.FC<CardImageSliderProps> = ({
  onClick,
  data
}) => {
  return (
    <div
      className="my-1 p-[5px] bg-center xl:p-2 rounded-[8px] bg-cover md:mx-[18px] relative overflow-hidden w-full xl:w-[228px] h-[83px] xl:h-[113px] cursor-pointer"
      style={{
        backgroundImage: `url('${
          process.env.NEXT_PUBLIC_API_IMAGE + data.image
        }')` // Use a relative path
      }}
      onClick={() => onClick(data.image)} // Use an absolute path within the `public` directory
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-black/70 to-transparent z-0" />
      <div className="relative z-10 flex flex-col w-full h-full justify-end">
        <div className="flex justify-end flex-col w-full h-full p-2">
          <h1 className="text-[10px] xl:text-[14px] font-[700] line-clamp-1 text-white">
            {data.title}
          </h1>
          <div className="text-[6px] xl:text-[10px] flex gap-x-[8px] items-center">
            <h4 className="font-[400] text-white">
              {moment(data.date).format('DD MMM YYYY')}
            </h4>
            <span className="w-1 h-1 rounded-full bg-white self-center" />
            <h4 className="font-[500] text-white">
              {data.news_type.name_sport}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

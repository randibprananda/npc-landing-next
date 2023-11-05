import moment from 'moment';
import Link from 'next/link';
import { FC } from 'react';

interface SportCardTwoProps {
  link: string;
  title?: string;
  date?: string;
  image: string;
  newsType?: string;
}

const SportCardTwo: FC<SportCardTwoProps> = ({
  link,
  title,
  date,
  image,
  newsType
}) => {
  return (
    <Link href={link}>
      <div className="w-[169px] xl:w-[417px] border border-hitam-100 shadow-md overflow-hidden rounded-[9px] font-poppins">
        <img
          src={process.env.NEXT_PUBLIC_API_IMAGE + image}
          alt="news"
          width={417}
          height={324}
          className="w-[169px] h-[132px] xl:w-[417px] xl:h-[324px] object-cover"
        />
        <div className="p-2 xl:p-[25px]">
          <h1 className="text-[11px] xl:text-[24px] font-[700] leading-4 line-clamp-3 xl:leading-[31px] text-hitam-700 w-full">
            {title}
          </h1>
          <span className="flex items-center gap-x-[20px] mt-[16px]">
            <h2 className="text-[8px] xl:text-[16px] font-[400]">
              {moment(date).format('DD MMM YYYY')}
            </h2>
            <h2 className="text-[8px] xl:text-[16px] font-[500]">{newsType}</h2>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SportCardTwo;

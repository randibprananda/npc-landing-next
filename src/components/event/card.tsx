import moment from 'moment';
import { FC } from 'react';

import { cn, fontAhrefs400 } from '@/lib/utils';

interface CardEventProps {
  variant: 'biru' | 'hijau';
  image: string;
  title: string;
  subtitle: string;
  opening: string;
  closing: string;
}

const CardEvent: FC<CardEventProps> = ({
  variant,
  image,
  title,
  subtitle,
  opening,
  closing
}) => {
  return (
    <div className="w-[343px] xl:w-[419px] rounded-[16px] overflow-hidden flex flex-col justify-between shadow-md border border-hitam-100">
      <div
        className={cn(
          'flex gap-x-[36px] px-[25px] xl:px-[38px] py-[16px] xl:py-[22px] items-center',
          fontAhrefs400.className
        )}
      >
        <img src={image} alt={title} className="h-[102px] xl:h-[123px]" />
        <div className="gap-y-[12px] xl:gap-y-[16px] h-full flex flex-col justify-center">
          <h4 className="font-[400] text-[20px] xl:text-[24px] leading-6 xl:leading-8">
            {title}
          </h4>
          <h5 className="font-[400] text-[16px] xl:text-[20px] text-hitam-700">
            {subtitle}
          </h5>
        </div>
      </div>
      <div
        className={cn(
          'text-white w-full px-[44px] flex gap-x-[10px] py-[12px] text-[14px] xl:text-[16px]',
          {
            'bg-gradient-to-r from-biru-800 to-biru-500': variant === 'biru',
            'bg-gradient-to-r from-hijau-800 to-hijau-500': variant === 'hijau'
          }
        )}
      >
        <span className="w-[80px]">
          <h3 className="italic">Opening</h3>
          <h3 className="italic">Closing</h3>
        </span>
        <span>
          <h4>{moment(opening).format('DD MMM YYYY')}</h4>
          <h4>{moment(closing).format('DD MMM YYYY')}</h4>
        </span>
      </div>
    </div>
  );
};

export default CardEvent;

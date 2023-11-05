import Link from 'next/link';
import { FC } from 'react';

interface SportCardProps {
  image: string;
  name: string;
  className?: string;
  id: string;
}

const SportCardOne: FC<SportCardProps> = ({ name, image, className, id }) => {
  return (
    <Link
      href={`/sport/${id}`}
      className="flex flex-col h-fit w-fit gap-y-[16px] justify-center"
    >
      <img
        height={270}
        width={270}
        alt={name}
        src={image ? image : './logo-npci.png'}
        className="rounded-[16px] h-[139px] xl:h-[270px] w-[139px] xl:w-[270px] object-cover"
      />
      <h3 className="text-center font-[500] max-w-[139px] xl:max-w-[270px] text-[16px] xl:text-[24px]">
        {name}
      </h3>
    </Link>
  );
};

export default SportCardOne;

import Link from 'next/link';
import { FC } from 'react';

interface AthleteProfileProps {
  src: string;
  name: string;
  url: string;
}

const AthleteProfile: FC<AthleteProfileProps> = ({ src, name, url }) => {
  return (
    <Link
      href={url}
      className="flex items-center justify-center flex-col gap-y-[16px]"
    >
      <img
        src={src}
        alt="Athlete"
        width={188}
        height={188}
        className="w-[98px] h-[98px] xl:w-[188px] xl:h-[188px] rounded-full object-cover shadow-md border-hitam-100 border"
      />
      <h3 className="font-[500] text-[10px] xl:text-[20px]">{name}</h3>
    </Link>
  );
};

export default AthleteProfile;

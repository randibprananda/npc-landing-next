import { FC } from 'react'; // Import React and FC from react

import AthleteProfile from '@/components/athletes/profile';
import { cn, fontAhrefs400 } from '@/lib/utils';

interface AthletesSectionProps {
  category: string;
  datas: any[];
}

const AthletesSection: FC<AthletesSectionProps> = ({ category, datas }) => {
  return (
    <section>
      <span
        className={cn(
          'px-[12px] xl:px-[24px] text-[14px] xl:text-[32px] font-[400] py-2 xl:py-[12px] rounded-[8px] bg-hijau-50 text-hijau-800',
          fontAhrefs400.className
        )}
      >
        {category}
      </span>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 border-b border-hitam-100 gap-y-[36px] py-[36px]">
        {datas &&
          datas.length > 0 &&
          datas.map((data: any) => (
            <AthleteProfile
              key={data?.id}
              name={data?.athletes_name}
              src={
                data.image
                  ? process.env.NEXT_PUBLIC_API_IMAGE + data?.image
                  : './logo-npci.png'
              }
              url={`athletes/${data.id}`}
            />
          ))}
      </div>
    </section>
  );
};

export default AthletesSection;

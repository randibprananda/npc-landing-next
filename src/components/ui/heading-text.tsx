import { FC, ReactNode } from 'react';

import { cn, fontAhrefs400 } from '@/lib/utils';

interface HeadingTextProps {
  children: ReactNode;
}

const HeadingText: FC<HeadingTextProps> = ({ children }) => {
  return (
    <div className="w-fit flex flex-col mb-5 xl:mb-[40px] relative">
      <h2
        className={cn(
          'text-merah-500 text-[20px] md:text-[38px] xl:text-[64px] font-[400]',
          fontAhrefs400.className
        )}
      >
        {children}
      </h2>
      <div className="bg-biru-600 w-full h-[2px] md:h-[4px] xl:h-[8px] absolute bottom-[4px] xl:bottom-[10px]"></div>
    </div>
  );
};

export default HeadingText;

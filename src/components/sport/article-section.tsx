import { FC } from 'react';

import { cn, fontAhrefs400 } from '@/lib/utils';

interface ArticleSectionProps {
  headText: string;
  content: string;
}

const ArticleSection: FC<ArticleSectionProps> = ({ headText, content }) => {
  return (
    <section
      className={cn(
        'font-[400] gap-y-4 flex flex-col',
        fontAhrefs400.className
      )}
    >
      <h1 className="text-[16px] md:text-[22px] xl:text-[40px]">{headText}</h1>
      <p className="text-[12px] md:text-[16px] xl:text-[24px] font-helveticaNeue">
        {content}
      </p>
    </section>
  );
};

export default ArticleSection;

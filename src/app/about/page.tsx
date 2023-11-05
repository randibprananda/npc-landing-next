'use client';
import HeadingText from '@/components/ui/heading-text';
import { useGetHeader } from '@/hooks/fetch/header/useGetHeader';

export default function About() {
  const { data: dataHeader, isLoading: isLoadingHeader } = useGetHeader();

  return (
    <div className="pt-[86px] pb-[82px] px-[51px]">
      <HeadingText>About NPC</HeadingText>
      <div className="w-full text-justify text-black text-2xl font-light">
        <div
          className="text-black text-2xl font-light"
          dangerouslySetInnerHTML={{
            __html: dataHeader?.about
          }}
        ></div>
      </div>
    </div>
  );
}

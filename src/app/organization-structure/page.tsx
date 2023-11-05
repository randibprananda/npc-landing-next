'use client';
import HeadingText from '@/components/ui/heading-text';
import { useGetHeader } from '@/hooks/fetch/header/useGetHeader';

export default function OrganizationStructure() {
  const { data: dataHeader, isLoading: isLoadingHeader } = useGetHeader();

  return (
    <div className="pt-[86px] pb-[82px] px-[51px]">
      <HeadingText>Organization Structure</HeadingText>
      <div className="w-full text-justify text-black text-2xl font-light">
        <div
          className="text-black text-2xl font-light"
          dangerouslySetInnerHTML={{
            __html: dataHeader?.organization_structure
          }}
        ></div>
      </div>
    </div>
  );
}

'use client';
import AchievmentSection from '@/components/home/achievement-section';
import ImageSliderHome from '@/components/home/image-slider';
import PartnersSection from '@/components/home/partners-section';
import Player from '@/components/player';
import HeadingText from '@/components/ui/heading-text';
import { useGetHeader } from '@/hooks/fetch/header/useGetHeader';
import { useState } from 'react';

const Home = () => {
  const { data: dataHeader, isLoading: isLoadingHeader } = useGetHeader();
  const [source, setSource] = useState('');

  return (
    <div className="overflow-hidden w-full">
      <div className="m-full max-w-[1440px] flex flex-col  md:mt-[34px] xl:mt-[46px] mb-[26px] md:mb-[75px] mx-auto px-[8px] lg:px-[50px] md:px-[30px]">
        <HeadingText>Popular News</HeadingText>
        <ImageSliderHome />
      </div>
      <div className="flex justify-center mb-[26px] md:mb-[46px] mt-[18px] px-2 md:px-[30px] xl:px-[50px] w-full max-w-[1440px] mx-auto">
        <Player
          url={[
            dataHeader ? dataHeader.link_video : 'https://youtu.be/n2Du9lltf5A'
          ]}
        />
      </div>
      <AchievmentSection />
      <PartnersSection />
    </div>
  );
};

export default Home;

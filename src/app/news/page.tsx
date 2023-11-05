'use client';

import ImageSlider from '@/components/news/image-slider';
import SportCardTwo from '@/components/sport/card-two';
import { useGetNews } from '@/hooks/fetch/news/useGetNews';

const NewsPage = () => {
  const { data: dataGetNews, isLoading: isLoadingDataGetNews } = useGetNews();

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="py-[29px] md:py-[56px] md:px-[30px] xl:py-[86px] px-[8px] xl:px-[50px] gap-y-[40px] w-full max-w-[1440px] mx-auto flex flex-col">
        <ImageSlider />
        <section>
          <h2 className="text-[20px] md:text-[26px] xl:text-[38px] font-[700]">
            Top Trending News
          </h2>
          <h3 className="text-[10px] md:text-[12px] xl:text-[16px] font-[400] mb-[30px]">
            The most popular news you should know to keep up with the latest
            news
          </h3>
          <div className="grid grid-cols-3 gap-x-[30px] gap-y-[30px] scrollbar-hide">
            {dataGetNews &&
              dataGetNews.length > 0 &&
              dataGetNews.map((data: any) => {
                return (
                  <SportCardTwo
                    link={`news/${data?.id}`}
                    key={data.id}
                    title={data?.title}
                    date={data?.createdAt}
                    image={data?.image}
                    newsType={data?.news_type?.name_sport}
                  />
                );
              })}
          </div>
        </section>
        {/* <section>
          <h2 className="text-[20px] md:text-[26px] xl:text-[38px] font-[700]">
            Top Trending News
          </h2>
          <h3 className="text-[10px] md:text-[12px] xl:text-[16px] font-[400] mb-[30px]">
            The most popular news you should know to keep up with the latest
            news
          </h3>
          <div className="flex overflow-scroll gap-x-[30px] scrollbar-hide">
            {dataGetNews &&
              dataGetNews.length > 0 &&
              dataGetNews.map((data: any) => {
                return (
                  <SportCardTwo
                    link={`news/${data?.id}`}
                    key={data.id}
                    title={data?.title}
                    date={data?.createdAt}
                    image={data?.image}
                    newsType={data?.news_type?.name_sport}
                  />
                );
              })}
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default NewsPage;

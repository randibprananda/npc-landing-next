'use client';

import moment from 'moment';
import { useParams } from 'next/navigation';

import SportCardTwo from '@/components/sport/card-two';
import { useGetNewsDetailById } from '@/hooks/fetch/news/useGetNewsDetailBydId';

const DetailNewsPage = () => {
  const { id } = useParams();
  const { data: newsData, isLoading: isLoadingNewsData } =
    useGetNewsDetailById(id);

  return (
    <div className="w-full bg-white">
      <div className="py-[29px] xl:py-[86px] gap-y-5 xl:gap-y-[60px] px-2 xl:px-[70px] w-full max-w-[1440px] mx-auto flex flex-col">
        <section className="flex flex-col gap-y-[12px] xl:gap-y-[28px]">
          <h1 className="font-poppins font-[700] text-[20px] xl:text-[40px]">
            {newsData?.data?.title}
          </h1>
          <span className="flex gap-5 items-center text-[12px] xl:text-[20px]">
            <h3 className="font-[400]">
              {moment(newsData?.data?.date).format('DD MMM YYYY')}
            </h3>
            <div className="rounded-full w-[6px] h-[6px] bg-hitam-400 block xl:hidden" />
            <h3 className="font-[500]">
              {newsData?.data?.news_type?.name_sport}
            </h3>
          </span>
          <img
            src={process.env.NEXT_PUBLIC_API_IMAGE + newsData?.data?.image}
            alt="news"
            width={1300}
            height={624}
            className="w-auto xl:w-[1300px] h-[165px] xl:h-[624px] object-cover"
          />
          <p
            className="font-poppins text-black font-[400] text-justify text-[12px] xl:text-[24px]"
            dangerouslySetInnerHTML={{
              __html: newsData?.data?.description
            }}
          ></p>
        </section>
        <section>
          <div className="text-hitam-700 w-full justify-between flex items-center">
            <span>
              <h2 className="font-[700] text-[20px] xl:text-[38px]">
                Related News
              </h2>
              <h3 className="font-[400] text-[10px] xl:text-[16px]">
                The most popular news you should know to keep up with the latest
                news
              </h3>
            </span>
            {/* <Link
              href="#"
              className="items-center gap-x-3 font-[500] text-[20px] hidden xl:flex"
            >
              Show More
              <BsArrowRight />
            </Link> */}
          </div>
          <div className="w-full flex scrollbar-hide overflow-x-scroll gap-x-[21px] mt-5">
            {newsData?.related_news.map((data: any) => {
              return (
                <SportCardTwo
                  key={data?.id}
                  link={`/news/${data?.id}`}
                  image={data?.image}
                  title={data?.title}
                  date={data?.date}
                  newsType={newsData?.data?.news_type?.name_sport}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailNewsPage;

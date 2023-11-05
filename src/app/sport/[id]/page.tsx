'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Player from '@/components/player';
import SportCardTwo from '@/components/sport/card-two';
import RenderIf from '@/lib/render-if';
import { cn, fontAhrefs400 } from '@/lib/utils';

import { useGetNewsBySportId } from '../../../hooks/fetch/news/useGetNewsBySportId';
import { useGetDetailSport } from '../../../hooks/fetch/sport/useGetDetailSport';

const SportCategoryPage = () => {
  const { id } = useParams();
  const [urlVideo, setUrlVideo] = useState<string[]>([]);

  const { data: dataGetDetailSport } = useGetDetailSport(id);
  const { data: dataNewsBySportId } = useGetNewsBySportId(id);

  useEffect(() => {
    if (dataGetDetailSport !== undefined && dataGetDetailSport.video) {
      dataGetDetailSport.video.forEach((video: any) => {
        urlVideo.push(video.link);
      });
    }
  }, [dataGetDetailSport]);

  if (!dataGetDetailSport && !dataNewsBySportId) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-[45px] relative">
      <section
        className="h-[144px] xl:h-[345px] w-full bg-cover flex justify-center"
        style={{
          backgroundImage: `url(${
            process.env.NEXT_PUBLIC_API_IMAGE + dataGetDetailSport?.image
          })`,
          backgroundSize: 'cover'
        }}
      >
        <div className="w-full h-full bg-black/40 z-10" />
        <div className="w-full max-w-[1440px] absolute z-30 top-0 mx-auto px-2 md:px-[30px] xl:px-[50px] pt-[31px] xl:pt-[116px]">
          <h1
            className={cn(
              'text-[20px] xl:text-[64px] font-[400] text-white',
              fontAhrefs400.className
            )}
          >
            {dataGetDetailSport?.name_sport}
          </h1>
          <div className="flex flex-col xl:flex-row xl:gap-x-[80px] max-xl:gap-y-2">
            <div className="px-2 xl:px-[20px] py-[6px] xl:py-[24.5px] font-[400] flex items-center gap-x-[28px] xl:gap-x-[89px] bg-white w-[198px] md:w-[280px] xl:w-[502px]">
              <h3 className="text-[9px] md:text-[12px] xl:text-[16px] w-1/3">
                Olympic Debut
              </h3>
              <h3
                className={cn(
                  'text-[9px] xl:text-[20px]',
                  fontAhrefs400.className
                )}
              >
                {dataGetDetailSport?.first_debut}
              </h3>
            </div>
            <div className="px-2 xl:px-[20px] py-[6px] xl:py-[24.5px] font-[400] flex items-center gap-x-[28px] xl:gap-x-[89px] bg-white w-[198px] md:w-[280px] xl:w-[502px]">
              <h3 className="text-[9px] md:text-[12px] xl:text-[16px] w-1/3 ">
                Most Medals
              </h3>
              <h3
                className={cn(
                  'text-[9px] xl:text-[20px]',
                  fontAhrefs400.className
                )}
              >
                {dataGetDetailSport?.most_medal}
              </h3>
            </div>
          </div>
          <div className="px-[20px] py-[24.5px]"></div>
        </div>
      </section>
      <section className="px-2 md:px-[30px] xl:px-[50px] w-full max-w-[1440px] mx-auto flex flex-col">
        <div className="flex xl:gap-x-[93px] max-xl:gap-y-4 flex-col xl:flex-row">
          <h1
            className={cn(
              'text-[20px] md:text-[32px] xl:text-[64px] font-[400] xl:max-w-[307px]',
              fontAhrefs400.className
            )}
          >
            History of {dataGetDetailSport?.name_sport}
          </h1>
          <div
            className="w-full overflow-x-scroll scrollbar-hide flex flex-col gap-y-[32px]"
            dangerouslySetInnerHTML={{ __html: dataGetDetailSport?.history }}
          ></div>
        </div>
      </section>
      <RenderIf isTrue={dataNewsBySportId?.news.length > 0}>
        <section className="px-2 md:px-[30px] xl:px-[50px] w-full max-w-[1440px] mx-auto flex flex-col">
          <div className="flex xl:gap-x-[93px] max-xl:gap-y-4 flex-col xl:flex-row">
            <h1
              className={cn(
                'text-[20px] xl:text-[64px] font-[400] max-w-[307px]',
                fontAhrefs400.className
              )}
            >
              {dataGetDetailSport?.name_sport} News
            </h1>
            <div className="w-full overflow-x-scroll scrollbar-hide flex gap-x-[42px]">
              {dataNewsBySportId &&
                dataNewsBySportId?.news.length > 0 &&
                dataNewsBySportId?.news.map((data: any) => {
                  return (
                    <SportCardTwo
                      link={`/news/${data?.id}`}
                      key={data?.id}
                      title={data?.title}
                      date={data?.createdAt}
                      image={data.image ? data?.image : './logo-npci.png'}
                      newsType={dataGetDetailSport?.name_sport}
                    />
                  );
                })}
            </div>
          </div>
        </section>
      </RenderIf>
      <section className="px-2 md:px-[30px] xl:px-[50px] w-full max-w-[1440px] mx-auto flex flex-col">
        <h1
          className={cn(
            'text-[20px] xl:text-[64px] font-[400] max-w-[307px]',
            fontAhrefs400.className
          )}
        >
          Video You Might Like
        </h1>
        <RenderIf isTrue={dataGetDetailSport !== undefined}>
          <div className="flex justify-center mb-[46px] mt-[18px]">
            <Player url={urlVideo} control={true} />
          </div>
        </RenderIf>
      </section>
    </div>
  );
};

export default SportCategoryPage;

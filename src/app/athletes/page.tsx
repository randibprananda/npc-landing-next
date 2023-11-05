'use client';

import { useState } from 'react';

import AthletesSection from '@/components/athletes/section';
import HeadingText from '@/components/ui/heading-text';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useGetAthletes } from '@/hooks/fetch/athletes/useGetAthletes';

const AthletesPage = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const { data: dataOption, isLoading: isLoadingDataOption } =
    useGetAthletes('');
  const { data: dataGetAthletes, isLoading: isLoadingGetAthletes } =
    useGetAthletes(activeCategory);

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="py-[29px] md:py-[56px] md:px-[30px] xl:py-[86px] px-[8px] xl:px-[50px] w-full max-w-[1440px] mx-auto flex flex-col space-y-[38px] xl:space-y-[60px]">
        <div className="w-full justify-between md:items-center flex flex-row max-md:flex-col">
          <HeadingText>Paralympic Athletes</HeadingText>
          <Select onValueChange={e => setActiveCategory(e)}>
            <SelectTrigger className="w-fit md:w-[245px] xl:w-[345px] lg:px-5 lg:py-4 px-3 py-1 rounded-[8px] lg:text-[24px] max-md:text-[10px]">
              <SelectValue placeholder="Select Athletes Category" />
            </SelectTrigger>
            <SelectContent>
              {!isLoadingDataOption &&
                dataOption.length > 0 &&
                dataOption.map((category: any, index: number) => {
                  return (
                    <SelectItem
                      value={category?.name_sport}
                      key={index}
                      onChange={e => console.log('data', e)}
                    >
                      {category?.name_sport}
                    </SelectItem>
                  );
                })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-y-[56px]">
          {!isLoadingGetAthletes &&
            dataGetAthletes.length > 0 &&
            dataGetAthletes.map((data: any, index: number) => {
              return (
                <AthletesSection
                  key={index}
                  category={data?.name_sport}
                  datas={data?.data}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AthletesPage;

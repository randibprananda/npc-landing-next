'use client';

import moment from 'moment';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const EventCountdown = ({ eventCountDown }: { eventCountDown: any }) => {
  const targetTime = moment(eventCountDown);
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  const daysRemaining = Math.ceil(timeBetween.asDays());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-[100px] xl:w-[130px] flex flex-col">
      <div
        className={cn(
          'font-helveticaNeue font-[700] space-x-2 w-full text-[14px] xl:text-[24px] flex justify-between'
        )}
      >
        <span>{daysRemaining}</span>
        <span>:</span>
        <span>{timeBetween.hours()}</span>
        <span>:</span>
        <span>{timeBetween.minutes()}</span>
        <span>:</span>
        <span>{timeBetween.seconds()}</span>
      </div>
      <p className="flex font-[400] text-[10px] xl:text-[14px]">
        <span>Days</span>
        <span className="ml-2 xl:ml-3">Hrs</span>
        <span className="ml-[18px] xl:ml-[24px]">Min</span>
        <span className="ml-[18px] xl:ml-5">Sec</span>
      </p>
    </div>
  );
};

export default EventCountdown;

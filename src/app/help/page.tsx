'use client';
import HeadingText from '@/components/ui/heading-text';
import { useGetHeader } from '@/hooks/fetch/header/useGetHeader';
import React from 'react';

export default function Help() {
  const { data: dataHeader, isLoading: isLoadingHeader } = useGetHeader();

  return (
    <div className="pt-[86px] pb-[82px] px-[51px]">
      <HeadingText>Help</HeadingText>
      <h1 className="text-black text-[32px] font-medium text-center mb-[35px]">
        How can we help you?
      </h1>
      <div className="flex items-center justify-between gap-[20px]">
        <div className="w-full bg-white rounded-[20px]  shadow pt-[25px] pb-[44px]">
          <div className="flex items-center justify-center mb-[20px] px-[205px]">
            <img className="" src="./send-email.png" alt="send-email" />
          </div>
          <h1 className="text-center mb-[30px] font-medium text-[16px]">
            {' '}
            &quot;Write down your message or enquiry and send it to our email.
            &quot;
          </h1>
          <div className="flex items-center justify-center z-50">
            <button
              onClick={() =>
                (window.location.href = `mailto:${dataHeader?.email}?subject=${''}&body=${''}`)
              }
              className="px-[23px] py-[11px] bg-[#EE393E] text-white text-[14px] rounded-lg"
            >
              Send Email
            </button>
          </div>
        </div>

        <div className="w-full bg-white rounded-[20px] shadow pt-[25px] pb-[44px]">
          <div className="flex items-center justify-center mb-[20px] px-[205px]">
            <img className="" src="./send-message.png" alt="send-messae" />
          </div>
          <h1 className="text-center mb-[30px] font-medium text-[16px]">
            {' '}
            &quot;Write down your message or enquiry and send it to our
            whatsaap. &quot;
          </h1>
          <div className="flex items-center justify-center z-50">
            <button
              onClick={() =>
                (window.location.href = `https://wa.me/${dataHeader?.whatsapp}`)
              }
              className="px-[23px] py-[11px] bg-[#008638] text-white text-[14px] rounded-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

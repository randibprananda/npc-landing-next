'use client';

import { useEffect, useState } from 'react';
import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';

import RenderIf from '@/lib/render-if';

const Footer = () => {
  const isDekstop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 1223px)' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <RenderIf isTrue={isMobile}>
        <footer>
          <section className="bg-hitam-50 w-full">
            <div className="py-[16px] px-[26px] w-full mx-auto flex flex-col space-y-3">
              <img
                src="/logo-npci.png"
                alt="Logo NPCI"
                width={147}
                height={95}
              />
              <span className="flex flex-col text-[14px]">
                <h2 className="font-[700]">
                  OFFICIAL WEBSITE OF THE PARALYMPIC MOVEMENT
                </h2>
                <h3 className="font-[500] text-hitam-600">
                  National Paralympic Committee of Indonesia
                </h3>
              </span>
              <h4 className="font-[400] text-[12px] text-hitam-400">
                Komite Paralimpiade Nasional Indonesia adalah organisasi pembina
                atlet penyandang disabilitas di Indonesia
              </h4>
              <div className="w-full h-[1px] bg-hitam-400" />
              <div className="flex flex-col gap-y-[8px] text-[10px] font-[500]">
                <div className="flex gap-x-[16px] items-center">
                  <FaLocationDot size={10} />
                  Jl. Ir Sutami 86 Surakarta, Indonesia
                </div>
                <div className="flex gap-x-[16px] items-center">
                  <FaPhoneVolume size={10} />
                  (+62) 271 636486
                </div>
                <div className="flex gap-x-[16px] items-center">
                  <HiMail size={10} />
                  npcindonesia@gmail.com
                </div>
              </div>
            </div>
          </section>
          <section className="bg-hitam-900 w-full">
            <div className="text-white text-center py-[12px] w-full mx-auto text-[10px]">
              © Copyright 2023. National Paralympic
            </div>
          </section>
        </footer>
      </RenderIf>
      <RenderIf isTrue={isDekstop}>
        <footer>
          <section className="bg-hitam-50 w-full">
            <div className="py-[62px] px-[116px] w-full max-w-[1440px] mx-auto flex items-center justify-between">
              <img
                src="/logo-npci.png"
                alt="Logo NPCI"
                width={276}
                height={179}
              />
              <div className="gap-y-[12px] w-full max-w-[432px]">
                <span className="flex flex-col text-[20px]">
                  <h2 className="font-[700] text-[20px]">
                    OFFICIAL WEBSITE OF THE PARALYMPIC MOVEMENT
                  </h2>
                  <h3 className="font-[500] text-hitam-600 text-[20px]">
                    National Paralympic Committee of Indonesia
                  </h3>
                </span>
                <h4 className="font-[400] text-[18px] text-hitam-400 mt-2">
                  Komite Paralimpiade Nasional Indonesia adalah organisasi
                  pembina atlet penyandang disabilitas di Indonesia
                </h4>
              </div>
              <div className="flex flex-col gap-y-[40px] text-[16px] font-[500]">
                <div className="flex gap-x-[16px] items-center">
                  <FaLocationDot size={24} />
                  Jl. Ir Sutami 86 Surakarta, Indonesia
                </div>
                <div className="flex gap-x-[16px] items-center">
                  <FaPhoneVolume size={24} />
                  (+62) 271 636486
                </div>
                <div className="flex gap-x-[16px] items-center">
                  <HiMail size={24} />
                  npcindonesia@gmail.com
                </div>
              </div>
            </div>
          </section>
          <section className="bg-hitam-900 w-full">
            <div className="text-white text-center py-[28px] w-full max-w-[1440px] mx-auto text-[16px]">
              © Copyright 2023. National Paralympic
            </div>
          </section>
        </footer>
      </RenderIf>
    </>
  );
};

export default Footer;

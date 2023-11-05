import { clsx, type ClassValue } from 'clsx';
import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isDevMode() {
  let inDevEnvironment = false;

  if (process && process.env.NODE_ENV === 'development') {
    inDevEnvironment = true;
  }

  return inDevEnvironment;
}

export function isMaintenance() {
  let inMaintenance = false;

  if (process && process.env.MAINTENANCE === 'on') {
    inMaintenance = true;
  }

  return inMaintenance;
}

export const fontAhrefs400 = localFont({
  src: '../../public/fonts/ahrefs/ahrefs-400.ttf',
  weight: '400',
  variable: '--ahrefs-font'
});

export function convertToSlug(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

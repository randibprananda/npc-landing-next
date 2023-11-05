'use client';

import { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

interface PlayerProps {
  url: string[];
  control?: boolean;
}

const Player: FC<PlayerProps> = ({ url, control = false }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-[168.8px] md:h-[336px] xl:h-[657px] w-full rounded-[4px] md:rounded-[12px] xl:rounded-[20px] overflow-hidden">
      <ReactPlayer
        url={url}
        playing={true}
        width="100%"
        height="100%"
        controls={true}
        autoplay={true}
      />
    </div>
  );
};

export default Player;

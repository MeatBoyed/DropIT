import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

interface Props {
  viewerImages: string[];
}

export const ImageViewer: React.FC<Props> = ({ viewerImages }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const items: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>[] = [];

  useEffect(() => {
    if (activeIndex >= viewerImages.length - 1) return setActiveIndex(viewerImages.length - 1);
    if (activeIndex < 0) return setActiveIndex(0);
  }, [activeIndex]);

  useEffect(() => {
    viewerImages.map((viewerImage) => {
      items.push(<img src={viewerImage} alt="" />);
    });
  });

  return (
    <div className="ItemDisplaySection">
      <AliceCarousel disableButtonsControls disableDotsControls activeIndex={activeIndex} items={items} />
      <div className="controlButtonContainers">
        <button className="controlBtn" onClick={() => setActiveIndex(activeIndex - 1)}>
          Prev
        </button>
        <button className="controlBtn" onClick={() => setActiveIndex(activeIndex + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

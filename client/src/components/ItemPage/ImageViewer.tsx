import React from 'react';

interface Props {
  viewerImages: string[];
}

export const ImageViewer: React.FC<Props> = ({ viewerImages }) => {
  return (
    <div className="ItemDisplaySection">
      <img src={viewerImages[0]} alt="" />
    </div>
  );
};

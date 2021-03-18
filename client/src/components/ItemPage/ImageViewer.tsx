import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

interface Props {
  viewerImages: string[];
}

export const ImageViewer: React.FC<Props> = ({ viewerImages }) => {
  return (
    <div className="ItemDisplaySection">
      <AwesomeSlider>
        {viewerImages.map((imageUrl, index) => (
          <div key={index} data-src={imageUrl} />
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default ImageViewer;

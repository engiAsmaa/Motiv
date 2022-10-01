import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

function BeatLoaderComponent() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <BeatLoader sizeUnit="px" size={15} loading color="#A162F7" />
    </div>
  );
}

export default BeatLoaderComponent;

import React from 'react';
import DotLoader from 'react-spinners/DotLoader';

function DotLoaderComponent() {
  return (
    <div>
      <DotLoader sizeUnit="px" size={20} color="#007BFF" loading />
    </div>
  );
}

export default DotLoaderComponent;

import React from 'react';

interface DimensionSelectorProps {
  selectedDimension: 'width' | 'height' | 'depth';
  onChange: (dimension: 'width' | 'height' | 'depth') => void;
}

const DimensionSelector: React.FC<DimensionSelectorProps> = ({ 
  selectedDimension, 
  onChange 
}) => {
  return (
    <div className="inline-flex rounded-md shadow-sm mt-2 mb-4">
      <button
        type="button"
        className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-medium focus:z-10 ${
          selectedDimension === 'width'
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
        onClick={() => onChange('width')}
      >
        幅
      </button>
      <button
        type="button"
        className={`relative -ml-px inline-flex items-center px-3 py-2 text-sm font-medium focus:z-10 ${
          selectedDimension === 'height'
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
        onClick={() => onChange('height')}
      >
        高さ
      </button>
      <button
        type="button"
        className={`relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-medium focus:z-10 ${
          selectedDimension === 'depth'
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
        onClick={() => onChange('depth')}
      >
        奥行き
      </button>
    </div>
  );
};

export default DimensionSelector;
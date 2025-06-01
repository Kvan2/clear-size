import React from 'react';
import { ReferenceItem } from '../types';
import { formatDimension } from '../utils/sizeUtils';

interface ReferenceItemCardProps {
  item: ReferenceItem;
  onClick?: (item: ReferenceItem) => void;
  isSelected?: boolean;
}

const ReferenceItemCard: React.FC<ReferenceItemCardProps> = ({ 
  item, 
  onClick,
  isSelected = false
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <div 
      className={`
        relative overflow-hidden rounded-lg shadow-sm border 
        transition-all duration-200 hover:shadow-md cursor-pointer
        ${isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}
      `}
      onClick={handleClick}
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        {item.imageUrl ? (
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400 text-sm">画像なし</span>
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900 truncate">{item.name}</h3>
        <div className="mt-1 flex flex-wrap gap-1">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
            幅: {formatDimension(item.dimensions.width, item.unit)}
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
            高さ: {formatDimension(item.dimensions.height, item.unit)}
          </span>
          {item.dimensions.depth && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
              奥行: {formatDimension(item.dimensions.depth, item.unit)}
            </span>
          )}
        </div>
        <div className="mt-1">
          <span className="text-xs text-gray-500">{item.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ReferenceItemCard;
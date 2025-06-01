import React, { useState, useEffect } from 'react';
import { ReferenceItem, ComparisonResult } from '../types';
import { compareItems, getComparisonText } from '../utils/sizeUtils';

interface SizeComparisonVisualizerProps {
  targetItem: ReferenceItem;
  referenceItem: ReferenceItem;
  dimension: 'width' | 'height' | 'depth';
}

const SizeComparisonVisualizer: React.FC<SizeComparisonVisualizerProps> = ({
  targetItem,
  referenceItem,
  dimension
}) => {
  const [comparison, setComparison] = useState<ComparisonResult | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (targetItem && referenceItem) {
      setComparison(compareItems(targetItem, referenceItem, dimension));
      setShowAnimation(false);
      // Trigger animation after a small delay
      setTimeout(() => setShowAnimation(true), 50);
    }
  }, [targetItem, referenceItem, dimension]);

  if (!comparison) {
    return <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg">
      <p className="text-gray-400">アイテムを選択してください</p>
    </div>;
  }

  const { multiplier } = comparison;
  
  // Calculate relative sizes for visualization
  const targetSize = targetItem.dimensions[dimension];
  const referenceSize = referenceItem.dimensions[dimension];
  
  // For visualization purposes
  const maxWidth = 100; // percentage
  const targetWidth = maxWidth;
  const referenceWidth = multiplier > 0 ? (maxWidth / multiplier) : (referenceSize / targetSize) * maxWidth;
  
  // Ensure the reference item is visible even when very small compared to target
  const minReferenceWidth = 10; // minimum percentage width for visibility
  const adjustedReferenceWidth = Math.max(referenceWidth, minReferenceWidth);
  
  return (
    <div className="bg-white rounded-lg shadow p-6 my-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">サイズ比較</h3>
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">
          {getComparisonText(comparison, dimension)}
        </p>
      </div>
      
      <div className="relative mb-8">
        {/* Target Item Bar */}
        <div className="w-full bg-blue-500 rounded h-16 flex items-center justify-center mb-8">
          <span className="text-white font-medium">
            {targetItem.name} ({targetItem.dimensions[dimension]}{targetItem.unit})
          </span>
        </div>
        
        {/* Reference Items */}
        <div className="flex items-center">
          {Array.from({ length: Math.max(1, multiplier) }).map((_, index) => (
            <div 
              key={index}
              className={`
                bg-teal-500 h-12 rounded flex items-center justify-center 
                ${showAnimation ? 'animate-fadeIn' : 'opacity-0'}
              `}
              style={{ 
                width: `${adjustedReferenceWidth}%`,
                marginRight: index < multiplier - 1 ? '4px' : '0',
                animationDelay: `${index * 0.1}s`,
                transition: 'opacity 0.5s ease-in-out'
              }}
            >
              {adjustedReferenceWidth > 15 && (
                <span className="text-white text-xs font-medium truncate px-1">
                  {referenceItem.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mt-2">
        <p>※ 実際の比率でスケールしています</p>
      </div>
    </div>
  );
};

export default SizeComparisonVisualizer;
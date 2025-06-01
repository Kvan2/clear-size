import React, { useState, useEffect } from 'react';
import { ReferenceItem } from '../types';
import { referenceItems } from '../data/referenceItems';
import ItemSelector from '../components/ItemSelector';
import SizeComparisonVisualizer from '../components/SizeComparisonVisualizer';
import DimensionSelector from '../components/DimensionSelector';

const ComparisonPage: React.FC = () => {
  const [targetItem, setTargetItem] = useState<ReferenceItem | null>(null);
  const [referenceItem, setReferenceItem] = useState<ReferenceItem | null>(null);
  const [selectedDimension, setSelectedDimension] = useState<'width' | 'height' | 'depth'>('width');
  const [allItems, setAllItems] = useState<ReferenceItem[]>(referenceItems);
  const [customItems, setCustomItems] = useState<ReferenceItem[]>([]);

  // Load custom items from local storage
  useEffect(() => {
    const storedItems = localStorage.getItem('customReferenceItems');
    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        setCustomItems(parsedItems);
        setAllItems([...referenceItems, ...parsedItems]);
      } catch (e) {
        console.error('Failed to parse custom items', e);
      }
    }
  }, []);

  const handleAddCustomItem = (newItem: ReferenceItem) => {
    const updatedCustomItems = [...customItems, newItem];
    setCustomItems(updatedCustomItems);
    setAllItems([...referenceItems, ...updatedCustomItems]);
    
    // Store in local storage
    localStorage.setItem('customReferenceItems', JSON.stringify(updatedCustomItems));
  };

  return (
    <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">サイズ比較ツール</h1>
      
      <p className="text-gray-600 mb-8">
        比較したい商品サイズと基準となる身近なアイテムを選択して、直感的にサイズをイメージしましょう。
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">比較したいアイテム</h2>
          <ItemSelector
            items={allItems}
            onItemSelect={setTargetItem}
            selectedItemId={targetItem?.id}
            title="比較対象を選択"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">基準となるアイテム</h2>
          <ItemSelector
            items={allItems}
            onItemSelect={setReferenceItem}
            selectedItemId={referenceItem?.id}
            title="基準アイテムを選択"
          />
        </div>
      </div>
      
      {targetItem && referenceItem && (
        <div className="mt-8">
          <DimensionSelector
            selectedDimension={selectedDimension}
            onChange={setSelectedDimension}
          />
          
          <SizeComparisonVisualizer
            targetItem={targetItem}
            referenceItem={referenceItem}
            dimension={selectedDimension}
          />
        </div>
      )}
    </div>
  );
};

export default ComparisonPage;
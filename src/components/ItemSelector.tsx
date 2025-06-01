import React, { useState, useMemo } from 'react';
import { ReferenceItem } from '../types';
import ReferenceItemCard from './ReferenceItemCard';

interface ItemSelectorProps {
  items: ReferenceItem[];
  onItemSelect: (item: ReferenceItem) => void;
  selectedItemId?: string;
  title: string;
}

const ItemSelector: React.FC<ItemSelectorProps> = ({
  items,
  onItemSelect,
  selectedItemId,
  title
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>();
    items.forEach(item => uniqueCategories.add(item.category));
    return Array.from(uniqueCategories);
  }, [items]);
  
  // Filter items
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, selectedCategory]);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <div className="mt-2">
          <div className="relative rounded-md shadow-sm">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm pl-3 pr-10 py-2 border"
              placeholder="検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              selectedCategory === '' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory('')}
          >
            すべて
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                selectedCategory === category 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 max-h-96 overflow-y-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredItems.map(item => (
            <ReferenceItemCard
              key={item.id}
              item={item}
              onClick={() => onItemSelect(item)}
              isSelected={item.id === selectedItemId}
            />
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">アイテムが見つかりませんでした</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemSelector;
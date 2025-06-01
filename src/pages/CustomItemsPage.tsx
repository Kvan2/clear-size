import React, { useState, useEffect } from 'react';
import { ReferenceItem } from '../types';
import CustomItemForm from '../components/CustomItemForm';
import ReferenceItemCard from '../components/ReferenceItemCard';

const CustomItemsPage: React.FC = () => {
  const [customItems, setCustomItems] = useState<ReferenceItem[]>([]);

  // Load custom items from local storage
  useEffect(() => {
    const storedItems = localStorage.getItem('customReferenceItems');
    if (storedItems) {
      try {
        setCustomItems(JSON.parse(storedItems));
      } catch (e) {
        console.error('Failed to parse custom items', e);
      }
    }
  }, []);

  const handleAddItem = (newItem: ReferenceItem) => {
    const updatedItems = [...customItems, newItem];
    setCustomItems(updatedItems);
    
    // Store in local storage
    localStorage.setItem('customReferenceItems', JSON.stringify(updatedItems));
  };

  const handleDeleteItem = (itemId: string) => {
    const updatedItems = customItems.filter(item => item.id !== itemId);
    setCustomItems(updatedItems);
    
    // Update local storage
    localStorage.setItem('customReferenceItems', JSON.stringify(updatedItems));
  };

  return (
    <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">カスタムアイテム</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <CustomItemForm onItemAdd={handleAddItem} />
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">登録済みカスタムアイテム</h2>
            
            {customItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {customItems.map(item => (
                  <div key={item.id} className="relative">
                    <ReferenceItemCard item={item} />
                    <button
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500">カスタムアイテムがまだ登録されていません</p>
                <p className="text-gray-400 text-sm mt-1">左のフォームからアイテムを追加できます</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomItemsPage;
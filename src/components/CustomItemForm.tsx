import React, { useState } from 'react';
import { ReferenceItem } from '../types';

interface CustomItemFormProps {
  onItemAdd: (item: ReferenceItem) => void;
}

const CustomItemForm: React.FC<CustomItemFormProps> = ({ onItemAdd }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [depth, setDepth] = useState('');
  const [unit, setUnit] = useState<'mm' | 'cm' | 'm'>('cm');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) newErrors.name = '名前を入力してください';
    if (!category.trim()) newErrors.category = 'カテゴリを入力してください';
    if (!width.trim() || isNaN(Number(width))) newErrors.width = '正しい幅を入力してください';
    if (!height.trim() || isNaN(Number(height))) newErrors.height = '正しい高さを入力してください';
    if (depth.trim() && isNaN(Number(depth))) newErrors.depth = '正しい奥行きを入力してください';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    const newItem: ReferenceItem = {
      id: `custom-${Date.now()}`,
      name,
      category,
      description: description || undefined,
      dimensions: {
        width: Number(width),
        height: Number(height),
        depth: depth ? Number(depth) : undefined,
      },
      unit,
      isCustom: true,
    };
    
    onItemAdd(newItem);
    
    // Reset form
    setName('');
    setCategory('');
    setWidth('');
    setHeight('');
    setDepth('');
    setUnit('cm');
    setDescription('');
    setErrors({});
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">カスタムアイテム作成</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              アイテム名 *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm border ${
                errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              カテゴリ *
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm border ${
                errors.category ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            />
            {errors.category && <p className="mt-1 text-xs text-red-600">{errors.category}</p>}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="width" className="block text-sm font-medium text-gray-700">
                幅 *
              </label>
              <input
                type="text"
                id="width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm border ${
                  errors.width ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
              />
              {errors.width && <p className="mt-1 text-xs text-red-600">{errors.width}</p>}
            </div>
            
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                高さ *
              </label>
              <input
                type="text"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm border ${
                  errors.height ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
              />
              {errors.height && <p className="mt-1 text-xs text-red-600">{errors.height}</p>}
            </div>
            
            <div>
              <label htmlFor="depth" className="block text-sm font-medium text-gray-700">
                奥行き
              </label>
              <input
                type="text"
                id="depth"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm border ${
                  errors.depth ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
              />
              {errors.depth && <p className="mt-1 text-xs text-red-600">{errors.depth}</p>}
            </div>
            
            <div>
              <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                単位
              </label>
              <select
                id="unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value as 'mm' | 'cm' | 'm')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              説明
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              追加
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomItemForm;
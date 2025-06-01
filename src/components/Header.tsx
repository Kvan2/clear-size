import React from 'react';
import { Ruler } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Ruler className="h-8 w-8 text-blue-500 mr-2" />
            <h1 className="text-xl font-bold text-gray-900">clear size</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              比較ツール
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              アイテム一覧
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              カスタムアイテム
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
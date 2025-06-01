import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ComparisonPage from './pages/ComparisonPage';
import CustomItemsPage from './pages/CustomItemsPage';
import { Ruler, Package, UserPlus } from 'lucide-react';

// Define styles for the animation
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
    opacity: 0;
  }
`;

function App() {
  const [activePage, setActivePage] = useState<'comparison' | 'items' | 'custom'>('comparison');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <style>{styles}</style>
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Navigation Tabs */}
          <div className="sm:hidden mb-6">
            <label htmlFor="tabs" className="sr-only">ページ選択</label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              value={activePage}
              onChange={(e) => setActivePage(e.target.value as any)}
            >
              <option value="comparison">比較ツール</option>
              <option value="items">アイテム一覧</option>
              <option value="custom">カスタムアイテム</option>
            </select>
          </div>
          
          <div className="hidden sm:block mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActivePage('comparison')}
                  className={`
                    border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center
                    ${activePage === 'comparison' ? 'border-blue-500 text-blue-600' : ''}
                  `}
                >
                  <Ruler className="h-5 w-5 mr-2" />
                  比較ツール
                </button>
                
                <button
                  onClick={() => setActivePage('custom')}
                  className={`
                    border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center
                    ${activePage === 'custom' ? 'border-blue-500 text-blue-600' : ''}
                  `}
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  カスタムアイテム
                </button>
              </nav>
            </div>
          </div>
          
          {/* Page Content */}
          <div className="animate-fadeIn">
            {activePage === 'comparison' && <ComparisonPage />}
            {activePage === 'custom' && <CustomItemsPage />}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
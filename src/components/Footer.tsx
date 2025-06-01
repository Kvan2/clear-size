import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">利用規約</span>
              <span className="text-sm">利用規約</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">プライバシーポリシー</span>
              <span className="text-sm">プライバシーポリシー</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">お問い合わせ</span>
              <span className="text-sm">お問い合わせ</span>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} clear size. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { ReferenceItem } from '../types';

export const referenceItems: ReferenceItem[] = [
  {
    id: 'a4-paper',
    name: 'A4用紙',
    category: '文房具',
    description: '標準的なA4サイズの紙',
    dimensions: {
      width: 210,
      height: 297,
      depth: 0.1,
    },
    unit: 'mm',
    imageUrl: 'https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'business-card',
    name: '名刺',
    category: '文房具',
    description: '標準的な名刺サイズ',
    dimensions: {
      width: 91,
      height: 55,
      depth: 0.3,
    },
    unit: 'mm',
    imageUrl: 'https://images.pexels.com/photos/6177677/pexels-photo-6177677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'pet-bottle-500ml',
    name: 'ペットボトル (500ml)',
    category: '飲料容器',
    description: '一般的な500mlペットボトル',
    dimensions: {
      width: 65,
      height: 210,
      depth: 65,
    },
    unit: 'mm',
    imageUrl: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    category: 'スマートフォン',
    description: 'アップルの最新モデル',
    dimensions: {
      width: 71.5,
      height: 147.6,
      depth: 7.8,
    },
    unit: 'mm',
    imageUrl: 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'credit-card',
    name: 'クレジットカード',
    category: 'カード',
    description: '標準的なクレジットカードサイズ',
    dimensions: {
      width: 85.6,
      height: 54,
      depth: 0.8,
    },
    unit: 'mm',
    imageUrl: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'coffee-mug',
    name: 'コーヒーマグ',
    category: '食器',
    description: '標準的なコーヒーマグ',
    dimensions: {
      width: 80,
      height: 95,
      depth: 80,
    },
    unit: 'mm',
    imageUrl: 'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'paperback-book',
    name: '文庫本',
    category: '書籍',
    description: '標準的な文庫本',
    dimensions: {
      width: 105,
      height: 148,
      depth: 15,
    },
    unit: 'mm',
    imageUrl: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'desk-chair',
    name: 'デスクチェア',
    category: '家具',
    description: '一般的なオフィスチェア',
    dimensions: {
      width: 60,
      height: 120,
      depth: 60,
    },
    unit: 'cm',
    imageUrl: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
];
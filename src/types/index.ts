export interface ReferenceItem {
  id: string;
  name: string;
  category: string;
  description?: string;
  dimensions: {
    width: number;
    height: number;
    depth?: number;
  };
  unit: 'mm' | 'cm' | 'm';
  imageUrl?: string;
  isCustom?: boolean;
}

export interface ComparisonResult {
  target: ReferenceItem;
  reference: ReferenceItem;
  multiplier: number; // How many reference items equal the target
  remainder?: number; // Any leftover amount
}
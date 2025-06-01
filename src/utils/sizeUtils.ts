import { ReferenceItem, ComparisonResult } from '../types';

/**
 * Converts dimensions to a common unit (mm)
 */
export const normalizeDimension = (value: number, unit: 'mm' | 'cm' | 'm'): number => {
  switch(unit) {
    case 'cm': return value * 10;
    case 'm': return value * 1000;
    default: return value;
  }
};

/**
 * Formats a dimension with the appropriate unit
 */
export const formatDimension = (value: number, unit: 'mm' | 'cm' | 'm'): string => {
  if (unit === 'mm' && value >= 1000) {
    return `${(value / 1000).toFixed(1)}m`;
  } else if (unit === 'mm' && value >= 10) {
    return `${(value / 10).toFixed(1)}cm`;
  }
  return `${value}${unit}`;
};

/**
 * Compares a target item to a reference item and returns how many reference items
 * would fit into the target dimension
 */
export const compareItems = (
  target: ReferenceItem, 
  reference: ReferenceItem,
  dimension: 'width' | 'height' | 'depth' = 'width'
): ComparisonResult => {
  const targetValue = normalizeDimension(
    target.dimensions[dimension] || 0,
    target.unit
  );
  
  const referenceValue = normalizeDimension(
    reference.dimensions[dimension] || 0,
    reference.unit
  );
  
  if (referenceValue === 0) {
    return {
      target,
      reference,
      multiplier: 0,
    };
  }
  
  const multiplier = Math.floor(targetValue / referenceValue);
  const remainder = targetValue % referenceValue;
  
  return {
    target,
    reference,
    multiplier,
    remainder,
  };
};

/**
 * Returns a descriptive comparison text
 */
export const getComparisonText = (result: ComparisonResult, dimension: 'width' | 'height' | 'depth'): string => {
  const { target, reference, multiplier, remainder } = result;
  
  if (multiplier === 0) {
    const targetValue = normalizeDimension(target.dimensions[dimension] || 0, target.unit);
    const referenceValue = normalizeDimension(reference.dimensions[dimension] || 0, reference.unit);
    const percentage = Math.round((targetValue / referenceValue) * 100);
    
    return `${target.name}の${getDimensionName(dimension)}は${reference.name}の約${percentage}%です`;
  }
  
  if (remainder && remainder > 0) {
    const remainderPercentage = Math.round((remainder / normalizeDimension(reference.dimensions[dimension] || 0, reference.unit)) * 100);
    return `${target.name}の${getDimensionName(dimension)}は${reference.name}約${multiplier}個分と${remainderPercentage}%分です`;
  }
  
  return `${target.name}の${getDimensionName(dimension)}は${reference.name}約${multiplier}個分です`;
};

/**
 * Returns the Japanese name for the dimension
 */
const getDimensionName = (dimension: 'width' | 'height' | 'depth'): string => {
  switch(dimension) {
    case 'width': return '幅';
    case 'height': return '高さ';
    case 'depth': return '奥行き';
    default: return dimension;
  }
};
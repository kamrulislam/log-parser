import { MappedData } from '.';

/**
 * 
 * @param values 
 * @param howMany
 * 
 * This is a O(nlog(n)) solution for finding top m values
 * 
 */
export const findTopValues = (values: MappedData[], howMany: number): MappedData[] => {
  values.sort((valueA, valueB) => valueB.count - valueA.count);
  return values.slice(0, howMany);
};

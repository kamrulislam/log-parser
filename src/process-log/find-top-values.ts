import { MappedData } from './index.d';

/**
 * 
 * @param values 
 * @param howMany
 * 
 * This is a O(nlog(n)) solution for finding top m values
 * 
 * NB: this is the simplies solution. I shall add another version
 * using modified Max Heap Algorithm which will have a time complexity
 * of O(log(n))
 */
export const findTopValues = (values: MappedData[], howMany: number): MappedData[] => {
  values.sort((valueA, valueB) => valueB.count - valueA.count);
  return values.slice(0, howMany);
};

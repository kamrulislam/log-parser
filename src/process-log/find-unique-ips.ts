import { MappedData } from '.';

export const findUniqueIps = (ipMap: Map<string, MappedData>): string[] => {
  return Array.from(ipMap.keys());
};

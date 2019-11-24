import { findTopValues } from './find-top-values';

describe('findTopValues', () => {
  test('returns top counts', () => {
    const mappedData = [{key: 'a', count:1}, { key: 'b', count: 2}, { key: 'c', count: 3}];
    const result = findTopValues(mappedData, 2);

    expect(result.length).toBe(2);
    expect(result[0].count).toBe(3);
    expect(result[0].key).toBe('c');
    expect(result[1].count).toBe(2);
    expect(result[1].key).toBe('b');
  });
});

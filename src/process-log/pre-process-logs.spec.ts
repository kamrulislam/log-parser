import { preProcessLogs } from './pre-process-logs';

describe('preProcessLogs', () => {
  test('should convert into Map', () => {
    const logs = [
      { ip: '79.125.00.21',
        method: 'GET',
        url: '/newsletter/',
        protocol: 'HTTP/1.1' },
      { ip: '50.112.00.11',
        method: 'GET',
        url: '/hosting/',
        protocol: 'HTTP/1.1' },
      { ip: '72.44.32.10',
        method: 'GET',
        url: '/download/counter/',
        protocol: 'HTTP/1.1' },
      { ip: '50.112.00.11',
        method: 'GET',
        url: '/asset.css',
        protocol: 'HTTP/1.1'
      }];
    const mappedData = preProcessLogs(logs);
    expect(mappedData.ipMap).toBeDefined();
    expect(mappedData.urlMap).toBeDefined();
    expect(Array.from(mappedData.urlMap.keys())).toContain('/asset.css');
    expect(Array.from(mappedData.urlMap.values())).toContainEqual({key: '/asset.css', count: 1});
    expect(Array.from(mappedData.ipMap.keys())).toContain('50.112.00.11');
    expect(Array.from(mappedData.ipMap.values())).toContainEqual({key: '50.112.00.11', count: 2});
  });

});

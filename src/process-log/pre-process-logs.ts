import { Log } from '../process-input';
import { MappedData } from './index.d';

export const preProcessLogs = (logs: Log[]):
  {
    ipMap: Map<string, MappedData>,
    urlMap: Map<string, MappedData>
  } => {
    const ipMap = new Map<string, MappedData>();
    const urlMap = new Map<string, MappedData>();
    logs.forEach((log) => {
      if(!ipMap.has(log.ip)) {
        ipMap.set(log.ip, { key: log.ip, count: 1});
      } else {
        ipMap.set(log.ip, {...ipMap.get(log.ip), count: ipMap.get(log.ip).count + 1});
      }

      if(!urlMap.has(log.url)) {
        urlMap.set(log.url, { key: log.url, count: 1});
      } else {
        urlMap.set(log.url, {...urlMap.get(log.url), count: urlMap.get(log.url).count + 1});
      }

    });
    return {
      ipMap,
      urlMap
    };
};

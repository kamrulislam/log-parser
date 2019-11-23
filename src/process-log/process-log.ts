import { MappedData } from '.';
import { Log } from '../process-input';
import { findTopValues } from './find-top-values';
import { findUniqueIps } from './find-unique-ips';
import { preProcessLogs } from './pre-process-logs';

export const processLogs = (logs: Log[]) => {
  const preProcessedData = preProcessLogs(logs);
  // console.log(preProcessedData);
  console.log('---------------------------------------');
  console.log('Unique IPs::');
  const uniqueIps = findUniqueIps(preProcessedData.ipMap);
  uniqueIps.forEach((ip:string, index: number) => {
    console.log(`${index + 1}. ${ip}`);
  });
  console.log();
  console.log('Top 3 visited Urls::');
  const topThreeVisitedUrls = findTopValues(Array.from(preProcessedData.urlMap.values()), 3);
  topThreeVisitedUrls.forEach((url: MappedData, index: number) => {
    console.log(`${index + 1}. ${url.key}`);
  });
  console.log();
  console.log('Top 3 most active IP::');
  const topThreeActiveIps = findTopValues(Array.from(preProcessedData.ipMap.values()), 3);
  topThreeActiveIps.forEach((ip: MappedData, index: number) => {
    console.log(`${index + 1}. ${ip.key}`);
  });
  console.log('---------------------------------------');
};

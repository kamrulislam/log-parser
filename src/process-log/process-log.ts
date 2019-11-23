import { Log } from '../process-input';
import { findUniqueIps } from './find-unique-ips';
import { preProcessLogs } from './pre-process-logs';

export const processLogs = (logs: Log[]) => {
  const preProcessedData = preProcessLogs(logs);
  // console.log(preProcessedData);
  console.log('Unique IPs::');
  const uniqueIps = findUniqueIps(preProcessedData.ipMap);
  uniqueIps.forEach((ip:string, index: number) => {
    console.log(`${index}. ${ip}`);
  });
};

import * as path from 'path';
import { readFileAsync } from './input-reader';
import { convertToLogs } from './process-input';
import { processLogs } from './process-log/process-log';

const process = async () => {
  const inputLogStrArr = await readFileAsync(path.resolve(__dirname, '../input/log.log'));
  const logs = convertToLogs(inputLogStrArr);
  processLogs(logs);
};

process().catch((err) => console.log(err));

import * as path from 'path';
import { convertToLogs } from './input-processor';
import { readFileAsync } from './input-reader';
import { processLogs } from './log-processor';

const process = async () => {
  const inputLogStrArr = await readFileAsync(path.resolve(__dirname, '../input/log.log'));
  const logs = convertToLogs(inputLogStrArr);
  processLogs(logs);
};

process().catch((err) => console.log(err));

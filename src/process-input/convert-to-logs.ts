import { convertToLog } from './convert-to-log';
import { Log } from './index.d';
import { LogIdentifier } from './log-identifier';

export const convertToLogs = (inputStrArr: string[]): Log[] => {
  return inputStrArr.filter((logStr) => LogIdentifier.test(logStr)).map(convertToLog);
};

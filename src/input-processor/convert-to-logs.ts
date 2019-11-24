import { Log } from '.';
import { convertToLog } from './convert-to-log';
import { LogIdentifier } from './log-identifier';

export const convertToLogs = (inputStrArr: string[]): Log[] => {
  return inputStrArr.filter((logStr) => LogIdentifier.test(logStr)).map(convertToLog);
};

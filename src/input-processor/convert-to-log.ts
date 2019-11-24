import { Log } from '.';
import { LogIdentifier } from './log-identifier';

const requestParser = (req: string) => {
  const reqMatch = req.match(/^([\w]+)[\s]+([^\s]+)[\s]+(.*)$/);
  return {
    method: reqMatch[1],
    url: reqMatch[2],
    protocol: reqMatch.length === 4 ? reqMatch[3] : ''
  };
};

/**
 *
 * @param strLog
 *
 * this function assumes that input strLog is a valid log string
 *
 */
export const convertToLog = (strLog: string): Log => {
  const match = strLog.match(LogIdentifier);
  return {
    ip: match[1],
    ...requestParser(match[3]),
  } as Log;
};

import * as fs from 'fs';
import * as os from 'os';
import { promisify } from '../promisify';

const readFile = (fileName: string, fn: (error: any, inputs?: string[]) => {}) => {
    fs.readFile(fileName, 'utf8', (err: any, contents: string) => {
        if(err) {
            return fn(err);
        }
        fn(null, contents.split(os.EOL));
    });
};

export const readFileAsync = promisify(readFile);

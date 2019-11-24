# Simple typescript based node starter application

It has a bare minimum configuration for a typescript based node application.

It comes with EsLint and typescript configured.

## Setup

Clone this repo and move into the folder. Run the following commands.

Before running this project you need to have `node` installed. I have used node version `10.13`. If you are using `nvm`, run `nmv use` inside the folder.

```
# nvm use 
npm i
npm run build
npm start
```

## Test

[jest](https://jestjs.io/en/) has been added as testing platform. Test file should be ended with `.spec.ts`. To run test, please use the following command

```
npm test
```

## Input

The application expects log file as `<app_root>/input/log.log`

## Additional

- This project also includes some vscode extensions suggestions.
- Fully enforced `tslint` 
- Latest testing framework (`jest`) has been used with
  - iterable test
  - deep object equality test

## Assumptions

- URL is considered same regardless of Method (eg., GET, POST) or Protocol (eg., HTTP/1.1)
- URL is considered different if there is a trailing `/` (eg., `/a` and `/a/` are different urls)

## High level architecture

- Input is read from `<app_root>/input/log.log` file via `./src/input-reader`
- Input string is converted to `Log` via `./src/input-processor`
- All processing operations are in `./src/log-processor`
- All folder have exposed public API through `./src/<folder>/index.ts`
- Program starts from `./src/index.ts`

# perspectives-serviceworker
The library `perspectives-serviceworker` enables pages in a webbrowser that does not support SharedWorkers (viz Safari) to communicate with another.

Furthermore, the library `perspectives-serviceWorker` is used to make InPlace into a Progressive Web App (it caches files).

## Installation
Install with npm:

```
$ npm install perspectives-workers
```

## Usage
Each InPlace page registers the serviceworker.

## Build
Create `dist/perspectives-sharedworker.js` by evaluating on the command line:

```
$ npm run build
```
This is equivalent to:
```
$ npx webpack
```
## Watch
Have Webpack watch the sources and update `dist/perspectives-sharedworker.js` by evaluating on the command line:

```
$ npm run watch
```
This is equivalent to:
```
$ npx webpack --watch
```

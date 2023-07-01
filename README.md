# Dynamic Menu
Makes an entire menu website out of a JSON file.

## Requirements
NodeJS & NPM
vite (`npm install vite`)

## Making a developer test server
It's simple, just run `npm run test` (or `npm run start` if you want it to be available in your network)

## Making a production build
1. Build the website with `npm run build`
2. Make sure to put the `menu.json` file inside the `dist` folder created
3. Put the dist folder on a webserver, start it up and it should be available. (Make sure the menu.json is inside the same folder as index.html!)

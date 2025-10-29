# Webpack Module Federation Demo
This is a webpack module federation demo project. You can see the code running at [https://liuzane.github.io/webpack-module-federation-demo](https://liuzane.github.io/webpack-module-federation-demo).

# Demo URL

# Project structure
```
├── host
│   ├── src
│   │   ├── bootstrap.js
│   │   ├── main.js
│   │── package.json
│   │── webpack.config.js
│
├── remote1
│   ├── src
│   │   ├── bootstrap.js
│   │   ├── exposes
│   │── package.json
│   │── webpack.config.js
│
├── remote2
│   ├── src
│   │   ├── bootstrap.js
│   │   ├── exposes
│   │── package.json
│   │── webpack.config.js
```

# Installation
```bash
npm install
```

# Run the host project
The host project can only be started after all remote projects have been initiated; otherwise, an error will be reported.
Open the terminal and enter the host folder and run the following command:
```bash
npm run dev
```

# Run the remote1 project
Open the terminal and enter the remote1 folder and run the following command:
```bash
npm run dev
```

# Run the remote2 project
Open the terminal and enter the remote2 folder and run the following command:
```bash
npm run dev
```

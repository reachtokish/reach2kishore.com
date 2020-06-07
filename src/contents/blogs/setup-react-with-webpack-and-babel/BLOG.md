---
slug: "/blog/setup-a-basic-react-application-with-webpack-and-babel"
date: "2020-04-24"
title: "Setup a basic react application with webpack and babel"
author: "Kishore Patra"
categories: "react"
keywords: "react"
excerpt: "We generally use create-react-app (CRA) CLI to generate a basic react application with zero configuration. That's cool because you don't hav..."
---

# Setup a basic react application with webpack and babel

![Setup react with webpack and babel](chris-henry-y1w8EXMDPxs-unsplash.jpg)
*Photo by Chris Henry / @chrishenryphoto / Unsplash*

We generally use [create-react-app (CRA) CLI](https://github.com/facebook/create-react-app) to generate a basic react application with zero configuration. That's cool because you don't have to know about how bundler or compiler can be setup or even what's going on under the hood of CRA. But what if you also want to setup your own configuration in your own way? Here comes how to setup a basic react app without `CRA` and explore the hidden part of that tool.

So we will be using `webpack` as the `bundler`, `babel` for `compilation` and obviously `react` and `react-dom` for the react part broadly.

## Prerequisites

Before jump to the further reading I want to let you know that I assume you have a basic understanding of [React](https://reactjs.org/), [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/). Because these are the core tools which we are going to explore. If you really don't have then I would suggest you to go through their official website first and then move forward with this content.

So without any further readings we will dive into the course of content

## Course of content

- Setup of basic `webpack` configuration for a basic react application
- Setup of basic `babel` configuration for a basic react application
- Creation of basic folder structure for a react project
- Creation of basic react application

First we will create a folder called `my-react-app` and navigate inside that folder in our command line tool like `cmd` or `Terminal`.

Then from there we will run the below command to generate a basic `package.json` file

```
npm init -y
```

or

```
npm int
```

and follow the installation instruction.

Then you will see a package.json file has been created inside the `my-react-app` folder.

Now we will install required packages for webpack first by running the following command

```
npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin
```

> You can check out what individual plugin does exactly from the official [webpack website](https://webpack.js.org/) .

Now you can see above packages has been added as `devDependencies` inside `package.json` file. Cool!

Now we will install required packages for babel by running the following command

```
npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```

> You can check out what individual plugin does exactly from the official [babel website](https://babeljs.io/) .

To run a basic react application we need 2 packages. One is `react` which has the core react library and another one is `react-dom` which is responsible for the rendering of our application to the DOM.

So now to install those 2 libraries we need to run the following command

```
npm install -D react react-dom
```

We are done with installation part. Now is the time to setup our webpack. To do so we have to create a file called `webpack.config.js` in the root of the `my-react-app` directory and paste the following code inside that file

```javascript{ numberLines: true }
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
```

Coming to the setup of `entry` and `output` point of our application. To do so paste the following code after the imports

```javascript{ numberLines: true }
...
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map'
}
```

- `mode` - defines stage of our application. For development purpose it should be `development` and for deployment purpose we can use `production
- `entry` - defines entry point of our application which is `./src/index.js` in our case.
- `output` - defines where our bundled file should be placed.
- `devtool` - helps us to identify where exactly the error happened.

So now we need to let `webpack` know that we are going to use `babel` to compile our code so that it can support most of the browsers. To do so we have to add the below code in `webpack.config.js`

```javascript{ numberLines: true }
...
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
```

Now we need few plugin setup for webpack. Paste the following code below the babel configuration mentioned above

```javascript{ numberLines: true }
...
module.exports = {
  ...
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
```

- `CleanWebpackPlugin` - This plugin first cleans the `/dist` folder and then put the bundled files inside that.
- `HtmlWebpackPlugin` - This plugin generates the html file which helps to serve the webpack bundles.

So the full `webpack.config.js` file should look like the following code now

```javascript{ numberLines: true }
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
```

Now we are done with the webpack setup. We have to make a very small babel setup. Create a `.babelrc` file in the root of our folder and paste the below code inside that

```javascript{ numberLines: true }
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

> Babel presets are array of babel plugins where we don't need to assemble our own set of plugins.

Before jump to the react setup we need to create 2 folders in the root. One is `src` and another one is `public`. And inside public folder create a file called index.html. Also you need to create 2 files inside src folder which are `app.js` and `index.js`. So now your folder structure should look like the following

```
my-react-app
└───node_modules
│   
└───public
|   │---index.html
|
└───src
|   │---app.js
|   |---index.js
|
│---.babelrc
│---package.json
|---webpack.config.js  
```

Now open the `index.html` file in you editor which is present inside `public` directory and paste the following code

```html{ numberLines: true }
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

`div` with id `root` in the above `html` code is where we will render our whole application. Next we will come to that part.

Now open the `index.js` file inside `src` folder and paste the following piece of code

```javascript{ numberLines: true }
import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

ReactDom.render(<App />, document.getElementById("root"))
```

To create the app component paste the following code inside your `app.js` in `src` folder

```javascript{ numberLines: true }
import React from 'react';

function App() {
  return (
    <div>
      <div>Hello world!!</div>
    </div>
  )
}

export default App;
```

Now we are almost there to run our newly created `react` project in the browser. Before doing that we need to add following piece of code inside our `package.json` `scripts` field.

```json{ numberLines: true }
{
  ...
  "scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack --mode production"
  }
}
```

- `start` - command is to start our application in `development` mode.
- `build` - command is for the production build which we can deploy in any live server.

Now the time is to run the application. To do so open your `Terminal` or `cmd` and run `npm start` and it should forcefully open `http://localhost:8080/` in your browser and you should see the page look like the following.

![Setup react with webpack and babel](screencapture-localhost-8080-2020-04-21-22_16_30.png)
*Screenshot*

You can also use `npm run build` - command to build your application. Built file should be generated inside the `/dist` directory.

## Conclusion

This is a very basic react project we have setup using webpack and babel. There are other configurations which you might need while building an enterprise application. In that note I would suggest you to explore more options from [webpack](https://webpack.js.org/) and [babel](https://babeljs.io/) official website.

I hope the above content helped you to get a basic understanding of how to setup react app with webpack and babel. Thanks for reading!!

Let me know what your thought on this post by messaging me on [twitter](https://twitter.com/reachtokish) or [linkedin](https://www.linkedin.com/in/reachtokish/).
---
slug: "/blog/basics-of-package-json"
date: "2020-04-26"
title: "Basics of package.json"
author: "Kishore Patra"
categories: "react"
keywords: "react"
excerpt: "If you have worked with any front-end applications which are related to node or npm there should be a file called `package.json` where we ge..."
---

# Basics of package.json

![rctx-contextmenu](alfons-morales-YLSwjSy7stw-unsplash.jpg "Photo by Alfons Morales / @alfonsmc10 / Unsplash")
*Photo by Alfons Morales / @alfonsmc10 / Unsplash*

If you have worked with any front-end applications which are related to node or npm there should be a file called `package.json` where we generally keep all the configurations related to our project. When I started working with Angular and React I was not much bothered about that particular file because that does not have direct intervention in my project. As a front-end developer, your main task is to make the look and feel as good as possible with high-performance keeping in mind. So why would I bother about `package.json` file?

But there are many cases where you have to modify some of the lines in that file. On that note, you have to have that knowledge so that you can play around with it.

I will be discussing some of the generic configurations which generally resides in `package.json` file. There could be any kind of information you can keep like testing related or your project-specific anything but we can't cover all of them because in that case list will never end.

Below is a sample example of `package.json` file

```json
{
  "name": "sample-package",
  "version": "1.0.0",
  "description": "Sample example of package.json",
  "repository": "github_user/some_repo",
  "author": "reachtokish <patra.kishore65@gmail.com>",
  "license": "MIT",
  "private": false,
  "main": "dist/index.js",
  "module": "dist/index.es.js",
  "jsnext:main": "dist/index.es.js",
  "homepage": "Some repo example url",
  "bugs": {
    "url": "Some repo issues url"
  },
  "engines": {
    "node": ">=10"
  },
  "scripts": {
    "start": "parcel example/public/index.html",
    "build": "npm run clean && rollup -c",
    ...
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  },
  "peerDependencies": {
    ...
  },
  "files": [
    ...
  ],
  "alias": {
    ...
  },
  "jest": {
    ...
  },
  "keywords": [
    ...
  ]
}
```

Without much reading will directly jump to the list of options

1. `name` - Name of the project. Very useful when you are building a library. In that case the package name will inherit this name.
2. `version` - Useful to manage version of your project.
3. `description` - Specify the description related to your project.
4. `repository` - Which repository this project belongs to.
5. `author` - Author or the maintainer of the project.
6. `license` - There are various types of licenses like MIT, Apache, MPL, and many more. Based on your project you can specify licenses here.
7. `private` - If you are building an enterprise application which should not be open for public in that case you can make this value to true or else if you are building a library which will act as an open-source project in that case you can make it as false. Npm will prevent to publishing package if the private value is true.
8. `main` - The main field is a module ID that is the primary entry point to your package.
9. `module` - This is used by bundler tools for ESM (ECMAScript Module) detection.
10. `jsnext:main` - Module bundlers that utilize tree shaking to reduce bundle sizes, like Rollup and Webpack 2, require packages to expose ES Modules with import and export.
11. `homepage`- If you see any npm package page you will see a homepage section on the right of that page. Whatever link you will see there it takes from this homepage property.
12. `bugs` - Same like homepage there is an issue section. It takes this URL.
13. `engines` - You can specify the version of node that your stuff works on.
    - Useful link - <a href="https://docs.npmjs.com/files/package.json#engines" target="_blank">https://docs.npmjs.com/files/package.json#engines</a>
14. `scripts` - You can specify various commands like _build_, _start_, etc.
15. `dependencies` - To specify packages that your project is dependent on.
16. `devDependencies` - To specify development packages which your project is dependent on.
17. `peerDependencies` - This comes especially when you are developing a library where your package needs exact versions of packages mentioned in peerDependencies.
    - Useful link - <a href="https://nodejs.org/es/blog/npm/peer-dependencies" target="_blank">https://nodejs.org/es/blog/npm/peer-dependencies/</a>
18. `files` - This is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.
    - Useful link - <a href="https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json" target="_blank">https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/</a>
21. `keywords` - A collection of keywords to identify a package.

## Conclusion

This is very much important to know the basics when you are building something. And package.json holds a lot of basic configuration which has a potential value for our project. There are a lot of other options you can configure using package.json which I could not cover as the list will never end so whenever you are getting a new term just do google it.

Let me know what your thought on this post by messaging me on [twitter](https://twitter.com/reachtokish) or [linkedin](https://www.linkedin.com/in/reachtokish/).
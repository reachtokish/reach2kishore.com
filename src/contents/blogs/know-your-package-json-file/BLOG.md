---
slug: "/invisible-post/know-your-package-json-file"
date: "2020-04-24"
title: "Know your package.json file"
author: "Kishore Patra"
categories: "react"
keywords: "react"
excerpt: "Whoever has worked with any front-end application which is related to node or npm there should be a file called `package.json` where we gene..."
photo_url: "https://unsplash.com/photos/YLSwjSy7stw"
---

# Know your package.json file

![rctx-contextmenu](alfons-morales-YLSwjSy7stw-unsplash.jpg "Photo by Alfons Morales / @alfonsmc10 / Unsplash")
*Photo by Alfons Morales / @alfonsmc10 / Unsplash*

If you have worked with any front-end applications which is related to node or npm there should be a file called `package.json` where we generally keep all the configurations related to our project. When I started working with Angular and React I was not much bothered about that particular file because that does not have direct intervention in my project. As a front-end developer your main task is to make the look and feel as good as possible with high performance keeping in mind. So why I would bother about `package.json` file?

But there are many cases where you have to modify some of the lines in that file. On that note you have to have that knowledge so that you can play around with it.

I will be discussing some of the generic configuration which generally resides in `package.json` file. There could be any kind of information you can keep like testing related or your project specific anything but we can't cover all of them because in that case list will never end.

Below is an sample example of `package.json` file - 

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

Without much reading will directly jump to the list which have to know

1. `name` - Name of of project. Very useful when you are building a react library. In that case the package name will inherit this name.
2. `version` - Useful to manage version of your project.
3. `description` - Specify the description related to your project.
4. `repository` - Which repository this project belongs to.
5. `author` - Author or the maintainer of the project.
6. `license` - There are various types of licenses like MIT, Apache, MPL and many more. Based on your project you can specify licenses here.
7. `private` - 
8. `main` - 
9. `module` - 
10. `jsnext:main` - 
11. `homepage`- 
12. `bugs` - 
    - `url` -
13. `engines` - 
    - `node`
14. `scripts` - 
    - `start` - 
    - `build` - 
15. `dependencies` - 
16. `devDependencies` - 
17. `peerDependencies` - 
18. `files` - 
19. `alias` - 
20. `jest` - 
21. `keywords` - 
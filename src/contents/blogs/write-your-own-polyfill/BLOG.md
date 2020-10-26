---
slug: "/blog/write-your-own-polyfill"
date: "2020-10-24"
title: "Write your own polyfill"
author: "Kishore Patra"
categories: "javascript"
keywords: "personal"
excerpt: "In the new era of web development we never think of writing custom polyfill because whatever frameworks we use, those use polyfill under the..."
---

# Write your own polyfill

![write-your-own-polyfill](joanna-kosinska-B6yDtYs2IgY-unsplash.jpg "Photo by Joanna Kosinska / @joannakosinska / Unsplash")
*Photo by Joanna Kosinska / @joannakosinska / Unsplash*

In the new era of web development we never think of writing custom polyfill because whatever frameworks we use, those use polyfill under the hood. Libraries like [core-js](https://github.com/zloirock/core-js) or [polyfill.io](https://polyfill.io/v3/) do the same job. But what is polyfill BTW?

> A script that updates/adds new functions is called "polyfill". It "fills in" the gap and adds missing implementations. ~ [https://javascript.info/polyfills](https://javascript.info/polyfills)

In plain language, a polyfill is a piece of code which gives us the flexibility to support specific features in most of the older version of browsers.

Also, there are a lot of JS APIs which got upgraded and thus the newer APIs does not support in older browsers. In that case, users who are using older browsers will get a buggy version of your app.

A couple of years back when I used to work as a front end developer and my job was to just convert PSD to HTML. I used to get a lot of issues when clients ask me to give support of IE8 and upper versions. I always used to add [html5shiv](https://github.com/aFarkas/html5shiv) for that without knowing what is html5shiv. So html5shiv also a polyfill which gives the support of newer HTML tags in older version and hence html5shiv also called polyfill.

Now we will discuss how to write polyfills with a simple example.

Since `.filter` is an es6 feature and some of the older browsers still do not support it. We will write a polyfill of the .filter function.

```javascript
// First it checks if `.filter` is available in browser
if(typeof Array.prototype.filter !== "function") {
  // implementation goes here
  Array.prototype.filter = function(fn, thisp) {
    if (this === null) throw new TypeError;
    if (typeof fn !== "function") throw new TypeError;
    var result = [];
    for (var i = 0; i < this.length; i++) {
      if (i in this) {
        var val = this[i];
        if (fn.call(thisp, val, i, this)) {
          result.push(val);
        }
      }
    }
    return result;
  };
}

// Use of .filter
[1, 2, 3, 4, 5].filter(e => e > 3);
```

In the above example code, it first checks if the browser has a .filter function if yes then there is no need of writing filter polyfill but if not then the bottom piece of code gets applied when someone call .filter

```javascript
Array.prototype.filter = function(fn, thisp) {
  if (this === null) throw new TypeError;
  if (typeof fn !== "function") throw new TypeError;
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if (i in this) {
      var val = this[i];
      if (fn.call(thisp, val, i, this)) {
        result.push(val);
      }
    }
  }
  return result;
};
```

This way we can write a simple example of polyfill.

# Conclusion

In our current era of web development, there is no need to write polyfill by yourself since there are transpilers or libraries available. But it is good to have a basic understanding of polyfill. Hope this article gives a basic understanding of the same. You can read out the following articles about polyfills to get some more knowledge

- [MDN Doc](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill#:~:text=A%20polyfill%20is%20a%20piece,do%20not%20natively%20support%20it.)
- [javascript.info](https://javascript.info/polyfills)
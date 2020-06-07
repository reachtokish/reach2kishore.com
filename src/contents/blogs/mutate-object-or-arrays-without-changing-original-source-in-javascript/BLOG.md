---
slug: "/blog/mutate-object-or-arrays-without-changing-original-source-in-javascript"
date: "2020-05-17"
title: "Mutate object or arrays without changing original source"
author: "Kishore Patra"
categories: "javascript"
keywords: "javascript"
excerpt: "If you are building a javascript application irrespective of any framework, you would have faced a specific issue where you want to modify..."
---

# Mutate object or arrays without changing original source in javascript

![rctx-contextmenu](banner.jpg "Photo by Luca Micheli on Unsplash")
*Photo by Luca Micheli on Unsplash*

If you are building javascript application irrespective of any framework, you would have faced a specific issue where you want to modify an `Object` or `Array`, but with modification, the original value also updating, but you don't want to update the original value.

That's where an immutability helpers libraries help us. I personally prefer [Immutability Helper](https://github.com/kolodny/immutability-helper) library to handle this but there are others like [Immutable JS](https://github.com/kolodny/immutability-helper), which is also a great library.

In this post, I will be discussing the [Immutability Helper](https://github.com/kolodny/immutability-helper) library and will try to cover most of the features like push, splice, merge, etc.

## Prerequisites

Before starting I would like you to go through [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) specification regarding data types and data structures which will give you a fair idea on various kinds of data types and data structures in JS.


## The problem

```js
const originalObj = {
  name: 'Volkswagen',
  color: 'red'
}

const newObj = originalObj;

newObj.color = 'green';

console.log(newObj.color); // green
console.log(originalObj.color); // green
```

The above example looks strange because I have changed `newObj` color value but `originalObj` color value also got the changes. This weird thing is happening because in Javascript `Object` and `Array` are reference types, that means if you are creating an object or array in one place and then assigning that value to another variable it takes only one memory allocation. So if you are changing any property value of `newObj` which has a reference value of  `originalObj`, that means you are changing in only one place. This happens the same for `Arrays` as well.

More on this you can find [here](https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/).

---

Now coming to our main focus are which is how to make object or arrays immutable using [Immutability Helper](https://github.com/kolodny/immutability-helper) library.

To use [Immutability Helper](https://github.com/kolodny/immutability-helper) you have to first install it by running the below command

```
npm install immutability-helper --save
```

and import it wherever you want to use

```js
import update from 'immutability-helper';
```

Below are some of the [commands](https://github.com/kolodny/immutability-helper#update) which we can use

### $push

`push()` all the items in `array` on the target

Example:
```js
const initialArray = [1, 2, 3];
const newArray = update(initialArray, {$push: [4]});

console.log(initialArray); // [ 1, 2, 3 ]
console.log(newArray); // [ 1, 2, 3, 4 ]
```

### $splice

For each item in arrays call splice() on the target with the parameters provided by the item

Nested array push example:

```js
const collection = [1, 2, {a: [12, 17, 15]}];
const newCollection = update(collection, {2: {a: {$splice: [[1, 1, 13, 14]]}}});

console.log(collection); // [ 1, 2, { a: [ 12, 17, 15 ] } ]
console.log(newCollection); // [ 1, 2, { a: [ 12, 13, 14, 15 ] } ]
```

Remove array element example:

```js
const obj = {items: [1, 2, 3, 4]};
const index = 2;
const newObj = update(obj, { items: { $splice: [[index, 1]] } });

console.log(obj); // { items: [ 1, 2, 3, 4 ] }
console.log(newObj); // { items: [ 1, 2, 4 ] }
```

### $apply

Passes in the current value to the function and updates it with the new returned value

```js
const obj = {a: 5, b: 3};
const newObj = update(obj, {b: {$apply: function(x) {return x * 2;}}});

console.log(obj); // { a: 5, b: 3 }
console.log(newObj); // { a: 5, b: 6 }
```

### $set

Replace the target entirely

Simple example:
```js
const obj = {a: 5, b: 3};
const newObj = update(obj, {b: {$set: obj.b * 2}});

console.log(obj); // { a: 5, b: 3 }
console.log(newObj); // { a: 5, b: 6 }
```

Example with [computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names):

```js
const collection = {children: ['zero', 'one', 'two']};
const index = 1;
const newCollection = update(collection, {children: {[index]: {$set: 1}}});

console.log(collection); // { children: [ 'zero', 'one', 'two' ] }
console.log(newCollection); // { children: [ 'zero', 1, 'two' ] }
```

### $merge

Merge the keys of an object with the target

```js
const obj = {a: 5, b: 3};
const newObj = update(obj, {$merge: {b: 6, c: 7}});

console.log(obj); // { a: 5, b: 3 }
console.log(newObj); // { a: 5, b: 6, c: 7 }
```

There are other 2 advanced features. One is [Autovivification](https://github.com/kolodny/immutability-helper#autovivification) and another one is [Adding your own commands](https://github.com/kolodny/immutability-helper#adding-your-own-commands). You can check out those from their respective docs.

## Conclusion

There are other libraries that solve immutability in a great way. I personally know about [immutable-js](https://immutable-js.github.io/immutable-js/), which is great in its own way. You can try both and find which suits your project best. I personally used [Immutability Helper](https://immutable-js.github.io/immutable-js/) multiple times and thus I'm comfortable with this library. You can try whatever you want.

Thanks for reading!

Let me know what your thought on this post by messaging me on [twitter](https://twitter.com/reachtokish) or [linkedin](https://www.linkedin.com/in/reachtokish/).
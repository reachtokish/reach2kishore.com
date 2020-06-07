---
slug: "/blog/deep-dive-into-css-variable"
date: "2020-05-10"
title: "Deep dive into CSS variable"
author: "Kishore Patra"
categories: "css"
keywords: "css"
excerpt: "Do you remember the day when you got first introduction of variable. Yes I remember properly. I got introduced to variables like others that..."
---

# Deep dive into CSS variable

![rctx-contextmenu](./hulki-okan-tabak-sne2RfBFQWY-unsplash.jpg "Photo by Hulki Okan Tabak / @hulkiokantabak / Unsplash")
*Photo by Hulki Okan Tabak / @hulkiokantabak / Unsplash*

Do you remember the day when you got the first introduction of `variable`. Yes, I remember properly. I got introduced to `variables` like others that `variable` is a bucket where we store any kind of values.

Most of us generally started coding using any functional programming language like Java, Python, C, C++, or even Javascript (Nowadays).

Now coming to the CSS. As of my understanding CSS is technically a programming language because we write CSS programs to accomplish styling for our websites. But a lot of programming concepts were not there in CSS when it was first developed. That's why SASS / SCSS / LESS had come to the picture. One of those missing thing in CSS was `variable`. But now CSS also supports `variable`. But syntactically it's a bit different than traditional `variable`. Let's jump to how variables behave in `CSS` without much reading.

## Declaring variable

This is how a `CSS` variable declaration looks like

```css
:root {
  --body-bg-color: #f1f1f1;
}
```

In the above code `--body-bg-color` is the variable name where `#f1f1f1` is the value of it.

## Call variable

You have to call a variable like the way below

```css
body {
  background-color: var(--body-bg-color);
}
```

That's cool.

## Rule of thumb

- The Variable should be declared inside the root selector like `:root` scope or inside `body` selector or even inside any selector.
- Variable name should start with a double hyphen and it's case sensitive.
- The Variable should call inside `var()`.

## Inheritance

You can modify the value of the variable at a later stage when you want to. like the following

```css
:root {
  --text-color: #000;
}
p {
  color: var(--text-color);
}
p.error {
  --text-color: #f00;
  color: var(--text-color);
}
```

In the above piece of code, we have declared `--text-color` variable inside `:root` scope but later when we wanted to modify error style. And then we modified the value inside `p.error` selector.

## Fallback values

You can set some value as a fallback when the `variable` is not declared.

```css
.cell {
  width: var(--cell-width, 25%);
}
```

## Invalid variable

If the variable value is invalid for the property in that case browser will do 2 things

1. Check if the property color is inheritable. Yes, but doesn't have any parent with the color property. So move on to the next step.
2. Set the value to its default initial value, i.e., black.

Example:

**HTML**
```html
<p>This paragraph is initial black.</p> 
```

**CSS**
```css
:root { --text-color: 16px; } 
p { color: blue; } 
p { color: var(--text-color); }
```

In the above example paragraph text color will not be changed to blue because initially paragraph color is set to `color: var(--text-color)` but `--text-color` value is `16px` which is not correct for color property.

## Example with media queries

Modify variable value inside media queries

```css
:root {
  --cell-width: 25%;
}
.cell {
  width: var(--cell-width);
}
@media only screen and (max-width: 600px) {
  --cell-width: 50%;
  .cell {
    width: var(--cell-width);
  }
}
```

## Conclusion

CSS has evolved a lot now for the past few years. There are a lot of other features that have been introduced to CSS. Stay tuned, will cover all those features in my upcoming posts. Thanks for reading!!

Let me know what your thought on this post by messaging me on [twitter](https://twitter.com/reachtokish) or [linkedin](https://www.linkedin.com/in/reachtokish/).
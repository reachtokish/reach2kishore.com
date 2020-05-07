---
slug: "/invisible-blog/css-variable"
date: "2020-04-24"
title: "Make use of css variable"
author: "Kishore Patra"
categories: "css"
keywords: "css"
excerpt: ""
---

# Css variable

Do you remember the day when you got first introduction of `variable`. Yes I remember properly. I got introduced to `variables` like others that 'variable` is a bucket where we store any kind of values.

Most of us generally started coding using any functional programming language like Java, Python, C, C++, or Javascript (Now a days).

Now coming to the CSS. As of my understanding CSS is technically a programming language because we write css programs to accomplish styling for our websites. But lot of programming concepts were not there in css when it was first developed. That's why SASS / SCSS / LESS had come to the picture. One of those missing thing in CSS was `variable`. But now css also supports `variable`. But syntactically it's bit different than traditional `variable`. Lets jump to how variables behave in `CSS` without much reading.

### Declare variable

This is how a `CSS` variable declaration look like

```css
:root {
  --body-bg-color: #f1f1f1;
}
```

In the above code `--body-bg-color` is the variable name where `#f1f1f1` is the value of it.

### Call variable

You have to use it like the way below

```css
body {
  background-color: var(--body-bg-color);
}
```

That's cool.

### Thumb of rule

- Variable should be declared inside root selector like :root scope or inside body selector or even inside any selector.
- Variable name should start with -- and it's case sensitive.
- Variable should call inside var().

### Modify value

You can modify value of the variable at later stage when you want to. like the following

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

In the above piece of code we have declared `--text-color` variable inside `:root` scope but later when we wanted to modify error style. And then we modified the value inside `p.error` selector.

### More example

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
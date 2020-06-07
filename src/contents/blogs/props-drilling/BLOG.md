---
slug: "/blog/handle-prop-drilling-at-ease"
date: "2020-05-30"
title: "Handle prop drilling at ease"
author: "Kishore Patra"
categories: "react"
keywords: "react"
excerpt: "If you are breaking your component into multiple pieces in react, then you would have gone through a process of passing data into an extrem..."
---

# Handle prop drilling at ease

![Photo by Edvard Alexander Rølvaag on Unsplash](./edvard-alexander-rolvaag-E75ZuAIpCzo-unsplash.jpg "Photo by Edvard Alexander Rølvaag on Unsplash")
*Photo by Edvard Alexander Rølvaag on Unsplash*

If you are breaking your component into multiple pieces in react, then you would have gone through a process of passing data into an extreme level to child component through the component tree using props. This process is very painful when the component tree is lengthy because you have to pass down data to every child and same if you want to call props method you have to go through all the parent components.

## What is prop drilling?
> Prop drilling (also called "threading") refers to the process you have to go through to get data to parts of the React Component tree.

*Quoted from [Kent C. Dodds's post](https://kentcdodds.com/blog/prop-drilling)*

I will give you an example first, then we will discuss it further.

Below there is a component where we are showing current minute and second and on update button click it will update the current time state and thus the component will also re-render

App Component -

```jsx{ numberLines: true }
import React from "react";

export default function App() {
  const [currentTime, updateTime] = React.useState(new Date());

  const updateDate = () => updateTime(new Date());

  return (
    <>
      <button onClick={updateDate}>Update</button>
      <div className="App">
        {`${currentTime.getMinutes()}:${currentTime.getSeconds()}`}
      </div>
    </>
  );
}
```

Now we will break it down

```jsx{ numberLines: true }
import React from "react";

export default function App() {
  const [currentTime, updateTime] = React.useState(new Date());

  const updateDate = () => updateTime(new Date());

  return (
    <>
      <SecondsView currentTime={currentTime} updateDate={updateDate} />
    </>
  );
}

function SecondsView({ currentTime, updateDate }) {
  return (
    <>
      <button onClick={updateDate}>Update</button>
      <div className="App">
        {`${currentTime.getMinutes()}:${currentTime.getSeconds()}`}
      </div>
    </>
  )
}
```

One more break down we can do though

```jsx{ numberLines: true }
import React from "react";

export default function App() {
  const [currentTime, updateTime] = React.useState(new Date());

  const updateDate = () => updateTime(new Date());

  return (
    <>
      <SecondsView currentTime={currentTime} updateDate={updateDate} />
    </>
  );
}

function SecondsView({ currentTime, updateDate }) {
  return (
    <>
      <UpdateBtn updateDate={updateDate} />
      <Time currentTime={currentTime} />
    </>
  );
}

function UpdateBtn({ updateDate }) {
  return <button onClick={updateDate}>Update</button>;
}

function Time({ currentTime }) {
  return (
    <div className="App">
      {`${currentTime.getMinutes()}:${currentTime.getSeconds()}`}
    </div>
  );
}
```
## Problems

In the last example, we have broken down the `App` component into an extreme level. Though it's a good practice but a lot of problems has arisen since we have broken it

- The first and most painful problem is we are passing props in every component tree level.
- Hypothetically if anything gets changed related to state variable or even function name in the topmost parent level we have to update each and every child of that parent.
- If you follow the `SecondsView` - component you will see `currentTime` and `updateDate` - props have no use in that component but to pass further down to the child component. And it creates an unnecessary props passing.

## Good practices

Now a few of the good practices we can follow to get rid of those above-mentioned problems

- Context API would be the first choice if I would try to solve this specific problem.
- We can use render props though.
- Don't do extreme levels of component break down where it's not necessary. It creates complexity and nothing else.
- Try to keep the state as close as to the render component.

## Conclusion

There are many pros and cons of prop drilling. But I would suggest you to use anything to react in an effective way. React is already fast and doesn't need much optimization. Just validate your code in terms of necessity, whether it is required to do or no and then proceed.

This post is quite inspired by [Kent C. Dodds's props drilling](https://kentcdodds.com/blog/prop-drilling) post. You can [check out](https://kentcdodds.com/blog/prop-drilling) that as well.

Let me know what your thought on this post by messaging me on [twitter](https://twitter.com/reachtokish) or [linkedin](https://www.linkedin.com/in/reachtokish/).
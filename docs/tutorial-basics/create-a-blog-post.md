---
sidebar_position: 3
---

# Create a Blog Post

[Relative document](./create-a-page.md) 


Docusaurus creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...

## Create your first Post

:::tip My tip
Use this awesome feature option
:::

:::danger My tip
Use this awesome feature option
:::



Create a file at `blog/2021-02-28-greetings.md`:

```js title="Code example"
import fly, { css } from "fly-jss";

// highlight-start
// Create base styles in object
const styles = fly.create({
    primary: {
    background: "blue",
    borderRadius: "20px",
  },
  flat: {
      border: "2px solid aqua",
  },
  text: {
      color: "red",
  },
});
// highlight-end

// Create base styles as string
const styles = fly.create({
    primary: css`
    background: blue;
    borderradius: 20px;
  `,
  flat: css`
    border: 2px solid aqua;
  `,
  text: css`
    color: red;
  `,
});
```

import Highlight from '../../src/Highlight.jsx'

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !


A new blog post is now available at `http://localhost:3000/blog/greetings`.

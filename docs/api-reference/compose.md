---
sidebar_position: 6
---

Compose diferent static and dynamic styles.


```js
import fly from "fly-jss"

fly.compose(
  styles("prop1"), // static style
  styles("prop2"),  // static style
  styles({ // dynamic style
    square : "20px"
  })
);
```
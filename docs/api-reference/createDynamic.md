---
sidebar_position: 3
---

Create a instance of dynamic styles. You can create all properties how a function.


```js
import { fly } from "fly-jss";

const styles = fly.createDynamic({
  prop3 : (params) => ({
    // object styles
  })
})
```
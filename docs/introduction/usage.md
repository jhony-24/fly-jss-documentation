---
sidebar_position: 5
---

# Usage

The main way to use styles is instancing the method create of module. After we use the method props to pass arguments. You can see more examples [here](https://codesandbox.io/s/fly-jss-css-in-js-wgrrc).

:::note You can use the css helper
You have another option to set object styles, How ? using the **css** helper.
:::

```jsx
import fly, { css } from "fly-jss";

// Create base styles in object
const styles = fly.create({
 primary: {
   background: "blue",
   borderRadius : "20px",
 },
 flat: {
   border: "2px solid aqua",
 },
 text : {
   color : "red",
 }
});

// Create base styles as string
const styles = fly.create({
 primary: css`
   background: blue;
   borderRadius: 20px;
 `,
 flat: css`border: 2px solid aqua`,
 text: css`color: red` 
});


/**
 * Using styles passing arguments
 */
function Buttons() {
  return(
    <div> 
      <button className={styles("primary","text")}>Primary button</button>
      <button className={styles("text")}>Secondary button</button>
    </div>
  )
}
```
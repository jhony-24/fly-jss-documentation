---
sidebar_position: 5
---

Get a list properties created in the instance of styles. If you want to have a dynamic property this would cause an error ```styles(...name, {...name} )```.


**Using static props**

```js
// Get all properties
styles("prop1", "prop2")

// Get the prop1
styles("prop1", false && "prop2")

// Get props as object
styles({
  prop1 : true,
  prop2 : true
})
```


**Using dynamic props**

```js
//with a value 
styles({
    button : 10
})

// using diferent styles passing a value 
styles({
    button : 10,
    round : 40
})
```
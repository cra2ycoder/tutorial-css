# ID Selectors

- The ID selector consists of a hash/pound symbol `#`
- Any element can have a unique ID name set with the id attribute
- It's the most efficient way to select a single element.
- An ID name must be unique in the document.
- only the first instance is counted, and the rest are ignored. (in js)

```html
<div id="square"></div>
<div id="circle"></div>
<div id="rectangle"></div>
```

```css
#square {
  width: 100px;
  height: 100px;
  background-color: red;
}

#circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: blue;
}

#rectangle {
  width: 200px;
  height: 100px;
  background-color: green;
}
```

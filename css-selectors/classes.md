# Classes

- The class selector consists of a dot `.`
- A class name is **any value**, **without spaces**
- multiple elements in a document can have the same class name
- can have multiple class names separated by white space

```html
<div class="size rectangle color-theme-red"></div>
<div class="size circle color-theme-blue"></div>
<div class="size color-theme-green"></div>
```

```css
.size {
  width: 100px;
  height: 100px;
  margin: 1rem 0;
}

.color-theme-red {
  background-color: red;
}

.color-theme-blue {
  background-color: blue;
}

.color-theme-green {
  background-color: green;
}

.rectangle {
  width: 200px;
}

.circle {
  border-radius: 50%;
}
```

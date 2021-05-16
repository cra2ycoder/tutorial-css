# Pseudo Classes

- A CSS pseudo-class is a keyword added to the **end of a selector**
- preceded by a colon **:**
- Used to do some style on some **certain state** such as `active, hover, checked` etc.,

### state specific

```html
<a class="google-link" href="https://www.google.com">www.google.com</a>
```

```css
.google-link {
  color: black;
}
.google-link:hover {
  color: red;
}
.google-link:visited {
  color: grey;
}
```

### first-child and last-child

```html
<ul class="num-list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```

```css
.num-list li:first-child {
  background-color: red;
}
.num-list li:last-child {
  background-color: green;
}
```

### nth-child

```html
<ul class="num-nth-list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```

```css
.num-nth-list li:nth-child(even) {
  background-color: grey;
}

.num-nth-list li:nth-child(odd) {
  background-color: yellow;
}
```

### nth-last-child

```html
<ul class="nth-list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
</ul>
```

```css
.nth-list li:nth-last-child(odd) {
  background-color: blue;
}
```

### not

```html
<ul class="not-list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li class="negation">4</li>
</ul>
```

```css
.not-list li:not(.negation) {
  background-color: pink;
  border: 1px solid #000;
}
```

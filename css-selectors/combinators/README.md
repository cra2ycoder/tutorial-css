# Combinators and selector lists

- CSS selectors become even more useful when you start combining them to perform fine-grained selections
- CSS has several ways to select elements
  - Selector list **(A, B)**
  - Descendant combinator **(A B)**
  - Child combinator **(A > B)**
  - Adjacent sibling **(A + B)**
  - General sibling combinator **(A ~ B)**

**Selector list (A, B)**

- applies the css for the all the selectors that is comma separated
- basically it a supporting for grouping the css

```html
<div class="button-a">Button A</div>
<div class="button-b">Button B</div>
<div class="button-c">Button C</div>
<div class="button-d">Button D</div>
```

```css
.button-a,
.button-b,
.button-c,
.button-d {
  width: 200px;
  height: 40px;
  color: white;
  background-color: black;
  text-align: center;
  line-height: 40px;
}
```

---

**Descendant combinator (A B)**

- applies the css for particular element
- For example in the list of elements if we wanted to change one particular element css then we can use this one.

```html
<ul class="fruits">
  <li class="apple">apple</li>
  <li class="orange">orange</li>
  <li class="pineapple">
    <span>pineapple</span>
  </li>
</ul>
```

```css
.fruits .pineapple span {
  color: red;
  text-decoration: underline;
  font-size: 2rem;
}
```

---

**Child combinator (A > B)**

- used to apply css for the direct children of the particular parent

```html
<div class="car-list">
  <div>
    <div>honda</div>
  </div>
  <div>
    <div>maruthi</div>
  </div>
  <div>
    <div>tata</div>
  </div>
  <div>
    <div>toyata</div>
  </div>
</div>
```

```css
.car-list > div {
  background-color: red;
  width: 200px;
}
.car-list > div > div {
  font-size: 1.3rem;
  text-decoration: underline;
  background-color: green;
  display: inline-block;
}
```

---

**Adjacent sibling (A + B)**

- used to apply css for the next child of the selector
- Note: both selector should be in the same parent

```html
<div class="adjacent-sibling">
  <div class="child-a">A</div>
  <div class="child-b">B</div>
  <div class="child-c">C</div>
</div>
```

```css
.adjacent-sibling .child-a,
.adjacent-sibling .child-b,
.adjacent-sibling .child-c {
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  text-align: center;
  color: white;
  line-height: 50px;
}
.adjacent-sibling .child-a:hover + div {
  background-color: green;
}
```

---

**General sibling combinator (A ~ B)**

- this is opposite reaction of `Adjacent Sibling (A+B)`

```html
<div class="general-sibling">
  <div class="child-a">A</div>
  <div class="child-b">B</div>
  <div class="child-c">C</div>
</div>
```

```css
.general-sibling .child-a,
.general-sibling .child-b,
.general-sibling .child-c {
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 50%;
  text-align: center;
  color: white;
  line-height: 50px;
}
.general-sibling .child-a:hover ~ div {
  background-color: green;
}
```

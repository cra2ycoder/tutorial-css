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

```

```css
```

---

**Descendant combinator (A B)**

- applies the css for particular element
- For example in the list of elements if we wanted to change one particular element css then we can use this one.

```html

```

```css
```

---

**Child combinator (A > B)**

- used to apply css for the direct children of the particular parent

```html

```

```css
```

---

**Adjacent sibling (A + B)**

- used to apply css for the next child of the selector
- Note: both selector should be in the same parent

```html

```

```css
```

---

**General sibling combinator (A ~ B)**

- this is opposite reaction of `Adjacent Sibling (A+B)`

```html

```

```css
```

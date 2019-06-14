# Attributes

## Presence and value attribute selectors

- **[attr]:** select all elements with the attribute **attr**, whatever its value.
- **[attr=val]:** select all elements with the attribute **attr**, but only if its value is **val**.
- **[attr~=val]:** select all elements with the attribute **attr**, but only if val is one of a space-separated list of words contained in attr's value.

```html
<ul class="presence-value-attr">
  <li car></li>
  <li car="audi">Audi</li>
  <li car="bmw">BMW</li>
  <li car="this is audi">Audi A5</li>
</ul>
```

```css
/* All elements with the attribute "car" */
.presence-value-attr [car] {
  background-color: green;
  color: white;
}

/* All elements with the attribute "car"
with the exact value "audi" */
.presence-value-attr [car="bmw"] {
  background-color: goldenrod;
}

/* All elements with the attribute "car",
containing the value "audi", even among others,
are given a red text color */
.presence-value-attr [car~="audi"] {
  color: red;
}
```

---

## Substring value attribute selectors

- also known as `RegExp-like selectors`
- flexible matching in a similar fashion to regular expression (these are not true regular expression)
- some of the types:
  - **[attr^=val]:** select all elements with the attribute **attr** for which the value **starts with val**.
  - **[attr$=val]:** select all elements with the attribute **attr** for which the value **ends with val**.
  - **[attr*=val]:** select all elements with the attribute **attr** for which the **value contains the substring val**. (A substring is simply part of a string, e.g. "cat" is a substring in the string "caterpillar".)
  - **[attr|=val]:** select all elements with the attribute **attr** for which the value is exactly **val or starts with val-** (the hyphen here isn't a mistake). This was implemented specifically to match language codes, e.g. lang="en" or lang="en-US", and you probably won't use it very often.

```html
<ul>
  <li data-type="vegetable tomato">Tomato</li>
  <li data-type="carrot 3kg">Carrot</li>
  <li data-type="vegetable beans 2kg">Beans</li>
  <li data-type="corn 1kg">Corn</li>
  <li data-type="vegetable red chilly">
    Red Chilly
  </li>
  <li data-type="vegetable-cucumber">Cucumber</li>
  <li data-type="vegetable-garlic">Garlic</li>
</ul>
```

```css
/* selects the element which data-type value starts with "vegetable" */
li[data-type^="vegetable"] {
  background-color: red;
  color: white;
}

/* selects the element which  data-type value ends with "kg" */
li[data-type$="kg"] {
  font-size: 2rem;
  color: green;
}

/* selects the element which data-type value substrings of "table" */
li[data-type*="table"] {
  font-size: 3rem;
  color: blue;
}

/* selects the element which data-type value exactly same as "vegetable-cucumber" */
li[data-type|="vegetable-cucumber"] {
  font-size: 3rem;
  color: yellow;
}
```

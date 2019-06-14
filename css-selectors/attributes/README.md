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

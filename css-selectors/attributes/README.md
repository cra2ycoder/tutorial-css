## Attributes

**Presence and value attribute selectors**

- **[attr]:** This selector will select all elements with the attribute attr, whatever its value.
- **[attr=val]:** This selector will select all elements with the attribute attr, but only if its value is val.
- **[attr~=val]:** This selector will select all elements with the attribute attr, but only if val is one of a space-separated list of words contained in attr's value.

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

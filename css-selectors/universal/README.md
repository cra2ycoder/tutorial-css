## Universal Selectors

- The universal selector `*` is the ultimate joker.
- It allows selecting all elements on a page
- It is rarely used to apply a style to every element on a page
-

```html
<div class="universal-selectors">
  <p>
    I think the containing box just needed a <strong>border</strong> or
    <em>something</em>, but this is getting <strong>out of hand</strong>!
  </p>
</div>
```

```css
.universal-selectors * {
  padding: 5px;
  border: 1px solid black;
  background: rgba(255, 0, 0, 0.25);
}
```

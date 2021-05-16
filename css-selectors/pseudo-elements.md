# Pseudo Elements

- very much like pseudo-classes
- preceded by two colons (::)
- can be added to the end of selectors

### some popular pseudo elements

```
::after
::before
::first-letter
::first-line
::selection
```

## Example

### ::before

```html
<p class="pseudo-elements-before">pseudo elements</p>
```

```css
.pseudo-elements-before::before {
  content: 'before: ';
  color: red;
  font-weight: bold;
}
```

### ::after

```html
<p class="pseudo-elements-after">pseudo elements</p>
```

```css
.pseudo-elements-after::after {
  content: ': after';
  color: green;
  font-weight: bold;
}
```

### ::first-letter

```html
<p class="pseudo-first-letter">first letter</p>
```

```css
.pseudo-first-letter::first-letter {
  font-size: 4rem;
  background-color: red;
  color: white;
  padding: 2px;
}
```

### ::first-line

```html
<p class="pseudo-first-line">
  Pseudo-elements are very much like pseudo-classes, <br />but they have
  differences. They are keywords, this time preceded by two colons (::), that
  can be added to the end of selectors to select a certain part of an element.
</p>
```

```css
.pseudo-first-line::first-line {
  text-decoration: underline;
}
```

### ::selection

```html
<p class="pseudo-selection">Try selecting the text by using mouse.</p>
```

```css
.pseudo-selection::selection {
  background-color: yellow;
}
```

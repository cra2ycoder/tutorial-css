## CSS Selectors

<!-- tabs:start -->

#### ** Attributes **

- `[attr] { }`
- `[attr=val] { }`
- `[attr~=val] { }`
- `[attr^=val] { }`
- `[attr$=val] { }`
- `[attr*=val] { }`
- `[attr|=val] { }`

#### ** Classes **

`.class-name { }`

#### ** Combinators **

- `.cls-name-1, .cls-name-2, .cls-name-3 { }`
- `.parent .child .sub-child { }`
- `.parent > .direct-child { }`
- `.parent .child + .next-child { }`
- `.parent .child ~ .prev-child { }`

#### ** Elements **

- `p { }`
- `div { }`
- `span { }`

_the tag elements which holds content in the body can be used for styling_

#### ** ID **

`#id { }`

#### ** Pseudo **

- classes

  - `.selector:hover { }`
  - `.selector:visited { }`
  - `.selector:first-child { }`
  - `.selector:last-child { }`

for more: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

- elements

  - `.selector::after { }`
  - `.selector::before { }`
  - `.selector::first-letter { }`
  - `.selector::first-line { }`
  - `.selector::selection { }`

for more: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

#### ** Universal **

- `* { }`
- `.parent * { }`

<!-- tabs:end -->

---

- For more and technicle learnings:

  - [Type selectors aka element selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors#Type_selectors_aka_element_selectors)
  - [Class selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors#Class_selectors)
  - [ID selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors#ID_selectors)
  - [Universal selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors#Universal_selector)
  - [Presence and value attribute selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors#Presence_and_value_attribute_selectors)
  - [Substring value attribute selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors#Substring_value_attribute_selectors)
  - [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements#Pseudo-classes)
  - [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements#Pseudo-elements)
  - [Combinators and selector lists](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)
  - [Groups of selectors on one rule](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors#Groups_of_selectors_on_one_rule)

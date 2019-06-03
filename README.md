# tutorial-css

## What is CSS?

- Expands **Cascading Stylesheets**
- CSS is the first technology you should start learning after HTML
- Used to style it and lay it out.
- For example, you can use CSS to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.

## How to apply CSS to HTML?

- There are three different ways to apply CSS to an HTML document
  - External
  - Internal
  - Inline

**External**

- An external stylesheet is when you have your CSS written in a separate file with a **.css** extension, and you reference it from an HTML **link** element.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

**Internal**

- An internal stylesheet is where you don't have an external CSS file, but instead place your CSS inside a **style** element, contained inside the HTML head.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

**Inline**

- Inline styles are CSS declarations that affect one element only, contained within a style attribute:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">
      Hello World!
    </h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```

- **Note:**

  - Please don't do this, unless you really have to! It is really bad for maintenance.
  - makes more harder to read and understand.

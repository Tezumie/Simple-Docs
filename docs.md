
<h1 id="Introduction" data-icon="\f069" data-color="var(--active-color)">Introduction</h1>

Welcome to the Simple-docs guide! This tool allows you to craft beautiful, interactive documentation with ease. Below are the instructions on how to set up your documentation, utilize buttons, sections, and code editors effectively, and generate a full documentation single-page application (SPA) with a single file.

<h2 id="Overview" data-icon="\eaa5">Overview</h2>

This library provides you with everything you need to create a fully-featured documentation site. By following the instructions outlined in this document, you can set up a complete single-page documentation site using a single markdown file.

<div class="button-grid">
      <button class="grid-button" data-url="getting-started-" data-icon="\f069" data-color="var(--active-color)">Getting Started</button>
      <button class="grid-button" data-url="buttons-" data-icon="\f0cfd" data-color="#e24164">Buttons</button>
      <button class="grid-button" data-url="icons-" data-icon="\f0198" data-color="rgb(233, 190, 0)">Icons</button>
      <button class="grid-button" data-url="callouts-" data-icon="\f0b7a" data-color="#41e257">Callouts</button>
      <button class="grid-button" data-url="code-box-" data-icon="\f0626" data-color="rgb(233, 190, 0)">Code Box</button>
      <button class="grid-button" data-url="mini-editors-" data-icon="\f44f" data-color="var(--active-color)">Mini Editor</button>
      <button class="grid-button" data-url="code-editors-" data-icon="\f121" data-color="#e24164">Code Editor</button>
</div>

# Getting Started

Welcome to the quick start guide! Follow the steps below to set up your single-page documentation site using this powerful and flexible library.

## 🚀 Setup

To create a single-page documentation site using this library, follow these steps:

1. **📝 Create a Markdown File**  
   Start by creating a file named `docs.md`. This file will contain all your documentation content in markdown format, serving as the backbone of your site.

2. **📂 Include the Required Files**  
   You need to include the CSS and JavaScript files necessary to style and run your documentation. These files will handle the rendering and styling of your markdown content.

3. **⚙️ Generate the Documentation**  
   The JavaScript file (`docs.js`) processes your `docs.md` file and renders the content as a fully functional single-page documentation site.

4. **🎨 Style Your Documentation**  
   Customize the look and feel of your documentation by editing the `docs.css` file. This file controls the styling of all the elements on your page, including buttons, code blocks, headers, and more.

5. **🚀 Deploy Your Documentation**  
   Once everything is set up, you can deploy your single-page documentation site by uploading the `index.html`, `docs.css`, `docs.js`, and `docs.md` files to your web server.

## 💡 Example Usage

Here’s a simple example of how to set up your documentation page:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Documentation</title>
        <link rel="icon" href="images/favicon.png" type="image/png" />
        <link rel="stylesheet" type="text/css" href="docs.css" />
    </head>
    <body>
        <script src="docs.js"></script>
    </body>
</html>
```
## ⚙️ Configuration

Before initializing your documentation with the `docs.js` script, you can configure various settings to personalize your documentation site. These settings allow you to customize the appearance, branding, and navigation of your site.

### 🛠 Configuration Options

To configure your documentation, define a `docsConfig` object in the global `window` object. This should be done before the `<script>` tag that includes `docs.js`.

**Example Configuration:**

```js
window.docsConfig = {
    theme: "dark",  // Default theme if the user has not set one cached.
    url: "https://github.com/your-repo",  // Redirect link for the home button.
    logo: "https://your-logo",  // Replace the home button with an image.
};
```

### 🔧 Available Configuration Options

- **`theme`**:  
  Set the default theme for your documentation site. If the user has not already selected a theme (which may be cached in their browser), this option will determine the initial appearance.  
  **Options**: `"dark"`, `"light"`
  **Example**:  
  ```js
  theme: "dark"
  ```

- **`url`**:  
  Define the redirect link for the home button. This can be useful for linking back to a repository, a main website, or any other resource.  
  **Example**:  
  ```js
  url: "https://github.com/your-repo"
  ```

- **`logo`**:  
  Replace the default home button icon with a custom logo image. This is great for branding your documentation with a company logo or project icon.  
  **Example**:  
  ```js
  logo: "https://your-logo"
  ```

### 📝 How to Apply the Configuration

To apply these settings, include the configuration object in your HTML file before the `docs.js` script tag:

**Example Usage:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentation</title>
    <link rel="icon" href="images/favicon.png" type="image/png">
    <link rel="stylesheet" type="text/css" href="docs.css">
    <script>
        window.docsConfig = {
            theme: "dark",
            url: "https://github.com/your-repo",
            logo: "https://your-logo",
        };
    </script>
</head>
<body>
    <script src="docs.js"></script>
</body>
</html>
```

By configuring these options, you can tailor your documentation site to better fit your needs and branding, ensuring a consistent and professional look and feel across your entire project.

### 📚 Generating a Full Documentation Single-Page App (SPA)

By following the steps above, you can generate a full documentation single-page app with just a single markdown file (`docs.md`). This file serves as the central hub for your entire documentation, allowing you to:

- **✍️ Write Content**: Use markdown syntax to write and organize your documentation content effortlessly.
- **💻 Embed Code Examples**: Easily include code blocks and live code editors for interactive examples.
- **🔗 Add Navigation**: Use buttons and links to create a seamless navigation experience within your documentation.

**✨ Benefits of Using a Single `docs.md` File**:

- **Simplicity**: Manage all your documentation content in one place, making it easier to update and maintain.
- **Consistency**: Ensure a consistent style and format across your documentation with a single source of truth.
- **Portability**: Easily share or move your documentation by transferring just one markdown file.




# Buttons

Add buttons to navigate to various sections or subsections of your documentation. These buttons enhance navigation by providing a clickable interface with icons sourced from NerdFont data URLs.

You can browse and select icons from the [NerdFonts website](https://www.nerdfonts.com/cheat-sheet).

<a href="https://www.nerdfonts.com/cheat-sheet">
    <img src="https://www.nerdfonts.com/assets/img/nerd-fonts-logo.svg" alt="NerdFonts Logo">
</a>


## Grid Buttons

Grid buttons are used to create a set of navigational buttons that guide users to specific sections or subsections within your documentation.

**Example:**

```html
<div class="button-grid">
      <button class="grid-button" data-url="code-editors-" data-icon="\f069" data-color="var(--active-color)">Code Editors</button>
      <button class="grid-button" data-url="code-editors-" data-icon="\e796" data-color="rgb(233, 190, 0)">Run Code</button>
</div>
```

**Result:**

<div class="button-grid">
      <button class="grid-button" data-url="code-editors-" data-icon="\f069" data-color="var(--active-color)">Code Editors</button>
      <button class="grid-button" data-url="code-editors-" data-icon="\e796" data-color="rgb(233, 190, 0)">Run Code</button>
</div>

## In-line Buttons

In-line buttons can be seamlessly integrated into your text, providing direct links to different sections of your documentation.

**Example:**

```markdown
*Check out how to add an [aijs-embed](#code-editors--aijs-embed-).*
```

**Result:**

*Check out how to add an [aijs-embed](#code-editors--aijs-embed-).*

<div class="callout-note">

There is a key difference in the format when creating grid buttons versus in-line buttons:

- **Grid Buttons:** Omit the starting `#` for section/subsection links in the `data-url` attribute.
  - **Example:** `data-url="code-editors-"` links to the `#code-editors-` section.
- **In-line Buttons:** Include the starting `#` when linking to sections or subsections.
  - **Example:** `[aijs-embed](#code-editors--aijs-embed-)` links to `#code-editors--aijs-embed-`.

</div>

### Sections

When defining sections, start with `#`, end with `-`, and replace any whitespace with `-`.

**Example:**

```markdown
#code-editors-
```

### Subsections

For subsections, start with `-`, end with `-`, and replace whitespace with `-`.

**Example:**

```markdown
-code-box-
```

### Navigating to Subsections

To navigate directly to a subsection, combine the section and subsection identifiers:

**Example:**

```markdown
#code-editors--aijs-embed-
```


<h1 id="icons-" data-icon="\f0198" data-color="rgb(233, 190, 0)">Icons</h1>

## Overview

You can enhance your documentation headers by adding custom icons and colors to your `<h1>` and `<h2>` tags. This allows you to create visually appealing titles that match the style of your documentation.

### Adding Custom Icons and Colors to Headers

Instead of using standard markdown syntax like `##` for headers, you can create custom headers by using HTML `<h1>` or `<h2>` tags. By utilizing the `data-icon` and `data-color` attributes, similar to how grid buttons work, you can personalize your headers with specific icons and colors.

<div class="callout-note">
The `data-icon` attribute uses icon codes from NerdFonts. You can find and choose icons from the NerdFonts cheat sheet.
</div>

[NerdFonts cheat sheet](https://www.nerdfonts.com/cheat-sheet)

## Custom h1

#### Custom `<h1>` Example

Below is an example of how to create a custom `<h1>` header with an icon and color:

**Example:**

```html
<h1 id="icons-" data-icon="\f0198" data-color="rgb(233, 190, 0)">Icons</h1>
```

**Result:**
*Scroll to the top of this page to see the result.*

This will create an `<h1>` header with an icon (defined by the `data-icon` attribute) and a color (specified by the `data-color` attribute). The icon code (`\f069`) is sourced from NerdFonts, and the color can be set using CSS variables or any valid CSS color value.


<div class="callout-alert">

NOTE: Ensure the ID you use for custom `h1` and `h2` elements end with `-` for example: `id="Icons-"`.

</div>

<h2 id="custom-h2-" data-icon="\f06d3" data-color="red">Custom h2</h2>

#### Custom `<h2>` Example

You can apply the same technique to `<h2>` headers:

**Example:**

```html
<h2 id="custom-h2-" data-icon="\f06d3" data-color="red">Custom h2</h2>
```

**Result:**

*See the 'Custom h2' subsection header above*

This will create an `<h2>` header with a red icon and text. 

## 🙂 Emoji

You can also Use Emojis by simply inlcuding one with your `<h1>` or `<h2>`.

```markdown
## 🙂 Emoji
```

# Callouts

## Overview

Use callouts to highlight important information, notes, or alerts within your documentation. These can be used to draw attention to specific points or provide additional context.

### Example Code for Callouts:

```html
<div class="callout">
- This is a general callout to draw attention.
</div>

<div class="callout-note">
- This is a note, useful for supplementary information.
</div>

<div class="callout-alert">
- This is an alert to warn users of critical information or potential issues.
</div>
```

**Result:**

<div class="callout">
- This is a general callout to draw attention.
</div>

<div class="callout-note">
- This is a note, useful for supplementary information.
</div>

<div class="callout-alert">
- This is an alert to warn users of critical information or potential issues.
</div>


# Code Box

## Overview
Easily add code boxes to your documentation using markdown. These code boxes come with built-in copy buttons, making it convenient for users to copy and paste code snippets directly from your documentation.

### Example Code Box:

````markdown
```js
console.log('Hello World!');
```
````

**Result:**

```js
console.log('Hello World!');
```

### Tips:
- The code block will automatically include a copy button for user convenience.


# Mini Editors

## aijs mini

Integrate live code editors directly into your documentation using the aijs mini editor API. This feature allows users to interact with and run code snippets within the documentation itself.

### Example of a Mini Editor

You can embed a code editor with custom configurations for various use cases.

**Example Configuration:**

```html
<div id="editor1" class="editor-container"></div>

<div data-script="
     scriptContent = `
let aspectRatio = 3 / 4;
//n
function setup() {
  createCanvas(window.innerWidth, window.innerWidth / aspectRatio);
  flexibleCanvas(1000); // Makes your project Dimension Agnostic
}
//n
function draw() {
  background(220);
  rect(0, 0, 500);
}
    `;
     editor1 = new MiniEditor({
        containerId: 'editor1',
        scriptId: scriptContent,
        autoRun: true,
        title: 'Starter Project',
        image: 'https://aijs.io/images/newLogo.png',
        dependencies: ['https://cdn.jsdelivr.net/gh/Tezumie/T5.js@latest/T5Main.js'],
        options: {
            theme: 'vs-light',
            minimap: {
                enabled: false
            },
        }
    });
"></div>
```

**Result:**
<div id="editor1" class="editor-container"></div>

<div data-script="
     scriptContent = `
let aspectRatio = 3 / 4;
//n
function setup() {
  createCanvas(window.innerWidth, window.innerWidth / aspectRatio);
  flexibleCanvas(1000); // Makes your project Dimension Agnostic
}
//n
function draw() {
  background(220);
  rect(0, 0, 500);
}
    `;
     editor1 = new MiniEditor({
        containerId: 'editor1',
        scriptId: scriptContent,
        autoRun: true,
        title: 'Starter Project',
        image: 'https://aijs.io/images/newLogo.png',
        dependencies: ['https://cdn.jsdelivr.net/gh/Tezumie/T5.js@latest/T5Main.js'],
        options: {
            theme: 'vs-light',
            minimap: {
                enabled: false
            },
        }
    });
"></div>

<div class="callout-alert">
NOTE:

- Use `//n` to insert empty lines in your code within the scriptContent block.

- The mini editor supports projects with multiple dependencies but only a single JavaScript file.
</div>

This setup provides an interactive coding environment within your documentation, making it ideal for tutorials, demonstrations, and small projects.

# Code editors
For more complex projects involving multiple files or more advanced setups, consider the following options:


## aijs Embed

You can run a complete sketch from aijs.io directly within your documentation by embedding it using an iframe. Use the "share fullscreen" button on aijs.io to get the URL of your project and then embed it as follows:

**Example:**

```html
<iframe src="https://aijs-code-editor-user-content.web.app/HWSsSJCQ6aTA1KRhevxFQprWA5B3/Projects/Recursive_Shape_Packing/index.html"></iframe>
```

**Result:**

<iframe src="https://aijs-code-editor-user-content.web.app/HWSsSJCQ6aTA1KRhevxFQprWA5B3/Projects/Recursive_Shape_Packing/index.html"></iframe>

## aijs editor

For more detailed projects that involve multiple files, you can embed the full aijs.io editor. This is particularly useful for complex projects that require a comprehensive coding environment.

**Example:**

```html
<iframe src="https://aijs-code-editor.web.app/editor?user=aijs&project=Recursive_Shape_Packing&mode=editor" width="800" height="600"></iframe>
```

**Result:**

<iframe src="https://aijs-code-editor.web.app/editor?user=aijs&project=Recursive_Shape_Packing&mode=editor" width="800" height="600"></iframe>

Refer to the [aijs.io documentation](https://aijs.io/docs#embedding--embed-editor-) for instructions on how to configure the embedded editor.


# Gvinico Portfolio Case Study

An interactive portfolio page documenting the design and development work created for **Gvinico**, a Georgian wine project that is no longer active. It is part of [Ihar Sharamau's portfolio](https://www.sharamoff.com/), and preserves the project as a case study rather than a live product website.

The page presents an end-to-end design-engineering approach: visual identity, illustration, information design, front-end implementation, and animation.

## Case-study highlights

- **Logo redesign** — a modernised identity with updated typography and a versatile logo mark.
- **Wine illustration** — a composition of Georgian wine varieties, including the characteristic amber tones of qvevri wines.
- **Interactive wine-region map** — an animated SVG-based navigation concept that moves from a country-level view towards terroir information.
- **Winemaking schemes** — more than 100 vector illustrations assembled into explanatory process diagrams.
- **Social-media design system** — a collection of 100+ promotional visual concepts for editorial and product content.

## Technology

- HTML5 and SCSS/CSS
- JavaScript
- [Gulp 4](https://gulpjs.com/) build workflow
- GSAP with ScrollTrigger and Draggable for scroll-driven interaction
- Lottie / dotLottie and Bodymovin for animation
- WOW.js for mobile reveal effects
- BrowserSync for local development and live reload

Some browser-side libraries are loaded from CDNs; an internet connection is therefore required to view all animations locally.

## Project structure

```text
SRC/           Source HTML, SCSS, JavaScript, images, and animation files
BUILD/         Generated production-ready site
gulpfile.js    Gulp tasks and BrowserSync configuration
package.json   Node.js dependencies
```

`SRC/` is the editable source directory. Do not edit generated files in `BUILD/` directly: rebuild them from the source instead.

## Run locally

Prerequisites: Node.js and npm.

```bash
npm install
npx gulp
```

The default Gulp task builds the project, starts BrowserSync at `http://localhost:3001`, and watches `SRC/` for changes.

To produce a one-off build without starting the development server:

```bash
npx gulp build
```

## Build pipeline

Gulp compiles SCSS, applies Autoprefixer, minifies CSS, processes HTML and JavaScript through Rigger, and copies image and animation assets from `SRC/` to `BUILD/`.

## Status

This repository is a portfolio archive. Gvinico itself has been closed; the page exists to document the work and demonstrate the author's design, engineering, web-development, animation, and illustration capabilities.

## Author

Created by [Ihar Sharamau](https://www.sharamoff.com/).

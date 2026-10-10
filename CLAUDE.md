# Project notes for future sessions

## Motion libraries (requested by Vikram)

Use these three for animation. Don't add other animation libraries without asking.

- **GSAP** (`gsap`, `@gsap/react`, ScrollTrigger and SplitText plugins): scroll-triggered reveals and text animation.
- **Lenis** (`lenis`): smooth scrolling. Driven by GSAP's ticker so ScrollTrigger stays in sync (see `src/App.js`).
- **React Bits** (github.com/DavidHDev/react-bits): source for effect components. Copy the component and adapt it. Don't install it as a dependency. So far only `SplitText` is adapted (`src/components/SplitText.js`). Use other React Bits components where they fit, with restraint.

Everything motion-related must respect `prefers-reduced-motion`.

## Install

The repo needs `npm install --legacy-peer-deps` (MUI and testing-library peer conflicts).

## Deploy

`CI=false npm run build`, then `npx gh-pages -d build`. Live site is built from the feature branch, not `main`.

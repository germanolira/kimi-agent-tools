# MathDesk — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.2 | UI framework |
| `react-dom` | ^18.2 | React DOM renderer |
| `vite` | ^5.0 | Build tool |
| `@vitejs/plugin-react` | ^4.0 | Vite React plugin |
| `typescript` | ^5.3 | Type system |
| `tailwindcss` | ^3.4 | Utility CSS |
| `postcss` | ^8.4 | CSS processing |
| `autoprefixer` | ^10.4 | CSS vendor prefixes |
| `gsap` | ^3.12 | Animation engine (ScrollTrigger, tweening) |
| `lenis` | ^1.0 | Smooth scroll interpolation |
| `splitting` | ^1.0 | Character/word DOM splitting |
| `three` | ^0.160 | WebGL rendering for curved image reveal |
| `@types/three` | ^0.160 | Three.js TypeScript types |
| `lucide-react` | ^0.400 | Icon library (nav, features, footer icons) |

## Component Inventory

### Layout

| Component | Source | Reuse | Notes |
|-----------|--------|-------|-------|
| `Navbar` | Custom | Single | Fixed header with scroll-triggered backdrop blur. 64px height. |
| `Footer` | Custom | Single | Dark footer with 4-column link grid. |

### Sections

| Component | Source | Notes |
|-----------|--------|-------|
| `HeroSection` | Custom | Contains DimensionalHeadline. Scroll-driven fade via GSAP ScrollTrigger. |
| `TrustedBySection` | Custom | Logo row with grayscale filter. |
| `FeaturesBandSection` | Custom | Contains 8 FeatureCard instances. |
| `HowItWorksSection` | Custom | 3-column step grid. |
| `FeatureEditorialSection` | Custom | Reused twice with `reversed` prop for layout flip. Contains CurvedImageReveal. |
| `TestimonialsSection` | Custom | Centered quote with carousel dots. |
| `UseCasesSection` | Custom | 4-column card grid with hover lift. |
| `CTASection` | Custom | Contains CircularTextWheel. |

### Reusable Components

| Component | Source | Used By | Notes |
|-----------|--------|---------|-------|
| `DimensionalHeadline` | Custom | HeroSection | splitting.js + CSS 3D. Per-character rotateY. |
| `FeatureCard` | Custom | FeaturesBandSection (x8) | 200x200 card with physics-driven icon. |
| `CurvedImageReveal` | Custom | FeatureEditorialSection | Three.js WebGL planes with scroll-driven vertex rotation. |
| `CircularTextWheel` | Custom | CTASection | splitting.js + GSAP infinite rotation. |
| `SectionEntrance` | Custom | All sections | Wrapper hook/utility for fade+translateY entrance. |

### Hooks

| Hook | Purpose |
|------|---------|
| `useLenis` | Initialize Lenis, sync with ScrollTrigger, expose instance. |
| `useScrollEntrance` | GSAP ScrollTrigger fade-in + translateY for text blocks. |
| `useFeaturePhysics` | Shared rAF physics loop for FeaturesBand. |

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Dimensional Headline Rotation | splitting + CSS 3D | splitting.js wraps chars. CSS `rotateY(90deg)` default, `rotateY(0)` on hover. `preserve-3d` chain critical. | Low |
| Hero scroll fade-out | GSAP ScrollTrigger | scrub-linked opacity 1→0 + translateY 0→-40px over first 30vh. | Low |
| Section entrance (global) | GSAP ScrollTrigger | `useScrollEntrance` hook: fade + translateY(30px), stagger 0.1s siblings. Trigger at `top 80%`. | Low |
| Dynamic Features Band | Vanilla rAF + lerp | Single shared rAF loop. Per-card mouse tracking with lerp physics (factor 0.15). Icon transforms + radial glow opacity computed each frame. Desktop only (hover:hover gate). | High |
| Curved Image Scroll Reveal | Three.js + GSAP ScrollTrigger | Orthographic scene. One plane per image with ShaderMaterial. Vertex shader rotates plane on Y-axis via `uRotation` uniform. GSAP ScrollTrigger tweens uniform directly (no Theatre.js). Fragment shader does cover-fit UV mapping. | High |
| Circular Text Wheel | splitting + GSAP | splitting.js for chars. Trigonometry positions chars around circle (cos/sin * radius). Font size = circumference / charCount. GSAP rotates container -360° over 40s linear infinite. | Medium |
| Card hover (use cases) | CSS transition | translateY(-4px) + shadow deepen. 0.4s cubic-bezier. Pure CSS. | Low |
| Button/link hovers | CSS transition | Scale, border-color, arrow translate. Pure CSS. | Low |

## State & Logic

### Lenis ↔ GSAP Sync

Lenis must be initialized once at the app root. ScrollTrigger must receive Lenis scroll events:

```
Lenis instance created → lenis.on('scroll', ScrollTrigger.update)
GSAP ticker → drives lenis.raf on every GSAP tick
All ScrollTrigger instances → use scrub: true for 1:1 mapping
```

This is a global singleton pattern — the `useLenis` hook creates one instance and shares it via React context or module-level variable.

### Feature Physics Loop Architecture

The Features Band uses a single shared `requestAnimationFrame` loop across all 8 cards. This is a module-level pattern, not React state:

```
Module-level: rAF id, array of card physics objects
Each FeatureCard: registers its DOM refs + physics object on mount
Mouse events on each card: update target values in its physics object
rAF loop: iterates all cards, lerps current→target, applies transforms
Unmount: card removes itself from the loop
```

The loop skips cards that are not hovered and at rest (all current values ≈ target). This prevents wasted CPU.

### Three.js Scene Lifecycle

The CurvedImageReveal manages a Three.js scene imperatively within a React `useEffect`:

```
useEffect:
  1. Create renderer (transparent, pointer-events: none)
  2. Create orthographic camera covering viewport
  3. For each image: create plane geometry, shader material, mesh
  4. Position meshes at DOM element coordinates (sync on resize + scroll)
  5. GSAP ScrollTrigger per image → tweens uRotation uniform
  6. rAF render loop
  Cleanup: dispose renderer, geometries, materials, textures; remove ScrollTriggers
```

The scene reads DOM element positions via `getBoundingClientRect()` on each frame and converts to Three.js world space. This is necessary because the images scroll.

## Other Key Decisions

### Three.js over @react-three/fiber

The CurvedImageReveal uses vanilla Three.js in a `useEffect` rather than `@react-three/fiber`. Reason: the design specifies direct Theatre.js-style uniform management and explicit mesh positioning from DOM coordinates. A declarative R3F scene would add abstraction without benefit for this use case. The scene is small (3-4 planes) and fully imperative.

### No Theatre.js

The design.md mentions Theatre.js but explicitly notes GSAP ScrollTrigger as an acceptable alternative. Theatre.js is excluded to reduce bundle size and complexity. GSAP ScrollTrigger directly tweens shader uniforms via `onUpdate` callbacks.

### Splitting.js in React

splitting.js mutates the DOM directly. In React, it must be called in `useEffect` after the element renders. The component must render the raw text first, then splitting.js wraps characters. Cleanup should restore original text on unmount to avoid double-wrapping on React Strict Mode remount.

# Zapt UI Design Direction

This guide adapts the polish and compositional discipline associated with Tailwind UI / Tailwind Plus to Zapt's existing identity. It is a direction, not a component library to copy.

## Visual character

- Clear, confident and technical without looking cold.
- Premium spacing, strong hierarchy and a small number of decisive accents.
- Product proof is built in HTML/CSS whenever possible, so it remains responsive, sharp and themeable.
- The interface should feel intentionally designed for Zapt, never like an unchanged template.

## Color

Keep the canonical tokens in `app/styles/colors.css`:

- Primary blue: `#0554f2`
- Secondary cyan: `#18a8e8`
- Highlight lime: `#b9e532`
- Ink: `#10182b`
- Canvas: `#f6f9ff`
- Dark hero surface: `#08152c`

Use the lime highlight sparingly for the highest-priority action, status or key phrase. Blue remains the brand anchor; cyan supplies depth and secondary emphasis.

## Typography

- Keep Space Grotesk as the current product face.
- Use variable weights deliberately: 700 for display headings, 600–700 for controls, 400–500 for supporting text.
- Display headings use tight tracking and balanced wrapping; body copy stays between 45 and 70 characters per line.
- The base scale follows a practical Tailwind rhythm: 12, 14, 16, 20, 30 and 48 px, with fluid display sizes where needed.

## Spacing, shape and depth

- Base spacing unit: 4 px. Prefer 8, 12, 16, 24, 32, 48 and 64 px.
- Controls: 8 px radius. Cards and product art: 12–24 px only where the larger form supports the composition.
- Default motion: 150 ms with explicit transitioned properties. Ambient motion must stop for `prefers-reduced-motion`.
- Borders are quiet and structural. Shadows should communicate hierarchy, not decoration.

## Interaction and accessibility

- Every interaction needs a visible hover and `focus-visible` state.
- Use semantic links for navigation and buttons for actions.
- Minimum touch target: 44 px.
- Keep one `h1`, preserve heading order, provide a skip link and add `scroll-margin-top` to anchored sections.
- Decorative visuals and icons stay hidden from assistive technology; meaningful images require useful alternative text and fixed dimensions.
- The mobile layout is a first-class composition, not a compressed desktop screenshot.

## Hero pattern

The preferred Zapt hero pairs a concise positioning argument with a product-proof visual. It should contain:

1. A short category or capability signal.
2. One direct headline with a single highlighted phrase.
3. One primary and, at most, one secondary action.
4. A visual that proves the claim through process, interface or outcome.
5. A complete responsive story, including keyboard navigation and reduced motion.

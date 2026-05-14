---
description: Use this when designing UI components, pages, or applying visual styling to maintain consistent, distinctive design across the bingo app.
applyTo: "**/*.tsx", "**/*.ts", "**/*.css", "**/*.md"
---

# Design Guide for Oficina TypeScript - Bingo Mixer

This instructions file establishes the visual design principles and patterns for the Bingo Mixer app, ensuring a cohesive, distinctive aesthetic that avoids generic "AI slop" while maintaining accessibility and usability.

## Core Design Philosophy

- **Distinctive Identity**: Use cohesive color themes with intentional duality (light: blue/green, dark: red noir)
- **Atmospheric Depth**: Layer subtle gradients, patterns, and animations for visual interest
- **Typography Hierarchy**: Employ distinctive font choices that complement the modern, playful vibe
- **Component Consistency**: Follow established patterns for buttons, cards, grids, and states
- **Responsive Excellence**: Ensure designs work seamlessly across devices with touch-friendly interactions

## Color Palette

### Light Theme (Default)
- **Primary Accent**: `#2563eb` (blue) - Used for CTAs, active states
- **Secondary Accent**: `#3b82f6` (light blue) - Hover/active variants
- **Marked State**: `#dcfce7` (light green) - Background for marked squares
- **Marked Border**: `#22c55e` (green) - Borders for marked elements
- **Winning State**: `#fbbf24` (amber) - Bingo celebration, alerts
- **Backgrounds**: `#f9fafb` (gray-50), `#ffffff` (white)
- **Text**: `#111827` (gray-900), `#6b7280` (gray-500), `#374151` (gray-700)

### Dark Theme (Noir)
- **Primary Accent**: `#dc2626` (red) - Dramatic CTAs in dark mode
- **Secondary Accent**: `#ef4444` (light red) - Interactive states
- **Marked State**: `#1f2937` (dark gray) - Subdued marked squares
- **Marked Border**: `#dc2626` (red) - Red borders for emphasis
- **Winning State**: `#dc2626` (red) - Cinematic bingo alerts
- **Backgrounds**: `#000000` (black), `#1f2937` (gray-800)
- **Text**: `#ffffff` (white), `#d1d5db` (gray-300), `#9ca3af` (gray-400)

### Usage Guidelines
- Always use CSS custom properties (`--color-*`) for theme-aware colors
- Implement dark mode variants using Tailwind's `dark:` prefix
- Reserve red palette exclusively for dark theme to maintain visual distinction
- Use amber only for winning states in light mode; red in dark mode

## Typography

### Font Stack
- **Primary**: System UI fonts (`system-ui, -apple-system, sans-serif`) - Clean, modern
- **Fallback**: Consider distinctive web fonts for headings if system fonts feel generic
- Avoid: Generic AI favorites like Inter, Roboto, or overly decorative fonts

### Scale & Hierarchy
- **Display (Headings)**: `text-4xl` (title), `text-3xl` (modal), `text-2xl` (section)
- **Body**: `text-lg` (paragraphs), `text-base` (default), `text-sm` (secondary)
- **Compact**: `text-xs` (board squares, labels)
- **Weights**: `font-bold` for emphasis, `font-semibold` for CTAs, `font-normal` for body

### Best Practices
- Maintain consistent line heights and spacing
- Use `text-balance` or `hyphens-auto` for better text flow
- Ensure minimum contrast ratios (4.5:1 for normal text, 3:1 for large text)

## Layout & Spacing

### Grid System
- **Board Layout**: 5x5 CSS Grid with `gap-1`, `aspect-square` ratio
- **Container Widths**: `max-w-md` for boards, `max-w-xs` for modals
- **Responsive**: Use `min-h-full` for full-screen layouts

### Spacing Scale
- **Component Padding**: `p-3` (compact), `p-6` (generous)
- **Element Spacing**: `mb-2`, `mb-4`, `mb-6`, `mb-8` for vertical rhythm
- **Grid Gaps**: `gap-1` (tight), `gap-2` (comfortable)

### Layout Patterns
- **Centered Content**: `flex items-center justify-center min-h-full`
- **Card Design**: Rounded corners (`rounded-lg`), subtle shadows (`shadow-sm`), borders
- **Header/Footer**: Fixed positioning with consistent padding

## Component Patterns

### Buttons
- **Primary CTA**: `bg-accent text-white font-semibold py-3 px-6 rounded-lg`
- **Secondary**: `bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200`
- **States**: Include `active:bg-accent-light`, hover effects
- **Sizing**: Touch-friendly minimum 44px height

### Cards & Containers
- **Background**: `bg-white dark:bg-gray-800`
- **Border**: `border border-gray-200 dark:border-gray-700`
- **Shadow**: `shadow-sm` for elevation
- **Rounded**: `rounded-lg` or `rounded-xl` for modals

### Interactive States
- **Hover**: Subtle background changes (`hover:bg-gray-100 dark:hover:bg-gray-700`)
- **Active**: More pronounced feedback (`active:bg-accent-light`)
- **Focus**: Accessible focus rings
- **Disabled**: Reduced opacity, pointer-events none

### Bingo Square States
- **Default**: White/gray background, subtle border
- **Marked**: Theme-colored background (`bg-marked`), border (`border-marked-border`)
- **Winning**: Accent color (`bg-bingo`), checkmark indicator
- **Free Space**: Bold text, centered, non-interactive

## Animations & Transitions

### Principles
- **Purposeful Motion**: Use animations to enhance user understanding
- **Performance**: Prefer CSS transforms over layout properties
- **Duration**: `duration-150` (quick), `duration-300` (smooth)
- **Easing**: `ease-out` for entrances, `ease-in-out` for state changes

### Key Animations
- **Modal Entrance**: `animate-[bounce_0.5s_ease-out]` for celebration
- **State Transitions**: Smooth color/background changes on interactions
- **Theme Switch**: Instant theme application (no transition needed)

## Accessibility & Usability

### Color Contrast
- Ensure 4.5:1 ratio for normal text, 3:1 for large text
- Test both light and dark themes

### Touch Targets
- Minimum 44px touch targets
- Adequate spacing between interactive elements

### Semantic HTML
- Use appropriate ARIA attributes (`aria-pressed`, `aria-label`)
- Maintain keyboard navigation

### Screen Reader Support
- Descriptive labels for interactive elements
- Clear heading hierarchy

## Implementation Guidelines

### Tailwind Usage
- Prefer utility classes over custom CSS when possible
- Use `@theme` for design tokens, `@theme inline` for theme switching
- Leverage Tailwind v4 features: native opacity, container queries

### CSS Custom Properties
- Define colors in `:root` and `@theme inline dark`
- Use consistent naming: `--color-*` for theme colors

### Component Structure
- Keep components focused and reusable
- Use TypeScript interfaces for props
- Separate logic from presentation

### Testing
- Visual regression testing for design consistency
- Cross-device testing for responsive behavior
- Accessibility audits for compliance

## Examples

### Button Component
```tsx
<button className="bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:bg-accent-light active:bg-accent-light transition-colors">
  Start Game
</button>
```

### Theme-Aware Card
```tsx
<div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
  <h2 className="text-gray-900 dark:text-white font-semibold">Instructions</h2>
  <p className="text-gray-600 dark:text-gray-300">Tap squares to find matches...</p>
</div>
```

### Bingo Square
```tsx
<button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded p-1 min-h-[60px] text-xs">
  Question text
</button>
```

This guide should be updated as the design evolves. Always reference these patterns when creating new components or modifying existing ones.
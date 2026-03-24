<div align="center">

# @fmlj/uikit

**A modern React component library built for speed.**

76 components · Tailwind CSS v4 · Slot-based theming · Tree-shakeable

[![CI](https://github.com/fmlj/uikit/actions/workflows/ci.yml/badge.svg)](https://github.com/fmlj/uikit/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@fmlj/uikit?color=blue)](https://www.npmjs.com/package/@fmlj/uikit)
[![downloads](https://img.shields.io/npm/dm/@fmlj/uikit?color=green)](https://www.npmjs.com/package/@fmlj/uikit)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@fmlj/uikit)](https://bundlephobia.com/package/@fmlj/uikit)
[![license](https://img.shields.io/github/license/fmlj/uikit)](https://github.com/fmlj/uikit/blob/main/LICENSE)

[Changelog](https://github.com/fmlj/uikit/releases) · [Report Bug](https://github.com/fmlj/uikit/issues/new?template=bug_report.md) · [Request Feature](https://github.com/fmlj/uikit/issues/new?template=feature_request.md)

</div>

---

## Why This Library?

| | @fmlj/uikit | shadcn/ui | Ant Design | Chakra UI |
|---|---|---|---|---|
| **Theming** | Slot-based color system — 1 prop themes everything | Copy-paste, manual | Token config object | colorScheme prop |
| **Tailwind** | v4 native (`@theme`, `@source`) | v3 with config | No Tailwind | No Tailwind |
| **Bundle** | Tree-shake per component | Copy into project | 300KB+ full bundle | 200KB+ full bundle |
| **Dark mode** | Zero-config CSS variables | Manual `dark:` classes | ConfigProvider | ColorModeProvider |
| **Components** | 76 production-ready | ~50 primitives | 60+ | 60+ |
| **Tests** | 1,556 tests | Community | Extensive | Moderate |

### The Slot Color System

One `color` prop. Every part of the component responds — backgrounds, borders, text, hover states, focus rings. No manual mapping. No 49 color variants hardcoded per component.

```tsx
<Button color="primary">Submit</Button>
<Button color="error">Delete</Button>
<Alert color="warning">Watch out</Alert>
<Badge color="success">Active</Badge>
```

Under the hood, `color="primary"` sets a single CSS variable `--_c`. Every slot utility (`bg-slot`, `text-slot`, `border-slot-30`, `bg-slot-10`) derives from it automatically. Add a new color to your theme → every component supports it instantly.

### Tailwind CSS v4 Native

Not "works with Tailwind" — **built on v4's architecture**:

- `@theme` block defines all tokens as CSS custom properties
- `@source` auto-scans compiled components — no manual safelist
- `@custom-variant dark` — dark mode via `.dark` class on `<html>`
- `@utility` defines the slot color system as real Tailwind utilities
- When Tailwind ships new features, you get them. No wrapper layer in the way.

### Per-Component Imports

Every component is its own entry point. Import what you use, ship only what you use:

```tsx
import Button from '@fmlj/uikit/button'     // just Button
import Table from '@fmlj/uikit/table'        // just Table
import { useTheme } from '@fmlj/uikit/theme' // just the hook
```

---

## Quick Start

```bash
npm install @fmlj/uikit
```

> **Peer deps:** `react` ≥18, `react-dom` ≥18, `lucide-react` ≥0.400, `tailwindcss` ≥4.0

### CSS Setup

Your project needs Tailwind CSS v4 with `@tailwindcss/vite` or `@tailwindcss/postcss`.

```css
@import "tailwindcss";
@import "@fmlj/uikit/styles/global.css";
```

That's it. One import. Tokens, dark mode, utilities, component styles — all included.

### Use It

```tsx
import Button from '@fmlj/uikit/button'
import Input from '@fmlj/uikit/input'
import Select from '@fmlj/uikit/select'

function App() {
  return (
    <div className="flex gap-3">
      <Input placeholder="Search..." />
      <Select options={[{ label: 'React', value: 'react' }]} />
      <Button color="primary">Go</Button>
    </div>
  )
}
```

---

## Dark Mode

```tsx
import { ThemeProvider, useTheme } from '@fmlj/uikit/theme'

<ThemeProvider defaultTheme="system">
  <App />
</ThemeProvider>

// Toggle anywhere:
const { setTheme } = useTheme()
setTheme('dark') // 'light' | 'dark' | 'system'
```

SSR flash prevention — add to `<head>`:

```tsx
import { getThemeScript } from '@fmlj/uikit/theme'

<script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
```

All components use CSS custom properties. Dark mode swaps values at `:root`. Zero `dark:` prefixes in component code.

## Theme Presets

```css
@import "@fmlj/uikit/styles/global.css";
@import "@fmlj/uikit/styles/themes/presets/corporate.css";
```

```html
<html data-theme="corporate" class="dark">
```

Available: `corporate`, `vibrant`, `minimal`. Mix with dark/light freely.

## Custom Tokens

Override after our import — no `!important` needed:

```css
@import "tailwindcss";
@import "@fmlj/uikit/styles/global.css";

/* Your overrides — just plain :root, wins by source order */
:root {
  --color-primary: oklch(0.55 0.22 270);
  --color-primary-hover: oklch(0.50 0.24 270);
  --color-primary-foreground: oklch(1 0 0);
  --color-background: oklch(0.98 0 0);
  --font-sans: 'Inter', system-ui, sans-serif;
  --button-height-md: 2.5rem;
}

/* Optional: different dark mode values */
.dark {
  --color-primary: oklch(0.65 0.22 270);
  --color-background: oklch(0.12 0.01 270);
}
```

Every token is a CSS variable. Change one, it propagates everywhere. Your `:root` overrides win by source order — just import after `global.css`.

---

## Common API

### `color`

```
'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'info'
```

### `size`

```
'xs' | 'sm' | 'md' | 'lg'
```

### `variant`

Per-component:
- **Button:** `solid` `outline` `soft` `dashed` `link` `ghost`
- **Card:** `default` `solid` `outline` `soft` `ghost` `elevated`
- **Checkbox / Toggle:** `solid` `outline` `soft`
- **Input:** `outline` `filled`
- **Badge / Tag:** `default` `solid` `outline` `soft`

### Validation

```tsx
<Input error="Required field" />
<Input warning="Weak password" />
<Input success />
```

### Styling Escape Hatches

```tsx
// Root element
<Button className="shadow-lg">Submit</Button>

// Internal parts
<Input classNames={{ root: 'mb-4', label: 'font-bold', input: 'tracking-wide' }} />

// CSS selectors — every part has a semantic class + data-slot
.input_label { font-weight: 700; }
[data-slot="trigger"] { min-width: 200px; }
```

---

## All 76 Components

<details>
<summary><b>Data Entry (27)</b></summary>

| Component | Import |
|-----------|--------|
| Input | `@fmlj/uikit/input` |
| FloatInput | `@fmlj/uikit/float-input` |
| InputPassword | `@fmlj/uikit/input-password` |
| InputOTP | `@fmlj/uikit/input-otp` |
| InputGroup | `@fmlj/uikit/input-group` |
| NumberInput | `@fmlj/uikit/number-input` |
| Textarea | `@fmlj/uikit/textarea` |
| Select | `@fmlj/uikit/select` |
| MultiSelect | `@fmlj/uikit/multi-select` |
| Cascader | `@fmlj/uikit/cascader` |
| TreeSelect | `@fmlj/uikit/tree-select` |
| DatePicker | `@fmlj/uikit/date-picker` |
| ColorPicker | `@fmlj/uikit/color-picker` |
| Autocomplete | `@fmlj/uikit/autocomplete` |
| Mentions | `@fmlj/uikit/mentions` |
| Checkbox | `@fmlj/uikit/checkbox` |
| CheckboxGroup | `@fmlj/uikit/checkbox-group` |
| Radio | `@fmlj/uikit/radio` |
| RadioGroup | `@fmlj/uikit/radio-group` |
| Switch | `@fmlj/uikit/switch` |
| Slider | `@fmlj/uikit/slider` |
| Rating | `@fmlj/uikit/rating` |
| Toggle | `@fmlj/uikit/toggle` |
| ToggleGroup | `@fmlj/uikit/toggle-group` |
| Upload | `@fmlj/uikit/upload` |
| Clipboard | `@fmlj/uikit/clipboard` |
| TagsInput | `@fmlj/uikit/tags-input` |

</details>

<details>
<summary><b>Layout (9)</b></summary>

| Component | Import |
|-----------|--------|
| Button | `@fmlj/uikit/button` |
| ButtonGroup | `@fmlj/uikit/button-group` |
| Card | `@fmlj/uikit/card` |
| Grid | `@fmlj/uikit/grid` |
| Divider | `@fmlj/uikit/divider` |
| Collapse | `@fmlj/uikit/collapse` |
| Accordion | `@fmlj/uikit/accordion` |
| ScrollArea | `@fmlj/uikit/scroll-area` |
| Resizable | `@fmlj/uikit/resizable` |

</details>

<details>
<summary><b>Navigation (12)</b></summary>

| Component | Import |
|-----------|--------|
| Tabs | `@fmlj/uikit/tabs` |
| Breadcrumbs | `@fmlj/uikit/breadcrumbs` |
| Pagination | `@fmlj/uikit/pagination` |
| Stepper | `@fmlj/uikit/stepper` |
| Dropdown | `@fmlj/uikit/dropdown` |
| ContextMenu | `@fmlj/uikit/context-menu` |
| Menubar | `@fmlj/uikit/menubar` |
| NavigationMenu | `@fmlj/uikit/navigation-menu` |
| Command | `@fmlj/uikit/command` |
| Anchor | `@fmlj/uikit/anchor` |
| Link | `@fmlj/uikit/link` |
| FloatButton | `@fmlj/uikit/float-button` |

</details>

<details>
<summary><b>Overlays (5)</b></summary>

| Component | Import |
|-----------|--------|
| Modal | `@fmlj/uikit/modal` |
| Drawer | `@fmlj/uikit/drawer` |
| Tooltip | `@fmlj/uikit/tooltip` |
| Popover | `@fmlj/uikit/popover` |
| Tour | `@fmlj/uikit/tour` |

</details>

<details>
<summary><b>Feedback (8)</b></summary>

| Component | Import |
|-----------|--------|
| Notification | `@fmlj/uikit/notification` |
| Alert | `@fmlj/uikit/alert` |
| Toast | `@fmlj/uikit/toast` |
| Progress | `@fmlj/uikit/progress` |
| Spinner | `@fmlj/uikit/spinner` |
| Skeleton | `@fmlj/uikit/skeleton` |
| Result | `@fmlj/uikit/result` |
| FetchingOverlay | `@fmlj/uikit/fetching-overlay` |

</details>

<details>
<summary><b>Data Display (9)</b></summary>

| Component | Import |
|-----------|--------|
| Table | `@fmlj/uikit/table` |
| Tree | `@fmlj/uikit/tree` |
| Calendar | `@fmlj/uikit/calendar` |
| Descriptions | `@fmlj/uikit/descriptions` |
| Timeline | `@fmlj/uikit/timeline` |
| Transfer | `@fmlj/uikit/transfer` |
| Carousel | `@fmlj/uikit/carousel` |
| Image | `@fmlj/uikit/image` |
| QRCode | `@fmlj/uikit/qr-code` |

</details>

<details>
<summary><b>General (6)</b></summary>

| Component | Import |
|-----------|--------|
| Badge | `@fmlj/uikit/badge` |
| Tag | `@fmlj/uikit/tag` |
| Avatar | `@fmlj/uikit/avatar` |
| Kbd | `@fmlj/uikit/kbd` |
| Typography | `@fmlj/uikit/typography` |
| Watermark | `@fmlj/uikit/watermark` |

</details>

<details>
<summary><b>Theme & Hooks</b></summary>

| Export | Import |
|--------|--------|
| ThemeProvider, useTheme, getThemeScript | `@fmlj/uikit/theme` |
| useControllable | `@fmlj/uikit/hooks/useControllable` |
| useDebounce | `@fmlj/uikit/hooks/useDebounce` |
| useThrottle | `@fmlj/uikit/hooks/useThrottle` |
| useMediaQuery | `@fmlj/uikit/hooks/useMediaQuery` |
| useRipple | `@fmlj/uikit/hooks/useRipple` |

</details>

---

## CSS Variables Reference

<details>
<summary><b>Colors</b></summary>

```
--color-primary / -hover / -active / -foreground
--color-secondary / -hover / -active / -foreground
--color-accent / -hover / -active / -foreground
--color-success / -hover / -active / -foreground
--color-error / -hover / -active / -foreground
--color-warning / -hover / -active / -foreground
--color-info / -hover / -active / -foreground

--color-background / -secondary
--color-surface
--color-card / -foreground
--color-border / -primary / -hover / -focus

--color-text-primary / -secondary / -muted / -disabled

--color-input-bg / -text / -placeholder / -border / -border-focus / -border-error
--color-focus / -ring
--color-disabled / -text
--color-overlay
```

</details>

<details>
<summary><b>Sizing</b></summary>

```
--button-height-xs/sm/md/lg      --button-padding-x-xs/sm/md/lg
--input-height-xs/sm/md/lg       --input-padding-x-xs/sm/md/lg
--select-height-xs/sm/md/lg      --select-padding-x-xs/sm/md/lg
--toggle-height-xs/sm/md/lg      --toggle-padding-x-xs/sm/md/lg
--textarea-min-height-xs/sm/md/lg
--checkbox-size-xs/sm/md/lg
--switch-width-xs/sm/md/lg       --switch-height-xs/sm/md/lg
--otp-size-xs/sm/md/lg
--accordion-padding-x-xs/sm/md/lg
```

</details>

<details>
<summary><b>Effects & Z-Index</b></summary>

```
--shadow-sm / -md / -lg / -xl / -2xl

--z-dropdown  (1000)    --z-sticky   (1020)
--z-modal     (1040)    --z-popover  (1050)
--z-tooltip   (1060)    --z-overlay  (1070)
```

</details>

---

## TypeScript

Full type coverage. Every prop, variant, and callback is typed:

```tsx
import type { ButtonProps, SelectOption, TableColumn } from '@fmlj/uikit'
```

## Browser Support

Chrome, Firefox, Safari, Edge — last 2 versions.

## License

[MIT](./LICENSE)

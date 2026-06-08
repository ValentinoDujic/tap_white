# Global Design Tokens & Rules — V4 (Final)

## Typography
- **Font**: Outfit (Google Fonts)
- **Weights used**: 300, 400, 500, 600, 700, 800, 900
- **Title (H1)**: 26-28px / Bold 800-900
- **Subtitle (H2)**: 18px / Bold 800
- **Body**: 14px / Regular 400
- **Label/Caption**: 11-12px / Bold 700-800 / Uppercase / 1.5px letter-spacing

## Colors — Dark Theme (Default)
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-color` | `#0A0A0A` | Page background |
| `--bg-elevated` | `#141414` | Elevated surface |
| `--card-bg` | `rgba(255,255,255,0.05)` | Cards, inputs |
| `--glass-bg` | `rgba(10,10,10,0.85)` | Sticky footers, headers |
| `--primary-orange` | `#EF691E` | CTA, accents |
| `--primary-orange-hover` | `#FF7A33` | Hover state |
| `--text-main` | `#FFFFFF` | Primary text |
| `--text-secondary` | `#E0E0E0` | Secondary text |
| `--text-muted` | `#A0A0A0` | Labels, captions |
| `--border-color` | `rgba(255,255,255,0.08)` | Card borders |

## Status Colors
- **Success**: `#00C853`
- **Warning**: `#FFB300`
- **Error**: `#FF3D00`
- **Info**: `#2196F3`

## Spacing & Sizing
- **Border Radius**: sm=8px, md=12px, lg=20px, xl=24px, pill=100px
- **Header Height**: 64px
- **Footer Height**: 96px (with padding)
- **Min Touch Target**: 44-48px
- **Padding (Screen)**: 20px horizontal
- **Safe Bottom**: `env(safe-area-inset-bottom)`

## Shadows
- **sm**: `0 2px 8px rgba(0,0,0,0.2)`
- **md**: `0 4px 15px rgba(0,0,0,0.3)`
- **lg**: `0 8px 30px rgba(0,0,0,0.5)`
- **glow**: `0 4px 15px rgba(239,105,30,0.15)`
- **btn**: `0 8px 25px rgba(239,105,30,0.4)`

## Transitions
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- **Fast**: 200ms (button press, hover)
- **Normal**: 300ms (color transitions)
- **Slow**: 500ms (entrance animations)
- **Page**: 400ms (page transitions)

## Animations (in global.css)
| Name | Usage |
|------|-------|
| `slideUp` | FAB entrance |
| `fadeIn` | General fade |
| `fadeInUp` | Content entrance |
| `fadeInDown` | Toast notifications |
| `pageEnter` | Page transition (Y) |
| `pageSlideIn` | Page transition (X) |
| `pageScaleIn` | Hero image entrance |
| `staggerIn` | Sequential reveal |
| `scaleUp` | Modal, checkmark |
| `spin` | Loader |
| `pulse` | Active order dot |
| `shimmer` | Skeleton loading |

## Shared Components (in global.css)
- `.section-label` — Uppercase label
- `.back-btn` — Circular glass back button
- `.btn-primary` — Full-width CTA
- `.page-header` — Sticky inner-page header
- `.page-footer` — Fixed glass footer
- `.bottom-actions-container` — FAB bar (30/70 split)
- `.cart-fab` — Cart floating action button
- `.order-status-btn` — Order status button
- `.upsell-card / .upsell-container` — Upsell cards
- `.toast` — Toast notification
- `.glass-panel` — Glassmorphism panel
- `.stagger-children` — Sequential reveal wrapper

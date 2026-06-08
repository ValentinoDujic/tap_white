# Screen Specification: Error Screen
**Status**: ✅ Defined

---

## Goal
Informirati korisnika da se podaci o lokalu nisu mogli učitati i ponuditi brzi oporavak.

---

## Visual Layout

```
┌─────────────────────────────┐
│         [Taplito Logo]      │  ← centered, 48dp height
│                             │
│       🚫 Ilustracija        │  ← SVG ilustracija greške, 160×160dp
│                             │
│    "Ups! Lokal nije         │  ← H1, bold, centered
│      dostupan"              │
│                             │
│  "Ne možemo učitati         │  ← Body text, centered, muted
│   podatke. Provjeri         │
│   internet vezu."           │
│                             │
│  ┌─────────────────────┐   │
│  │   Pokušaj ponovno   │   │  ← Primary Button, Orange, 48dp height
│  └─────────────────────┘   │
│                             │
│    Kontaktiraj podršku      │  ← Ghost/Text button, 48dp touch target
└─────────────────────────────┘
```

---

## Tekstualni sadržaj
| Element         | Tekst                                                                 |
|-----------------|-----------------------------------------------------------------------|
| Naslov          | "Ups! Lokal nije dostupan"                                           |
| Opis            | "Ne možemo učitati podatke ovog lokala. Provjeri internetsku vezu." |
| CTA Gumb        | "Pokušaj ponovno"                                                    |
| Sekundarni link | "Kontaktiraj podršku"                                                |
| Ilustracija     | SVG — isključen Wi-Fi ili prazna ploča (custom)                      |

---

## Funkcionalan opis
- **Auto-retry**: Aplikacija automatski ponavlja request svakih 10s.
- **Manual retry**: Gumb "Pokušaj ponovno" okida novi API poziv.
- **Support link**: Otvara mailto: ili chat u browseru.

---

## Design Notes
- Nema navigacije (header/footer) — ekran je izoliran.
- Ilustracija treba biti brand-consistent (tople boje, ne generički red X).

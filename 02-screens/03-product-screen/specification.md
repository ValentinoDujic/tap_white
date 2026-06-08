# Screen Specification: Product Screen
**Status**: ✅ Defined

---

## Goal
Prikaz svih detalja jednog proizvoda i konfiguracija (dodaci, količina) prije dodavanja u košaricu.

---

## Visual Layout

```
┌─────────────────────────────┐
│ [← Nazad]                  │  ← Overlay na Hero slici, 48dp
│                             │
│   [Hero Image — 220dp]      │  ← Full width, overlay shadow
│                             │
│         "Slika je simbolična│  ← Small badge, bottom-right
└────── BIJELA KARTICA ───────┘
│                             │
│ KAVA                        │  ← H1, 22px Bold 900
│                             │
│ DETALJI                     │  ← Section label, 11px caps
│ Cijena         1.00 EUR     │  ← Row 44dp, Orange cijena
│ Alergeni            Nema    │  ← Row 44dp
│ Kalorije          120 kcal  │  ← Row 44dp, muted text
│                             │
│ DODACI                      │  ← Section label (ako postoje)
│ ○ Punomasno mlijeko         │  ← Radio, 48dp touch
│ ○ Biljno mlijeko            │
│ ○ Bez mlijeka               │
│                             │
│ DODAJ PORUKU ZA RESTORAN    │  ← Section label
│ ┌─────────────────────────┐ │
│ │ Posebni zahtjevi...     │ │  ← Textarea, 96dp min height
│ └─────────────────────────┘ │
│                             │
│ SAVRŠENO UZ OVO             │  ← Upsell, horizontal scroll
│ [IMG][IMG][IMG] →           │
│                             │
├─────────────────────────────┤
│ [— 1 +]   Dodaj u narudžbu │  ← Sticky Footer, 72dp
│            1.00 EUR         │    Orange button, full width
└─────────────────────────────┘
```

---

## Tekstualni sadržaj
| Element              | Tekst / Ponašanje                                               |
|----------------------|-----------------------------------------------------------------|
| Naslov               | Naziv proizvoda (dinamički)                                    |
| Detalji – Cijena     | "Cijena" / "[iznos] EUR" (narančasta)                         |
| Detalji – Alergeni   | "Alergeni" / Popis alergena ili "Nema"                        |
| Detalji – Kalorije   | "Kalorije" / "[broj] kcal" ili "N/A"                          |
| Modifiers            | Ovisno o proizvodu — Radio (obavezno) ili Checkbox (opcionalno)|
| Textarea placeholder | "Posebni zahtjevi, alergije, dijetalna ograničenja? Recite nam više!" |
| Image disclaimer     | "Slika proizvoda je simbolična"                               |
| Upsell naslov        | "Savršeno uz ovo"                                             |
| Gumb                 | "Dodaj u narudžbu • [dinamički iznos] EUR"                    |

---

## Funkcionalan opis
- **Dinamička cijena**: Svaki modifier koji ima dodatnu cijenu ažurira iznos na gumbu.
- **Validacija**: Gumb je onemogućen dok obavezni radio nije izabran.
- **Quantity**: Minimalna vrijednost je 1, maksimalna po potrebi 10.
- **Upsell**: Prikazuje 3-4 artikla iz iste ili komplementarne kategorije.

---

## Design Notes
- Hero image je **full-bleed** (rub do ruba), bez bijele margine.
- Gumb za povratak je bijeli krug s transparentnošću (glassmorphism) na slici.
- Sticky footer uvijek vidljiv — ne skrola s ostatkom stranice.
- Kalorije se **ne mijenjaju dinamički** (za V1) — fiksna vrijednost po proizvodu.

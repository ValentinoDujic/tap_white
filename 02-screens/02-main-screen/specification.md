# Screen Specification: Main Screen
**Status**: ✅ Defined (Ažurirano za Caffe Bar)

---

## Goal
Brz pristup najpopularnijim stavkama, trenutna prepoznatljivost lokala i jasna "one-click" narudžba. Optimizirano za korisnike kafića nakon skeniranja QR koda.

---

## Visual Layout

```
┌─────────────────────────────┐
│                             │
│       [Slika Lokala]        │  ← Hero Image (Location)
│                             │
│  Caffe Bar Taplito          │  ← Ime lokala (Overlay)
│  🟢 Otvoreno do 23:00      │
└─────────────────────────────┘
├─────────────────────────────┤
│ Brza narudžba               │  ← Section Label, 12px caps
│                             │
│ ┌─────────┐   ┌─────────┐   │  ← 2x2 Grid, Item width ~50%
│ │ [IMG]   │   │ [IMG]   │   │    Thumbnails s [+] overlay
│ │ Espres. │   │ Macchia.│   │
│ │ 1.80€   │   │ 2.00€   │   │
│ └─────────┘   └─────────┘   │
│ ┌─────────┐   ┌─────────┐   │
│ │ [IMG]   │   │ [IMG]   │   │
│ │ Cola    │   │ Sok     │   │
│ │ 3.00€   │   │ 3.50€   │   │
│ └─────────┘   └─────────┘   │
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │   [Promo Kava+Croiss]   │ │  ← Carousel, 160dp height
│ │   Jutarnja ponuda       │ │    Dots indikator na dnu
│ └─────────────────────────┘ │
├─────────────────────────────┤
│                             │
│  [Pregledaj cijeli meni 📖] │  ← Main CTA Button
│                             │
├─────────────────────────────┤
│ [Wi-Fi 🛜]  [Javi gdje si📍] │  ← Utility row, 48dp
├─────────────────────────────┤
│      [📋 Stanje narudžbi]   │  ← Order status indicator
│ ┌──────────────────────────┐│
│ │ 🛒 Košarica • 2 • 8.40€ ││  ← Floating FAB, 56dp, full-width
│ └──────────────────────────┘│
└─────────────────────────────┘
```

---

## Tekstualni sadržaj
| Element               | Tekst / Ponašanje                                           |
|-----------------------|-------------------------------------------------------------|
| Top Header            | Sticky, stapa se s pozadinom. Sadrži logo, stol i search.   |
| Location Hero         | Ime lokala ("Caffe Bar Taplito") + radno vrijeme           |
| Brza narudžba grid    | Najprodavaniji artikli (Espresso, Cola). Cijena + add gumb. |
| Banner Carousel       | Promocije (npr. Kava + Croissant), pomaknuto ispod grida.  |
| Full menu trigger     | "Pregledaj cijeli meni 📖"                                 |
| Wi-Fi utility         | "Gost-WiFi" + "Kopiraj lozinku"                            |
| Share utility         | "Javi gdje si" — otvara Google Maps / Apple Maps           |
| Stanje narudžbi       | Gumb/pilula s animiranim statusom iznad košarice.          |
| FAB košarica          | "🛒 Košarica • [N stavki] • [Iznos]€"                      |

---

## Funkcionalnosti
- **Header Scroll Spy**: Gornji header dobiva stakleni (glass) background tek nakon što se korisnik pomakne ispod Hero slike.
- **Grid Quick Add (+)**: Gumb na slici u gridu, dodaje artikal i povećava broj u košarici.
- **Wi-Fi Copy**: Tap kopira lozinku u clipboard + toast notifikacija.
- **Order Status Pulse**: Ikona učiitavanja kad je narudžba "U pripremi".

---

## Design Notes
- Sličice kategorija su maknute s početnog ekrana kako bi se naglasak stavio na brzu vizualnu narudžbu (Grid) i atmosferu lokala (Hero slika).
- Grid omogućava korisniku da u prvih 5 sekundi skeniranja naruči osnovno piće bez listanja cijelog menija.

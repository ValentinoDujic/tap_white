# Screen Specification: Summary Screen (Košarica)
**Status**: ✅ Defined

---

## Goal
Pregled i uređivanje sadržaja košarice prije prelaska na plaćanje.

---

## Visual Layout

```
┌─────────────────────────────┐
│ [←]     Vaša narudžba      │  ← Header, 56dp
├─────────────────────────────┤
│                             │
│ [IMG] Augustiner 0.5L   [X]│  ← Row 72–88dp, thumbnail 56×56dp
│       4.20 EUR  [— 1 +]    │    X = 48dp touch, Orange qty btns
│ ─────────────────────────  │
│ [IMG] Kava             [X] │
│       1.00 EUR  [— 1 +]    │
│                             │
│ + Dodaj poruku za restoran  │  ← Collapsible, 48dp touch target
│                             │
├─────────────────────────────┤
│ Preporučujemo uz narudžbu   │  ← Upsell section
│ [IMG+][IMG+][IMG+]→         │  ← Horizontal scroll, 88dp cards
├─────────────────────────────┤
│ Međuzbir          5.20 EUR  │  ← Summary rows, 44dp each
│                             │
├─────────────────────────────┤
│ ┌──────────────────────────┐│
│ │ Nastavi na naplatu       ││  ← Orange FAB, 56dp
│ │       5.20 EUR           ││
│ └──────────────────────────┘│
└─────────────────────────────┘
```

---

## Tekstualni sadržaj
| Element               | Tekst / Ponašanje                                           |
|-----------------------|-------------------------------------------------------------|
| Header                | "Vaša narudžba"                                            |
| Svaka stavka          | Naziv proizvoda + dodaci (sitnije, muted)                  |
| Cijena stavke         | "[iznos] EUR"                                              |
| Poruka restoranu      | "+ Dodaj poruku za restoran" (expand/collapse)             |
| Upsell naslov         | "Preporučujemo uz narudžbu"                               |
| Međuzbir              | NE KORISTI SE - Koristi se "Ukupno"                        |
| Ukupno                | "Ukupno" / "[iznos] EUR"                                   |
| Gumb                  | "Nastavi na naplatu • [ukupni iznos] EUR" (bez podvlake)   |
| Empty state naslov    | "Košarica je prazna"                                      |
| Empty state CTA       | "Vrati se na meni"                                         |

---

## Funkcionalan opis
- **Real-time update**: Svaka promjena količine ažurira međuzbir i FAB.
- **Brisanje stavke**: X gumb uklanja artikl s animacijom slajda.
- **Poruka restoranu**: Jedinstven tekstualni input za cijelu košaricu (ne po stavci — to je riješeno na Product Screenu).
- **Upsell**: Artikli s "+" gumbom za direktni Quick Add.
- **Empty State**: Prikazuje se čim se briše zadnja stavka.

---

## Design Notes
- Dodaci (modifiers) su prikazani sitno ispod naziva stavke.
- Nema prikaza napojnice ovdje — ona se bira na Checkout Screenu.
- Nema detalja o metodi plaćanja — isključivo uređivanje narudžbe.
- Međuzbir ne uključuje napojnicu (prikazuje se tek na Checkoutu).

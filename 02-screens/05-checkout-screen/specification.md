# Screen Specification: Checkout Screen (Naplata)
**Status**: ✅ Defined

---

## Goal
Finalizacija narudžbe: odabir napojnice, metode plaćanja, unos e-maila i pravna suglasnost.

---

## Visual Layout

```
┌─────────────────────────────┐
│ [←]        Naplata          │  ← Header, 56dp
├─────────────────────────────┤
│ SAŽETAK NARUDŽBE            │  ← Section label
│ ×1  Augustiner 0.5L  4.20€ │  ← Read-only lista, 44dp po redu
│ ×1  Kava             1.00€ │
├─────────────────────────────┤
│ ŽELITE LI UKLJUČITI NAPOJNA │  ← Section label
│ ┌────┐  ┌────┐  ┌────┐     │
│ │10% │  │15% │  │20% │     │  ← 3 kartice 80dp, selectable
│ │0.52│  │0.78│  │1.04│     │
│ └────┘  └────┘  └────┘     │
│ Bez napojnice               │  ← Text option, 48dp touch
│ Uključujući sve poreze      │  ← Caption, muted
│ Ukupan račun      5.20 EUR  │
│ Plati             5.20 EUR  │  ← Bold, Orange
├─────────────────────────────┤
│ NAČINI PLAĆANJA             │  ← Section label
│ [Kartica] [Google Pay]      │  ← Tabs, 48dp, underline active
│ [MC logo][Maestro][VISA]    │  ← Card logos row
├─────────────────────────────┤
│ E-MAIL *                    │  ← Section label
│ ┌─────────────────────────┐ │
│ │ your@email.com          │ │  ← Input, 48dp height
│ └─────────────────────────┘ │
│ Potrebno za slanje potvrde  │  ← Caption, 12px muted
├─────────────────────────────┤
│ ☐ Slažem se s politikom     │  ← Checkbox, 48dp touch target
│   privatnosti               │
│ ☐ Prihvaćam uvjete i        │
│   odredbe naručivanja       │
├─────────────────────────────┤
│ PODACI O TRGOVCU            │  ← Section label, muted
│ Poslovno ime  THE BULLORDS  │  ← Read-only, 40dp rows
│ OIB           14334083740   │
│ Adresa        Jakovlje...   │
│                             │
│      Omogućuje [Monri]      │  ← Logo, centered, 32dp
├─────────────────────────────┤
│ ┌──────────────────────────┐│
│ │     Plati sada           ││  ← Orange, 56dp, Full width
│ │       5.20 EUR           ││
│ └──────────────────────────┘│
└─────────────────────────────┘
```

---

## Tekstualni sadržaj
| Element                  | Tekst / Ponašanje                                          |
|--------------------------|-------------------------------------------------------------|
| Header                   | "Naplata"                                                  |
| Sažetak naslov           | "Sažetak narudžbe"                                         |
| Tip naslov               | "Želite li uključiti napojnicu?"                          |
| Tip opcija 4             | "Bez napojnice" (text link)                               |
| Ukupno caption           | "Uključujući sve poreze i naknade"                        |
| Ukupan račun row         | "Ukupan račun" / "[iznos] EUR"                            |
| Plati row                | "Plati" / "[iznos+tip] EUR" (narančasto, bold)            |
| Plaćanje naslov          | "Načini plaćanja"                                         |
| Email label              | "E-mail *"                                                 |
| Email caption            | "Potrebno za slanje potvrde o plaćanju"                   |
| Checkbox 1               | "Slažem se s politikom privatnosti i pristajem na obradu mojih podataka u svrhu ove narudžbe." |
| Checkbox 2               | "Prihvaćam uvjete i odredbe koji reguliraju ovo naručivanje." |
| Trader info naslov       | "Podaci o trgovcu"                                        |
| Provider                 | "Omogućuje" + Monri logo                                  |
| Gumb                     | "Plati sada • [ukupni iznos] EUR"                         |

---

## Funkcionalan opis
- **Tip selector**: Klikom na karticu mijenja "Plati" iznos i FAB iznos.
- **Email validacija**: Real-time (regex) provjera ispravnosti e-maila.
- **Gumb blokiran**: Dok oba checkboxa nisu označena + email valjan.
- **Google Pay tab**: Prikazuje Google Pay native button.
- **Kartica tab**: Prikazuje unos kartičnih podataka (Monri form).

---

## Design Notes
- Sažetak narudžbe je **read-only** — bez mogućnosti editiranja (to je rješeno u Košarici).
- Linkovi u checkboxovima su podvučeni i narančasti (nisu disabled).
- Podaci o trgovcu su vizualno "u pozadini" (muted) — obavezni ali ne vizualno dominantni.
- Monri logo je certifikacijski element — ne smije se ukloniti.

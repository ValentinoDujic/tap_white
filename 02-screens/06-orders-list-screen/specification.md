# Screen Specification: Orders Screen (Popis narudžbi)
**Status**: ✅ Defined

---

## Goal
Pregled svih aktivnih i prošlih narudžbi korisnika za ovaj lokal/sesiju.

---

## Visual Layout

```
┌─────────────────────────────┐
│ [←]    Moje narudžbe        │  ← Header, 56dp
├─────────────────────────────┤
│ [  Aktivno  ] [ Povijest  ] │  ← Tabs, 48dp, underline active
├─────────────────────────────┤
│                             │
│ ┌─────────────────────────┐ │
│ │ THE BULLORDS    🟡U prip│ │  ← Naziv + Status badge, desno
│ │ Danas, 21:15            │ │  ← Datum/Vrijeme, muted
│ │ Augustiner × 1, Kava ×1│ │  ← Sažetak artikala, 12px
│ │ 5.20 EUR    [Detalji →] │ │  ← Iznos lijevo, gumb desno
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │  ← Prošla narudžba
│ │ THE BULLORDS    🟢Završ │ │
│ │ 09.05.2026, 19:40       │ │
│ │ Burger × 2, Voda × 1   │ │
│ │ 14.80 EUR   [Naruči→]  │ │  ← "Naruči ponovno" za povijest
│ └─────────────────────────┘ │
│                             │
│  ─── PRAZNO STANJE ───      │
│    🧾 Ilustracija           │  ← Prikazuje se samo ako nema narudžbi
│    "Nemaš još narudžbi"     │
│    [Otvori meni]            │
└─────────────────────────────┘
```

---

## Status Badges
| Status        | Boja    | Tekst             |
|---------------|---------|-------------------|
| U pripremi    | 🟡 Žuta | "U pripremi"      |
| Dostavljeno   | 🔵 Plava| "Dostavljeno"     |
| Završeno      | 🟢 Zelena| "Završeno"       |
| Otkazano      | 🔴 Crvena| "Otkazano"       |

---

## Tekstualni sadržaj
| Element              | Tekst / Ponašanje                                        |
|----------------------|----------------------------------------------------------|
| Header               | "Moje narudžbe"                                         |
| Tab 1                | "Aktivno"                                               |
| Tab 2                | "Povijest"                                              |
| Kartica – naziv      | Naziv lokala (dinamički)                                |
| Kartica – datum      | "Danas, HH:MM" ili "DD.MM.YYYY, HH:MM"                 |
| Kartica – sažetak    | "[Artikl] × [N], [Artikl] × [N]..."                    |
| Kartica – gumb aktiv | "Detalji →"                                             |
| Kartica – gumb pov.  | "Naruči ponovno →"                                      |
| Empty state naslov   | "Nemaš još narudžbi"                                    |
| Empty state CTA      | "Otvori meni"                                           |

---

## Funkcionalan opis
- **Aktivno tab**: Prikazuje samo narudžbe sa statusom "U pripremi" i "Dostavljeno".
- **Povijest tab**: Prikazuje "Završeno" i "Otkazano".
- **Live status**: Status badge na aktivnoj narudžbi se ažurira bez refresha.
- **"Naruči ponovno"**: Dodaje iste stavke iz stare narudžbe u novu košaricu.
- **"Detalji"**: Vodi na Order Detail Screen.

---

## Design Notes
- Kartice su odvojene bijelim razmakom (ne linijama) — vizualno čišće.
- Gumbi "Detalji" i "Naruči ponovno" su **isključivo na kartici** — nema globalnih akcija.
- Nema filtriranja po datumu za V1 — samo dva taba.

# Screen Specification: Order Detail Screen (Detalji narudžbe)
**Status**: ✅ Defined

---

## Goal
Detaljan prikaz jedne narudžbe — live praćenje statusa i digitalni račun.

---

## Visual Layout

```
┌─────────────────────────────┐
│ [←]    Narudžba #12345      │  ← Header, 56dp
├─────────────────────────────┤
│ PRAĆENJE NARUDŽBE           │  ← Section label
│                             │
│ ●────────●────────○         │
│Primljeno  U pripr.  Poslužen│  ← Horizontalna crta, 48dp zona
│                             │    Aktivan step = pulsing orange dot
├─────────────────────────────┤
│ STAVKE                      │  ← Section label
│                             │
│ Augustiner 0.5L    4.20 EUR │  ← Row 44dp
│                             │
│ Kava               1.00 EUR │
│   Biljno mlijeko            │  ← Modifier, 12px muted ispod
│                             │
├─────────────────────────────┤
│ OBRAČUN                     │  ← Section label
│ Međuzbir           5.20 EUR │  ← Row 40dp
│ Napojnica (10%)    0.52 EUR │
│ ─────────────────────────── │  ← Dashed divider
│ Ukupno plaćeno     5.72 EUR │  ← Bold, 16px
│                             │
│ Plaćeno karticom   Visa ●●●●│  ← Muted row, 40dp
│ Datum      10.05.2026 21:20 │
├─────────────────────────────┤
│ PODACI O LOKALU             │  ← Section label
│ THE BULLORDS d.o.o.         │
│ Jakovlje, Toplička cesta 9B │
│ [Otvori na karti 🗺️]        │  ← 48dp touch target
├─────────────────────────────┤
│ ┌──────────────────────────┐│
│ │      Naruči ponovno      ││  ← Primary orange, 56dp
│ └──────────────────────────┘│
│   Preuzmi PDF račun  ↓      │  ← Secondary text button, 48dp
└─────────────────────────────┘
```

---

## Tekstualni sadržaj
| Element              | Tekst / Ponašanje                                         |
|----------------------|-----------------------------------------------------------|
| Header               | "Narudžba #[broj]"                                       |
| Tracker naslov       | "Praćenje narudžbe"                                      |
| Tracker korak 1      | "Primljeno"                                              |
| Tracker korak 2      | "U pripremi"                                             |
| Tracker korak 3      | "Posluženo"                                              |
| Stavke naslov        | "Stavke"                                                 |
| Obračun naslov       | "Obračun"                                                |
| Obračun – Međuzbir   | "Međuzbir" / "[iznos] EUR"                               |
| Obračun – Napojnica  | "Napojnica ([%])" / "[iznos] EUR"                        |
| Obračun – Ukupno     | "Ukupno plaćeno" / "[iznos] EUR" (bold)                  |
| Plaćanje             | "Plaćeno karticom" + zadnje 4 znamenke / "Datum"         |
| Lokal naslov         | "Podaci o lokalu"                                        |
| Lokal – Adresa       | Puna adresa                                              |
| Mapa gumb            | "Otvori na karti"                                        |
| Primarni gumb        | "Naruči ponovno"                                         |
| Sekundarni gumb      | "Preuzmi PDF račun ↓"                                    |

---

## Funkcionalan opis
- **Live Tracker**: Status se ažurira iz sustava bez osvježavanja stranice.
- **Pulsing Dot**: Aktivni korak ima animirani puls (CSS animation) u narančastoj boji.
- **"Naruči ponovno"**: Kreira novu košaricu s istim stavkama.
- **Mapa gumb**: Otvara Google Maps / Apple Maps s adresom lokala.
- **PDF račun**: Generira se server-side, download direktno u browser.

---

## Design Notes
- Napojnica se prikazuje **samo ako je korisnik odabrao** — inače taj redak nije vidljiv.
- Modifiers (dodaci) su prikazani sitno ispod naziva stavke.
- Nema mogućnosti editiranja — screen je isključivo read-only prikaz.
- Tracker prikazuje max 3 koraka za V1 (nema "dostava na adresu").

# Screen Specification: Success Screen (Uspješno plaćanje)
**Status**: ✅ Defined

---

## Goal
Emocionalni vrhunac korisničkog puta — potvrditi uspješnu transakciju i usmjeriti na praćenje narudžbe.

---

## Visual Layout

```
┌─────────────────────────────┐
│                             │
│   🎉 [Konfeti animacija]    │  ← CSS/JS konfeti, 2-3 sec
│                             │
│      ✅                     │  ← Animirani checkmark, 80dp
│   (narančasti krug)         │    Draw/scale in animacija
│                             │
│   Hvala na narudžbi!        │  ← H1, 24px, Bold 900, centered
│                             │
│  Tvoja narudžba je          │  ← Body, 14px, Muted, centered
│  uspješno zaprimljena.      │
│                             │
│  ┌────────────────────────┐ │
│  │     Narudžba #12345    │ │  ← Info chip, 48dp, outlined
│  └────────────────────────┘ │
│                             │
│  📧 Račun je poslan na      │  ← Caption, 12px muted, centered
│     tvoj e-mail             │
│                             │
│                             │
│                             │
│ ┌──────────────────────────┐│
│ │     Prati narudžbu →     ││  ← Primary orange, 56dp
│ └──────────────────────────┘│
│                             │
│    Vrati se na meni         │  ← Ghost / Text button, 48dp touch
└─────────────────────────────┘
```

---

## Tekstualni sadržaj
| Element              | Tekst / Ponašanje                                         |
|----------------------|-----------------------------------------------------------|
| Naslov               | "Hvala na narudžbi!"                                     |
| Podnaslov            | "Tvoja narudžba je uspješno zaprimljena."                |
| Broj narudžbe        | "Narudžba #[broj]" (dynamički)                           |
| Email potvrda        | "Račun je poslan na tvoj e-mail"                         |
| Primarni gumb        | "Prati narudžbu →"                                       |
| Sekundarni gumb      | "Vrati se na meni"                                       |

---

## Funkcionalan opis
- **Animacija**: Konfeti + checkmark animacija se pokreće čim se ekran učita (jednom).
- **Primarni gumb**: Vodi na **Order Detail Screen** (#12345).
- **Sekundarni gumb**: Vodi na **Main Screen** (u slučaju da korisnik želi naručiti još).
- **Auto-redirect**: Opcijski, nakon 10s automatski vodi na Order Detail.

---

## Design Notes
- Nema headera s "natrag" gumbom — korisnik ne smije ići "nazad na checkout".
- Konfeti su diskretni — ne preveliki, ne predugo trajanje.
- Checkmark animacija: kružni outline se iscrtava pa se pojavi kvačica.
- Ekran je "clean" — minimalan broj elemenata, maksimalan emocionalni impakt.
- **Ne prikazujemo** detalje artikala ni iznos ovdje — to je u Order Detail-u.

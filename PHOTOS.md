# Photos

23 slots are filled (20 on Life, 3 on Work). Files live in `public/photos/` under the exact filenames
below and appear automatically — no code change needed. If a file is missing
the site falls back to a colour placeholder, so it never breaks.

**Housekeeping**

- Format: JPG, sRGB colour profile
- Long edge: 1600–2000px is plenty (anything bigger just slows the page down)
- File size: aim under 400 KB each — run them through [squoosh.app](https://squoosh.app) if needed
- Filenames are **case-sensitive** on Vercel. `Hero-Portrait.jpg` ≠ `hero-portrait.jpg`
- GPS/EXIF is already stripped from the current files

---

## Life page — 20 slots

### Opening

| Plate | Filename | Shape | Where |
|---|---|---|---|
| 00 | `hero-portrait.jpg` | 3:4 portrait | Top right, beside your name |

### 01 Everyday

| Plate | Filename | Shape | Where |
|---|---|---|---|
| 01 | `everyday-01.jpg` | 4:5 portrait | Left, large |
| 02 | `everyday-02.jpg` | 3:4 portrait | Right, pushed down |
| 03 | `everyday-03.jpg` | 5:6 portrait | Lower left |
| 04 | `everyday-04.jpg` | 3:4 portrait | Lower right |

### 02 Badminton

No captions on these four — they're rendered bare (`bare: true`).

| Filename | Shape | Where |
|---|---|---|
| `badminton-01.jpg` | 3:2 landscape | Wide left |
| `badminton-02.jpg` | 3:2 landscape | Wide right |
| `badminton-03.jpg` | 4:5 portrait | Lower left |
| `badminton-04.jpg` | 2:3 portrait | Lower right |

### 03 Travel

| Plate | Filename | Shape | Where |
|---|---|---|---|
| 05 | `travel-01.jpg` | 4:5 portrait | A Famosa, Melaka |
| 06 | `travel-02.jpg` | 3:4 portrait | Christ Church, Melaka |
| 07 | `travel-09.jpg` | 4:3 landscape | Street-art mural, wide |
| 08 | `travel-03.jpg` | 3:5 tall | Kin Loong Valley |
| 09 | `travel-04.jpg` | 3:5 tall | Petronas Towers, KL |
| 10 | `travel-05.jpg` | 3:4 portrait | Paper lanterns |
| 11 | `travel-06.jpg` | 1:1 square | Jetty |
| 12 | `travel-07.jpg` | 3:4 portrait | Statue at night |
| 13 | `travel-08.jpg` | 3:4 portrait | Dragon balustrade |

### 04 University

| Plate | Filename | Shape | Where |
|---|---|---|---|
| 14 | `uni-01.jpg` | 5:4 landscape | Convocation stage, wide |
| 15 | `uni-02.jpg` | 2:3 portrait | Gown, right |

---

## Originals

`photos-originals/` holds all 50 source photos, sorted by category
(`badminton-01..07`, `outdoor-01..09`, `nature-01..06`, `travel-01..18`,
`portrait-01..07`, `uni-01..02`, `work-01`). It sits outside `public/`, so
nothing there gets deployed. Swap a slot by copying one of these over the
matching filename in `public/photos/`.

## Unused

`photos-unused/` holds the five files that were pulled when the Hiking and Now
chapters were removed: `hike-01..03`, `hike-camp`, `closing`. Also outside
`public/`, so they don't deploy. Bring a chapter back by copying the files into
`public/photos/` and restoring the chapter block in `content/life.ts` and
`app/page.tsx`.

## Work page — 3 figures

Documentary plates in the Awards chapter only. The rest of the page stays
text-only on purpose — that contrast is the point.

| Figure | Filename | Shape | Where |
|---|---|---|---|
| Fig. 01 | `award-nexus.jpg` | 3:4 portrait | Digital Nexus 2025, on stage |
| Fig. 02 | `award-borneo.jpg` | 4:3 landscape | Borneo InTEX Gold medal + certificate |
| Fig. 03 | `award-sains.jpg` | 3:2 landscape | SAINS Special Award, on stage |

## Other files

| File | Where |
|---|---|
| `public/cv.pdf` | The "Download CV" link on the work page — **not added yet** |

---

## If a photo doesn't show up

1. Check the filename matches exactly, including the extension (`.jpg` not `.jpeg`)
2. Confirm it's in `public/photos/`, not `public/`
3. Hard-refresh (Ctrl/Cmd + Shift + R) — the browser caches images aggressively

## Changing the shape of a slot

Aspect ratio and grid position for every photo live in `content/life.ts`.
Look for `ratio` (`'4 / 5'`, `'1 / 1'`, `'3 / 5'`) and `span`
(`'1 / 8'` = columns 1 to 7 of a 12-column grid). Each entry also records the
source file's real pixel dimensions, so you can pick a `ratio` close to it and
avoid cropping through someone's head.

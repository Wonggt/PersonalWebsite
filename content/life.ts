// ── Life page content ─────────────────────────────────────────
// Every photo slot has a `src`. Drop the file into public/photos/
// with that name and it appears — no code change needed.
// Missing files fall back to the tone placeholder automatically.
//
// Ratio notes: `ratio` is the CSS aspect-ratio of the crop box.
// Match it to the source file's real ratio where you can — the
// source dimensions are listed next to each plate below.
//
// Set `bare: true` on a photo to render it with no caption block.

export type Photo = {
  src: string
  alt: string
  tone: string
  no?: string
  caption?: string
  ratio: string
  span: string
  offset?: string
  bare?: boolean
}

export const hero = {
  kicker: 'Kuala Lumpur, Malaysia',
  runningHead: 'Portfolio — Vol. 01',
  lede: 'I write code most days. The rest of the time I’m on a badminton court, in a coffee shop, or on a plane to somewhere I haven’t been.',
  note: '(And no, this page doesn’t sound like LinkedIn.)',
  photo: {
    // 960 × 1280 — 3:4, exact
    src: '/photos/hero-portrait.jpg',
    alt: 'Andrew outdoors in Kuala Lumpur, sunglasses on',
    tone: 'tone-a',
    no: 'Plate 00',
    caption: 'Kuala Lumpur. The light here does most of the work.',
    ratio: '3 / 4',
  },
}

export const marquee = [
  'Badminton',
  'Coffee',
  'Travel',
  'University',
  'Late nights',
  'Weekends',
  'Long drives',
  'Airports',
]

export const everyday = {
  no: '01',
  label: 'Everyday',
  title: 'Ordinary days, ',
  titleEm: 'noticed',
  titleEnd: ' properly.',
  intro:
    'I’m not the type to schedule my life into a calendar. More like: think of something, do it, then decide afterwards whether it’s worth writing down. These are the ones I wrote down.',
  photos: [
    {
      // 959 × 1280 — 0.75
      src: '/photos/everyday-01.jpg',
      alt: 'Andrew sitting on a tiled staircase in a black t-shirt',
      tone: 'tone-c',
      no: 'Plate 01',
      caption: 'Sat on the stairs for one photo. Ended up taking about ten.',
      ratio: '4 / 5',
      span: '1 / 6',
    },
    {
      // 957 × 1293 — 0.74
      src: '/photos/everyday-02.jpg',
      alt: 'Mirror photo in a bright room, white t-shirt',
      tone: 'tone-c',
      no: 'Plate 02',
      caption: 'Mirror check before going out. The room had better lighting than I did.',
      ratio: '3 / 4',
      span: '7 / 12',
      offset: '96px',
    },
    {
      // 960 × 1226 — 0.78
      src: '/photos/everyday-03.jpg',
      alt: 'Andrew by the sea with sunglasses, hand raised to the light',
      tone: 'tone-d',
      no: 'Plate 03',
      caption: 'Squinting at the sea through sunglasses. Pose entirely unplanned.',
      ratio: '5 / 6',
      span: '2 / 7',
    },
    {
      // 810 × 1080 — 0.75
      src: '/photos/everyday-04.jpg',
      alt: 'Andrew under trees with a cap on, rope swing behind',
      tone: 'tone-b',
      no: 'Plate 04',
      caption: 'Found a rope swing. Obviously had to test it first.',
      ratio: '3 / 4',
      span: '8 / 12',
      offset: '48px',
    },
  ] satisfies Photo[],
}

export const badminton = {
  no: '02',
  label: 'Badminton',
  title: 'Three times a week, ',
  titleEm: 'rain or not',
  titleEnd: '.',
  paragraphs: [
    'I\u2019ve been playing since secondary school. The skill hasn\u2019t improved much; the enthusiasm never left. What I like isn\u2019t winning \u2014 it\u2019s the point where you\u2019re breathing too hard to think about anything else.',
    'The people I\u2019ve met in halls have stayed longer than most. Some I\u2019ve played with since university. One of them has a kid now and still books the court every week.',
  ],
  score: [
    { k: 'Per week', v: '3 times' },
    { k: 'Plays', v: 'Doubles' },
    { k: 'Best shot', v: 'Drop shot' },
    { k: 'Most said', v: '\u201cOne more game\u201d' },
  ],
  // No captions here on purpose — the photos carry it.
  photos: [
    {
      // 1080 × 720 — 1.5
      src: '/photos/badminton-01.jpg',
      alt: 'A doubles rally on an indoor badminton court, spectators behind',
      tone: 'tone-a',
      ratio: '3 / 2',
      span: '1 / 8',
      bare: true,
    },
    {
      // 1080 × 720 — 1.5
      src: '/photos/badminton-02.jpg',
      alt: 'A player mid-smash with teammates waiting on the bench',
      tone: 'tone-e',
      ratio: '3 / 2',
      span: '8 / 13',
      offset: '80px',
      bare: true,
    },
    {
      // 810 × 1080 — 0.75
      src: '/photos/badminton-03.jpg',
      alt: 'Andrew on court holding a racket',
      tone: 'tone-a',
      ratio: '4 / 5',
      span: '2 / 6',
      bare: true,
    },
    {
      // 716 × 1081 — 0.66
      src: '/photos/badminton-04.jpg',
      alt: 'Andrew in a red jersey holding a racket on court',
      tone: 'tone-e',
      ratio: '2 / 3',
      span: '7 / 11',
      offset: '40px',
      bare: true,
    },
  ] satisfies Photo[],
  note: '(Phone photos. Bad quality, good light.)',
}

export const travel = {
  no: '03',
  label: 'Travel',
  title: 'Anywhere with a ',
  titleEm: 'cheap flight',
  titleEnd: ' and a free weekend.',
  intro:
    'Most of these started as a two-day plan that turned into four. I’m not a good planner — I pick a place, book the room, and work the rest out on the ground. It has gone wrong maybe twice.',
  photos: [
    {
      // 880 × 1080 — 0.81
      src: '/photos/travel-01.jpg',
      alt: 'Andrew standing under a stone archway at A Famosa, Melaka',
      tone: 'tone-d',
      no: 'Plate 05',
      caption: 'A Famosa, Melaka. Older than every building I’ve lived in, combined.',
      ratio: '4 / 5',
      span: '1 / 6',
    },
    {
      // 810 × 1080 — 0.75
      src: '/photos/travel-02.jpg',
      alt: 'Andrew in front of the red Christ Church in Melaka',
      tone: 'tone-a',
      no: 'Plate 06',
      caption: 'Christ Church, Melaka. Built 1753, still the reddest thing in town.',
      ratio: '3 / 4',
      span: '7 / 12',
      offset: '80px',
    },
    {
      // 1080 × 810 — 1.33
      src: '/photos/travel-09.jpg',
      alt: 'Andrew and a friend standing in front of a street-art mural of a cart loaded with sacks',
      tone: 'tone-c',
      no: 'Plate 07',
      caption: 'Street art, mid touch-up. We were standing next to the paint tins.',
      ratio: '4 / 3',
      span: '1 / 8',
    },
    {
      // 608 × 1080 — 0.56
      src: '/photos/travel-03.jpg',
      alt: 'Andrew under the Kin Loong Valley archway below a limestone cliff',
      tone: 'tone-c',
      no: 'Plate 08',
      caption: 'Kin Loong Valley. A limestone cave, a coffee brand, and a very big sign.',
      ratio: '3 / 5',
      span: '8 / 12',
      offset: '60px',
    },
    {
      // 608 × 1080 — 0.56
      src: '/photos/travel-04.jpg',
      alt: 'Andrew in front of the Petronas Twin Towers at night',
      tone: 'tone-d',
      no: 'Plate 09',
      caption: 'An evening above the city.',
      ratio: '3 / 5',
      span: '1 / 5',
    },
    {
      // 960 × 1280 — 0.75
      src: '/photos/travel-05.jpg',
      alt: 'Andrew standing beneath strings of colourful paper lanterns',
      tone: 'tone-a',
      no: 'Plate 10',
      caption: 'A ceiling of paper lanterns, and about nine attempts at this photo.',
      ratio: '3 / 4',
      span: '5 / 9',
      offset: '120px',
    },
    {
      // 868 × 868 — 1:1, exact
      src: '/photos/travel-06.jpg',
      alt: 'A jetty over clear water with boats moored alongside',
      tone: 'tone-b',
      no: 'Plate 11',
      caption: 'A jetty, a boat that was late, and nobody who minded.',
      ratio: '1 / 1',
      span: '9 / 13',
      offset: '40px',
    },
    {
      // 720 × 960 — 0.75
      src: '/photos/travel-07.jpg',
      alt: 'Andrew mimicking the raised hand of a floodlit statue at night',
      tone: 'tone-d',
      no: 'Plate 12',
      caption: 'Found a statue doing my exact pose. No notes.',
      ratio: '3 / 4',
      span: '2 / 6',
    },
    {
      // 780 × 1040 — 0.75
      src: '/photos/travel-08.jpg',
      alt: 'Andrew leaning on a dragon-headed stone balustrade by the water',
      tone: 'tone-c',
      no: 'Plate 13',
      caption: 'Leaning on a dragon. As one does.',
      ratio: '3 / 4',
      span: '7 / 11',
      offset: '96px',
    },
  ] satisfies Photo[],
}

export const university = {
  no: '04',
  label: 'University',
  title: 'Four years, mostly ',
  titleEm: 'outside',
  titleEnd: ' the syllabus.',
  paragraphs: [
    'Maybe thirty percent of what I learned came from lectures. The other seventy came from a club, from things built at 3am, and from the people around me.',
    'If I had to compress it into one line: I learned how to take something nobody had done before and carry it from zero to something you can put in front of other people. I still use that every week.',
  ],
  quote: 'What stayed with me was the work nobody asked me to do.',
  quoteBy: 'Note to my twenty-year-old self',
  photos: [
    {
      // 1076 × 861 — 1.25
      src: '/photos/uni-01.jpg',
      alt: 'Andrew on stage at convocation receiving his scroll',
      tone: 'tone-a',
      no: 'Plate 14',
      caption: 'Convocation. Four years compressed into eleven seconds of walking.',
      ratio: '5 / 4',
      span: '1 / 8',
    },
    {
      // 741 × 1080 — 0.69
      src: '/photos/uni-02.jpg',
      alt: 'Andrew in a graduation gown in front of a wall of books',
      tone: 'tone-d',
      no: 'Plate 15',
      caption: 'One last photo before they asked for the books back.',
      ratio: '2 / 3',
      span: '8 / 12',
      offset: '72px',
    },
  ] satisfies Photo[],
}

export const footer = {
  mark: 'See you out there.',
}

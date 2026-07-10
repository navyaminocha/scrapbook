# For Brahmya — Our Story 💛

A scrapbook-style React site: one fullscreen "page" per chapter, page-turn
transitions, two mini-quizzes, a memory jar, and a letter that unfolds from
an envelope.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Make it yours

Everything personal — the intro text, chapter copy, quiz questions/answers,
photo captions, "things I love about you" notes, the future checklist, and
the letter — lives in **one file**: `src/data/content.js`. Edit that file
and the whole site updates.

### Adding real photos

1. Drop image files into `src/assets/`.
2. In the page file (e.g. `src/pages/Chapter1.jsx`), import the photo:
   `import photo1 from "../assets/photo1.jpg";`
3. Pass it to the `<Polaroid img={photo1} ... />` prop. Until you do this,
   polaroids show a soft placeholder so the layout still looks complete.

### Adding music

Drop an mp3 into `src/assets/`, import it in `src/App.jsx`, and pass it to
`<MusicPlayer src={yourSong} />`.

### About the background

The brief asked for an attached gingham background image, but no image
file actually came through with the prompt — so the beige gingham + warm
paper-grain texture in `src/index.css` (`.scrapbook-bg` / `.paper-grain`)
is built entirely from CSS gradients and an SVG noise filter, no image
asset needed. If you'd rather use a real photographed gingham/paper
texture, drop it in `src/assets`, reference it as a `background-image` in
`.scrapbook-bg` in `src/index.css`, and remove the gradient background.

## Structure

```
src/
  assets/            put photos + music here
  components/        Polaroid, Timeline, QuizCard, MemoryJar, Letter,
                      FloatingDecor, MusicPlayer, PaperNote, PageArrow
  pages/             Intro, Chapter1, Chapter2, Quiz1, Memories,
                      Appreciation, Quiz2, Emotional, Present, Future, Ending
  data/content.js    all editable personal text/photos/quiz content
  App.jsx            page navigation + page-turn transitions
```

## Deploying

`npm run build` outputs a static site to `dist/` — drag that folder into
Netlify/Vercel, or serve it from any static host, to send Brahmya the link.

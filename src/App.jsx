import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Intro from "./pages/Intro";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Quiz1 from "./pages/Quiz1";
import Memories from "./pages/Memories";
import Appreciation from "./pages/Appreciation";
import Quiz2 from "./pages/Quiz2";
import Emotional from "./pages/Emotional";
import Present from "./pages/Present";
import Future from "./pages/Future";
import Ending from "./pages/Ending";

import MusicPlayer from "./components/MusicPlayer";
import MemoryJar from "./components/MemoryJar";
import Letter from "./components/Letter";
import birthdaySong from "./assets/song.mp3";
import { memoryJarEntries, letter } from "./data/content";

const PAGE_KEYS = [
  "intro",
  "chapter1",
  "chapter2",
  "quiz1",
  "gallery",
  "appreciation",
  "quiz2",
  "emotional",
  "present",
  "future",
  "ending",
];

// page-turn animation: the incoming page swings in like a paper leaf
const pageVariants = {
  initial: { opacity: 0, rotateY: 12, x: 60, transformOrigin: "left center" },
  animate: { opacity: 1, rotateY: 0, x: 0, transformOrigin: "left center" },
  exit: { opacity: 0, rotateY: -12, x: -60, transformOrigin: "right center" },
};

const pageTransition = { duration: 0.9, ease: [0.45, 0, 0.2, 1] };

export default function App() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => Math.min(i + 1, PAGE_KEYS.length - 1));
  const jumpTo = (key) => {
    const i = PAGE_KEYS.indexOf(key);
    if (i !== -1) setIndex(i);
  };

  const currentKey = PAGE_KEYS[index];
  const showChrome = currentKey !== "intro";

  const page = useMemo(() => {
    switch (currentKey) {
      case "intro":
        return <Intro onBegin={next} />;
      case "chapter1":
        return <Chapter1 onNext={next} />;
      case "chapter2":
        return <Chapter2 onNext={next} />;
      case "quiz1":
        return <Quiz1 onNext={next} />;
      case "gallery":
        return <Memories onNext={next} />;
      case "appreciation":
        return <Appreciation onNext={next} />;
      case "quiz2":
        return <Quiz2 onNext={next} />;
      case "emotional":
        return <Emotional onNext={next} />;
      case "present":
        return <Present onNext={next} />;
      case "future":
        return <Future onNext={next} />;
      case "ending":
        return <Ending onJump={jumpTo} />;
      default:
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentKey]);

  return (
    <div className="relative h-screen w-screen" style={{ perspective: 1600 }}>
      <div className="scrapbook-bg" />
      <div className="paper-grain" />
      <div className="cream-veil" />

      {showChrome && (
        <>
          <MusicPlayer src={birthdaySong} />
          <MemoryJar entries={memoryJarEntries} />
          <Letter greeting={letter.greeting} body={letter.body} signoff={letter.signoff} />
        </>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentKey}
          className="absolute inset-0 h-full w-full"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          style={{ transformStyle: "preserve-3d" }}
        >
          {page}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

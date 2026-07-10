import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageArrow from "../components/PageArrow";
import { emotional } from "../data/content";

function TypewriterLine({ text, onDone, active }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!active) return;
    setShown("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(onDone, 700);
      }
    }, 45);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, text]);

  return (
    <p className="font-heading text-3xl italic text-ivory md:text-4xl min-h-[3rem]">
      {shown}
      {active && shown.length < text.length && (
        <span className="ml-1 animate-pulse">|</span>
      )}
    </p>
  );
}

export default function Emotional({ onNext }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const advance = () => {
    if (lineIndex < emotional.lines.length - 1) {
      setLineIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center bg-choco/85 px-6">
      <div className="flex min-h-[10rem] max-w-lg flex-col items-center justify-center gap-4 text-center">
        {emotional.lines.slice(0, lineIndex + 1).map((line, i) =>
          i === lineIndex ? (
            <TypewriterLine key={i} text={line} active onDone={advance} />
          ) : (
            <p key={i} className="font-heading text-lg italic text-ivory/40">
              {line}
            </p>
          )
        )}
      </div>

      <AnimatePresence>
        {finished && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
            <PageArrow onClick={onNext} label="keep going" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

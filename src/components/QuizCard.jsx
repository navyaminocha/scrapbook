import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONFETTI_COLORS = ["#C98F7B", "#8A9A7B", "#A97C50", "#E8DCC4", "#6B4A32"];

function ConfettiBurst() {
  const pieces = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {pieces.map((_, i) => {
        const angle = (i / pieces.length) * 360;
        const distance = 80 + Math.random() * 60;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;
        return (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-sm"
            style={{ backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length] }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x, y, opacity: 0, scale: 0.4, rotate: 180 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}

/**
 * question, options: string[], correctIndex: number, onContinue: () => void
 */
export default function QuizCard({ question, options, correctIndex, onContinue }) {
  const [selected, setSelected] = useState(null);
  const [wrongShake, setWrongShake] = useState(null);
  const isCorrect = selected === correctIndex;

  const handleSelect = (i) => {
    if (isCorrect) return;
    if (i === correctIndex) {
      setSelected(i);
    } else {
      setWrongShake(i);
      setTimeout(() => setWrongShake(null), 500);
    }
  };

  return (
    <motion.div
      className="stitched relative mx-auto w-full max-w-md rounded-md bg-ivory p-8 shadow-paper"
      initial={{ opacity: 0, y: 40, rotate: -1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: -1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <span className="tape absolute -top-3 left-8 h-6 w-16 -rotate-6 rounded-sm" aria-hidden="true" />
      <h3 className="mb-1 text-center font-heading text-3xl italic text-brown-deep">
        Mini Quiz!
      </h3>
      <p className="mb-6 text-center font-body text-base text-choco/80">{question}</p>

      <div className="flex flex-col gap-3">
        {options.map((opt, i) => {
          const showCorrect = isCorrect && i === correctIndex;
          return (
            <motion.button
              key={i}
              onClick={() => handleSelect(i)}
              animate={wrongShake === i ? { x: [0, -8, 8, -6, 6, 0] } : {}}
              transition={{ duration: 0.45 }}
              className={`rounded-sm border px-4 py-2 text-left font-body text-sm transition-colors
                ${showCorrect
                  ? "border-sage bg-sage/20 text-choco"
                  : "border-brown-muted/40 bg-beige-light/60 text-choco hover:bg-beige-dark/40"}`}
              disabled={isCorrect}
            >
              {opt}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {isCorrect && (
          <motion.div
            className="relative mt-6 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="relative">
              <ConfettiBurst />
              <motion.span
                className="block text-3xl text-rose"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.3, 1] }}
                transition={{ duration: 0.6 }}
              >
                ♥
              </motion.span>
            </div>
            <p className="font-hand text-2xl text-brown-deep">Yes! Exactly right.</p>
            <button
              onClick={onContinue}
              className="mt-1 rounded-full border border-brown-deep/40 bg-brown-deep px-6 py-2 font-body text-sm text-ivory shadow-tape transition-transform hover:scale-105"
            >
              Continue →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

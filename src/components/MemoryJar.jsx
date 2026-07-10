import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MemoryJar({ entries = [] }) {
  const [open, setOpen] = useState(false);
  const [memory, setMemory] = useState(null);

  const handleOpen = () => {
    const pick = entries[Math.floor(Math.random() * entries.length)];
    setMemory(pick);
    setOpen(true);
  };

  return (
    <>
      <motion.button
        onClick={handleOpen}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full border border-brown-deep/30 bg-ivory/90 px-4 py-2 font-hand text-lg text-brown-deep shadow-paper backdrop-blur-sm"
        whileHover={{ scale: 1.06, rotate: -2 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Open memory jar"
      >
        🫙 Memory Jar
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-choco/40 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="stitched relative max-w-sm rounded-md bg-ivory p-8 text-center shadow-paper"
              initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="tape absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-2 rounded-sm" aria-hidden="true" />
              <p className="mb-2 font-heading text-2xl italic text-brown-deep">
                A little memory...
              </p>
              <p className="font-hand text-2xl leading-snug text-choco">{memory}</p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full border border-brown-deep/40 px-5 py-1.5 font-body text-sm text-brown-deep hover:bg-beige-dark/40"
              >
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

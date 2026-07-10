import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Letter({ greeting, body, signoff }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-brown-deep/30 bg-ivory/90 px-4 py-2 font-hand text-lg text-brown-deep shadow-paper backdrop-blur-sm"
        whileHover={{ scale: 1.06, rotate: 2 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Open letter"
      >
        ✉️ A letter for you
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
            <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
              {/* envelope back */}
              <motion.div
                className="absolute inset-0 rounded-md bg-brown-muted/80 shadow-paper"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 1 }}
                style={{ transformOrigin: "top" }}
              />
              {/* envelope flap */}
              <motion.div
                className="absolute left-0 top-0 h-1/2 w-full origin-top bg-brown-deep/90"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                initial={{ rotateX: 0 }}
                animate={{ rotateX: open ? -170 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              {/* letter paper unfolding upward */}
              <motion.div
                className="stitched relative z-10 mx-4 mt-10 rounded-sm bg-ivory p-8 shadow-paper"
                initial={{ y: 60, opacity: 0, scale: 0.85 }}
                animate={{ y: -10, opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              >
                <p className="mb-4 font-hand text-2xl text-brown-deep">{greeting}</p>
                <p className="mb-4 whitespace-pre-line font-hand text-xl leading-relaxed text-choco">
                  {body}
                </p>
                <p className="font-hand text-2xl text-brown-deep">{signoff}</p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-full border border-brown-deep/40 px-5 py-1.5 font-body text-sm text-brown-deep hover:bg-beige-dark/40"
                >
                  close
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

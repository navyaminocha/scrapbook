import { motion } from "framer-motion";
import FloatingDecor from "../components/FloatingDecor";
import { intro } from "../data/content";

export default function Intro({ onBegin }) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
      <FloatingDecor />
      <motion.p
        className="font-heading text-3xl italic text-brown-deep md:text-4xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {intro.line1}
      </motion.p>
      <motion.p
        className="mt-6 font-body text-base text-choco/80 md:text-lg"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        {intro.line2}
      </motion.p>
      <motion.p
        className="mt-2 font-hand text-3xl text-brown-deep md:text-4xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {intro.line3}
      </motion.p>

      <motion.button
        onClick={onBegin}
        className="mt-16 flex flex-col items-center gap-2 text-brown-deep"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <span className="font-hand text-2xl">Begin</span>
        <span className="animate-bounceArrow text-2xl" aria-hidden="true">→</span>
      </motion.button>
    </section>
  );
}

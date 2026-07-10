import { motion } from "framer-motion";

export default function PageArrow({ onClick, label = "" }) {
  return (
    <motion.button
      onClick={onClick}
      className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1 text-brown-deep"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      aria-label="Next page"
    >
      {label && <span className="font-hand text-lg opacity-80">{label}</span>}
      <motion.span
        className="text-2xl animate-bounceArrow"
        aria-hidden="true"
      >
        ↓
      </motion.span>
    </motion.button>
  );
}

import { motion } from "framer-motion";

export default function PaperNote({ text, rotate = -3, index = 0 }) {
  return (
    <motion.div
      className="relative w-52 rounded-sm bg-ivory p-5 shadow-paper"
      style={{ rotate: `${rotate}deg` }}
      initial={{ opacity: 0, y: 24, rotate: rotate - 6 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, rotate: 0, zIndex: 10 }}
    >
      {/* pin */}
      <span
        className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-rose shadow-tape"
        aria-hidden="true"
      />
      <p className="text-center font-hand text-xl leading-snug text-choco">{text}</p>
    </motion.div>
  );
}

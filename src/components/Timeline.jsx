import { motion } from "framer-motion";

export default function Timeline({ points = [] }) {
  return (
    <div className="relative mx-auto flex max-w-md flex-col items-center">
      {/* vertical line */}
      <div
        className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-brown-muted/40"
        aria-hidden="true"
      />
      {points.map((point, i) => (
        <div key={i} className="relative z-10 mb-14 flex flex-col items-center last:mb-0">
          <motion.div
            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-brown-deep bg-ivory shadow-tape"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          />
          <motion.p
            className="mt-3 font-hand text-2xl text-choco"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: i * 0.15 + 0.1 }}
          >
            {point}
          </motion.p>
          {i < points.length - 1 && (
            <motion.span
              className="mt-3 text-brown-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: i * 0.15 + 0.25 }}
              aria-hidden="true"
            >
              ↓
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}

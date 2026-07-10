import { useState } from "react";
import { motion } from "framer-motion";
import FloatingDecor from "../components/FloatingDecor";
import PageArrow from "../components/PageArrow";
import { future } from "../data/content";

export default function Future({ onNext }) {
  const [checked, setChecked] = useState(() => future.items.map(() => false));

  const toggle = (i) => {
    setChecked((prev) => prev.map((c, idx) => (idx === i ? !c : c)));
  };

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-6">
      <FloatingDecor />

      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-hand text-2xl text-brown-muted">{future.title}</p>
        <h2 className="font-heading text-4xl italic text-choco md:text-5xl">
          {future.subtitle}
        </h2>
      </motion.div>

      <div className="stitched w-full max-w-sm rounded-md bg-ivory/80 p-8">
        <ul className="flex flex-col gap-4">
          {future.items.map((item, i) => (
            <motion.li
              key={i}
              className="flex cursor-pointer items-center gap-3"
              onClick={() => toggle(i)}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm border-2 border-brown-deep text-sm transition-colors ${
                  checked[i] ? "bg-brown-deep text-ivory" : "bg-transparent"
                }`}
              >
                {checked[i] ? "✓" : ""}
              </span>
              <span
                className={`font-hand text-2xl text-choco transition-opacity ${
                  checked[i] ? "opacity-60 line-through" : ""
                }`}
              >
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      <PageArrow onClick={onNext} />
    </section>
  );
}

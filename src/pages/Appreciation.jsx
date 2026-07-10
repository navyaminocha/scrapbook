import { motion } from "framer-motion";
import PaperNote from "../components/PaperNote";
import FloatingDecor from "../components/FloatingDecor";
import PageArrow from "../components/PageArrow";
import { appreciation } from "../data/content";

const ROTATIONS = [-5, 3, -3, 5, -4, 4];

export default function Appreciation({ onNext }) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-y-auto px-6 py-16">
      <FloatingDecor />

      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-hand text-2xl text-brown-muted">{appreciation.title}</p>
        <h2 className="font-heading text-4xl italic text-choco md:text-5xl">
          {appreciation.subtitle}
        </h2>
      </motion.div>

      <div className="flex max-w-3xl flex-wrap items-start justify-center gap-6">
        {appreciation.notes.map((note, i) => (
          <PaperNote key={i} text={note} rotate={ROTATIONS[i % ROTATIONS.length]} index={i} />
        ))}
      </div>

      <PageArrow onClick={onNext} />
    </section>
  );
}

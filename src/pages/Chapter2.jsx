import { motion } from "framer-motion";
import Timeline from "../components/Timeline";
import FloatingDecor from "../components/FloatingDecor";
import PageArrow from "../components/PageArrow";
import { timeline } from "../data/content";

export default function Chapter2({ onNext }) {
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
        <p className="font-hand text-2xl text-brown-muted">{timeline.title}</p>
        <h2 className="font-heading text-4xl italic text-choco md:text-5xl">
          {timeline.subtitle}
        </h2>
      </motion.div>

      <Timeline points={timeline.points} />

      <PageArrow onClick={onNext} />
    </section>
  );
}

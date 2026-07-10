import { motion } from "framer-motion";
import Polaroid from "../components/Polaroid";
import FloatingDecor from "../components/FloatingDecor";
import PageArrow from "../components/PageArrow";
import { chapter1 } from "../data/content";
import chapter1Img from "../assets/ch1.jpg";

export default function Chapter1({ onNext }) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-6 md:px-16">
      <FloatingDecor />

      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-hand text-2xl text-brown-muted">{chapter1.title}</p>
        <h2 className="font-heading text-4xl italic text-choco md:text-5xl">
          {chapter1.subtitle}
        </h2>
      </motion.div>

      <div className="flex w-full max-w-4xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
        <div className="relative">
          <Polaroid img={chapter1Img} caption={chapter1.photoCaption} rotate={-6} width={280} />
          {/* hand-drawn arrow pointing to the text */}
          <svg
            className="absolute -right-16 top-1/2 hidden -translate-y-1/2 md:block"
            width="90"
            height="40"
            viewBox="0 0 90 40"
            fill="none"
          >
            <path
              d="M2 20 C 30 5, 60 35, 85 18"
              stroke="#6B4A32"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M75 12 L87 18 L74 24" stroke="#6B4A32" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <motion.div
          className="relative max-w-md rounded-sm bg-ivory/70 p-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <span className="absolute -left-3 -top-3 text-2xl text-sage">✿</span>
          <p className="font-body text-base leading-relaxed text-choco/90 md:text-lg">
            {chapter1.paragraph}
          </p>
          <span className="absolute -bottom-3 -right-3 text-2xl text-sage">✿</span>
        </motion.div>
      </div>

      <PageArrow onClick={onNext} />
    </section>
  );
}

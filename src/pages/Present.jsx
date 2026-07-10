import { motion } from "framer-motion";
import Polaroid from "../components/Polaroid";
import FloatingDecor from "../components/FloatingDecor";
import PageArrow from "../components/PageArrow";
import { present } from "../data/content";
import presentImg from "../assets/present.jpeg";

export default function Present({ onNext }) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
      <FloatingDecor
        items={[
          { type: "heart", top: "15%", left: "12%", size: 20, delay: 0 },
          { type: "heart", top: "75%", left: "85%", size: 18, delay: 0.5 },
          { type: "heart", top: "60%", left: "8%", size: 14, delay: 1 },
          { type: "heart", top: "20%", left: "88%", size: 16, delay: 1.4 },
          { type: "sparkle", top: "40%", left: "50%", size: 12, delay: 0.8 },
        ]}
      />

      <motion.p
        className="mb-6 font-hand text-2xl text-brown-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {present.title}
      </motion.p>
      <Polaroid
  img={presentImg}
  caption="The time when you used to crush on real men like Ali Raza and we were going strong like Panth's relationship"
  rotate={-2}
  width={300}
/>

      <motion.p
        className="mt-8 max-w-lg font-body text-base leading-relaxed text-choco/90 md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        {present.paragraph}
      </motion.p>

      <PageArrow onClick={onNext} />
    </section>
  );
}

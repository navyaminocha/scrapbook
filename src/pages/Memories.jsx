import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Polaroid from "../components/Polaroid";
import FloatingDecor from "../components/FloatingDecor";
import PageArrow from "../components/PageArrow";
import { gallery } from "../data/content";

export default function Memories({ onNext }) {
  const [enlarged, setEnlarged] = useState(null);

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
        <p className="font-hand text-2xl text-brown-muted">{gallery.title}</p>
        <h2 className="font-heading text-4xl italic text-choco md:text-5xl">
          {gallery.subtitle}
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-2">
        {gallery.photos.map((p, i) => (
          <div
            key={i}
            className={i % 2 === 0 ? "md:-mt-4" : "md:mt-6"}
            style={{ marginLeft: i % 3 === 1 ? "-1rem" : 0 }}
          >
            <Polaroid
              img={p.img}
              caption={p.caption}
              rotate={p.rotate}
              width={190}
              index={i}
              onClick={() => setEnlarged(p)}
            />
          </div>
        ))}
      </div>

      <PageArrow onClick={onNext} />

      <AnimatePresence>
        {enlarged && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-choco/50 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlarged(null)}
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Polaroid img={enlarged.img} caption={enlarged.caption} rotate={0} width={340} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

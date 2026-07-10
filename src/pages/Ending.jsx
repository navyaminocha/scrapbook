import { useState } from "react";
import { motion } from "framer-motion";
import FloatingDecor from "../components/FloatingDecor";
import { endingTimeline } from "../data/content";
import Polaroid from "../components/Polaroid";
export default function Ending({ onJump }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-y-auto px-6 py-16">
      <FloatingDecor />

      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="font-hand text-2xl text-brown-muted">Our scrapbook</p>
        <h2 className="font-heading text-4xl italic text-choco md:text-5xl">
          Every chapter, all at once
        </h2>
      </motion.div>

      <div className="relative mt-10 flex w-full max-w-md flex-col items-center">
        
        {endingTimeline.map((node, i) => (
          <motion.button
            key={node.key}
            className="relative z-10 mb-10 flex w-full items-center justify-center last:mb-0"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onMouseEnter={() => setHovered(node.key)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onJump(node.key)}
          >
            <div className="stitched flex items-center gap-3 rounded-md bg-ivory px-5 py-3 shadow-paper">
              <span className="h-3 w-3 rounded-full bg-brown-deep" />
              <span className="font-hand text-2xl text-choco">{node.label}</span>
            </div>

            {hovered === node.key && (
              <motion.div
                className="absolute left-full ml-4 hidden w-40 rounded-sm bg-ivory p-3 text-left shadow-paper md:block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                  >
                <img
                src={node.img}
                alt={node.label}
                className="mb-2 h-20 w-full rounded-sm object-cover"
                      />

                <p className="font-hand text-lg text-brown-deep">
                {node.label}
                </p>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <motion.p
        className="mt-14 text-center font-hand text-2xl text-brown-deep"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Here's to forever, {"\u2764"}
      </motion.p>
    </section>
  );
}

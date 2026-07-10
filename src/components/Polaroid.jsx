import { motion } from "framer-motion";

/**
 * A taped-on polaroid photo. Pass `img` (an imported image) once you
 * have real photos — until then it shows a soft placeholder swatch
 * so the layout still looks intentional.
 */
export default function Polaroid({
  img,
  caption,
  rotate = -4,
  width = 260,
  onClick,
  className = "",
  index = 0,
}) {
  return (
    <motion.figure
      className={`relative inline-block cursor-pointer polaroid ${className}`}
      style={{ width, rotate: `${rotate}deg` }}
      initial={{ opacity: 0, y: 30, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
      onClick={onClick}
    >
      {/* masking tape */}
      <span
        className="tape absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-3 rounded-sm"
        aria-hidden="true"
      />
      <div
        className="flex items-center justify-center overflow-hidden bg-beige-dark/40"
        style={{ height: width * 0.95 }}
      >
        {img ? (
          <img
            src={img}
            alt={caption || "memory"}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-hand text-2xl text-brown-deep/50">
            photo goes here
          </span>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-hand text-xl text-choco/80">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

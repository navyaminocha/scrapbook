import { motion } from "framer-motion";

const HEART = "♥";
const FLOWER = "✿";
const SPARKLE = "✦";

const DEFAULT_ITEMS = [
  { type: "heart", top: "12%", left: "8%", size: 18, delay: 0 },
  { type: "flower", top: "72%", left: "5%", size: 22, delay: 0.6 },
  { type: "sparkle", top: "20%", left: "92%", size: 14, delay: 1.1 },
  { type: "heart", top: "85%", left: "88%", size: 16, delay: 0.3 },
  { type: "sparkle", top: "48%", left: "3%", size: 12, delay: 1.6 },
  { type: "flower", top: "8%", left: "80%", size: 18, delay: 0.9 },
  { type: "sparkle", top: "60%", left: "95%", size: 16, delay: 0.2 },
];

const glyph = (type) =>
  type === "heart" ? HEART : type === "flower" ? FLOWER : SPARKLE;

const colorFor = (type) =>
  type === "heart" ? "#C98F7B" : type === "flower" ? "#8A9A7B" : "#A97C50";

/**
 * A quiet, ambient layer of floating hearts / flowers / sparkles.
 * Pointer-events are disabled so it never blocks clicks.
 */
export default function FloatingDecor({ items = DEFAULT_ITEMS, className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          className={item.type === "sparkle" ? "animate-sparkle absolute select-none" : "absolute select-none animate-floatY"}
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.size,
            color: colorFor(item.type),
            opacity: item.type === "sparkle" ? 0.7 : 0.55,
            animationDelay: `${item.delay}s`,
          }}
        >
          {glyph(item.type)}
        </motion.span>
      ))}
    </div>
  );
}

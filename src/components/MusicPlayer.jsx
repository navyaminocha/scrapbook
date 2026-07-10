import { useRef, useState } from "react";
import { motion } from "framer-motion";
import birthdaySong from "../assets/song.mp3";
/**
 * 
 * Drop an mp3 into src/assets (e.g. song.mp3), import it, and pass it
 * as `src` to enable playback. Without a src the button still renders
 * so the layout is complete, it just has nothing to play.
 */
export default function MusicPlayer({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed top-6 right-6 z-40">
      {src && <audio ref={audioRef} src={src} loop />}
      <motion.button
        onClick={toggle}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-brown-deep/30 bg-ivory/90 text-lg shadow-paper backdrop-blur-sm"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={playing ? { rotate: [0, 8, -8, 0] } : {}}
        transition={playing ? { repeat: Infinity, duration: 2.4 } : {}}
        aria-label={playing ? "Pause music" : "Play music"}
        title={src ? "Play our song" : "Add a song in MusicPlayer to enable"}
      >
        {playing ? "🎵" : "🎶"}
      </motion.button>
    </div>
  );
}

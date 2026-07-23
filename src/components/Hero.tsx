"use client";

import { motion } from "framer-motion";
import PaddleMark from "./PaddleMark";
import BallMark from "./BallMark";
import SwingTrail from "./SwingTrail";
import Seal from "./Seal";

const headline = "TARSIUS".split("");

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-carbon px-6 pt-28 pb-16 sm:px-10 lg:px-16"
    >
      {/* signature swing trail, cutting the viewport on a diagonal */}
      <SwingTrail
        id="hero-trail"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70 mix-blend-screen"
      />

      {/* ambient particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/70"
            style={{
              top: `${(i * 37) % 90}%`,
              left: `${(i * 53) % 95}%`,
              animation: `drift ${14 + (i % 5) * 2}s ease-in-out ${i * 0.4}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* text column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-victory/90"
          >
            <Seal className="h-8 w-8" />
            Tap. Verify. Play.
          </motion.div>

          <h1 className="font-display flex flex-wrap text-[18vw] font-extrabold uppercase leading-[0.82] tracking-tight sm:text-[11vw] lg:text-[7.2vw]">
            {headline.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-gradient"
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 max-w-md text-lg text-light/80 sm:text-xl"
          >
            Paddles engineered for competitive speed, finished by hand, and sealed
            with an NFC chip so every swing is provably yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10"
          >
            <a
              href="#about"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-signature px-8 py-4 font-display text-lg font-bold uppercase tracking-wide text-carbon shadow-[0_0_0_0_rgba(245,198,90,0.6)] transition-shadow duration-300 hover:shadow-[0_0_45px_10px_rgba(245,198,90,0.35)]"
            >
              Discover Tarsius
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* mark column */}
        <div className="relative mx-auto flex h-[60vh] w-full max-w-md items-center justify-center lg:h-[70vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [-8, -2, -8] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full"
              style={{ filter: "drop-shadow(0 30px 60px rgba(142,27,19,0.45))" }}
            >
              <PaddleMark className="h-full w-full" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute right-2 top-6 h-16 w-16 sm:h-20 sm:w-20"
            animate={{ y: [0, -22, 0], rotate: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <BallMark className="h-full w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-light/50 sm:flex"
      >
        <span>Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}

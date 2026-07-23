"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StripeDivider from "./StripeDivider";
import Seal from "./Seal";

const headline = "TARSIUS".split("");

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-carbon"
    >
      {/* photographic background */}
      <div className="absolute inset-0">
        <Image
          src="/hero/paddle-photo.jpg"
          alt="Tarsius paddle and pickleball on the court"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* mobile: dim the full photo so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/85 to-carbon/40 lg:hidden" />
        {/* desktop: solid panel behind the copy, photo carries the right side */}
        <div className="absolute inset-y-0 left-0 hidden w-[38%] bg-carbon lg:block" />
      </div>

      <StripeDivider className="pointer-events-none absolute inset-y-0 left-[36%] hidden h-full w-[9%] lg:block" />

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-6 pt-28 pb-16 sm:px-10 lg:px-16">
        <div className="max-w-lg lg:max-w-[30vw]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.3em] text-victory sm:text-base"
          >
            <Seal className="h-8 w-8 shrink-0" />
            Tap. Verify. Play.
          </motion.div>

          <h1 className="font-display flex flex-wrap text-[20vw] font-extrabold uppercase leading-[0.85] tracking-tight sm:text-[13vw] lg:text-[7.5vw] xl:text-[6.2vw]">
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
            className="mt-8 max-w-md text-lg text-white/90 sm:text-xl"
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
      </div>
    </section>
  );
}

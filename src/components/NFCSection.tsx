"use client";

import { motion } from "framer-motion";
import Seal from "./Seal";

const steps = [
  { code: "01", label: "Tap", detail: "Hold your phone to the NFC seal built into the paddle throat." },
  { code: "02", label: "Open", detail: "Your phone opens tarsius.com/product/[id] automatically, no app required." },
  { code: "03", label: "Verify", detail: "We check the chip's ID against the Tarsius production ledger in real time." },
  { code: "04", label: "View", detail: "Full specs, materials, and warranty for your exact paddle load instantly." },
];

export default function NFCSection() {
  return (
    <section id="nfc" className="relative overflow-hidden bg-graphite px-6 py-28 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-signature blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-signature blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        {/* phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto flex h-[440px] w-56 items-center justify-center rounded-[2.5rem] border border-light/15 bg-carbon shadow-2xl sm:h-[500px] sm:w-64"
        >
          <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-light/15" />

          {/* expanding NFC rings */}
          {[0, 0.7, 1.4].map((delay) => (
            <span
              key={delay}
              className="absolute h-24 w-24 rounded-full border-2 border-gold"
              style={{ animation: `pulse-ring 2.2s cubic-bezier(0.4,0,0.2,1) ${delay}s infinite` }}
            />
          ))}

          <motion.div
            animate={{ opacity: [0, 1, 1, 0], scale: [0.7, 1, 1, 0.9] }}
            transition={{ duration: 2.2, repeat: Infinity, times: [0, 0.3, 0.75, 1] }}
          >
            <Seal className="h-24 w-24" />
          </motion.div>
        </motion.div>

        {/* process log */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">NFC Authentication</p>
          <h2 className="font-display mt-4 text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
            Every paddle
            <span className="text-gradient"> checks its own pulse.</span>
          </h2>
          <p className="mt-6 max-w-xl text-light/75">
            A tamper-evident NFC chip is sealed into every Tarsius paddle at the
            factory. It carries no personal data, only a signed product ID that
            our system verifies the moment you tap.
          </p>

          <ol className="mt-12 space-y-0 border-y border-light/10">
            {steps.map((step, i) => (
              <motion.li
                key={step.code}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid grid-cols-[3rem_5rem_1fr] items-baseline gap-4 border-b border-light/10 py-5 last:border-b-0 sm:grid-cols-[3rem_7rem_1fr]"
              >
                <span className="font-mono text-sm text-victory/70">{step.code}</span>
                <span className="font-display text-xl font-bold uppercase tracking-wide text-gold">
                  {step.label}
                </span>
                <span className="text-light/75">{step.detail}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

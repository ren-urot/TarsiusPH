"use client";

import { motion } from "framer-motion";

const dossier = [
  {
    label: "Mission",
    copy: "Give competitive players equipment that keeps pace with them, no gap between what the paddle can do and what the point demands.",
  },
  {
    label: "Innovation",
    copy: "Every core, face texture, and edge guard is prototyped against real rally data before it earns the Tarsius name.",
  },
  {
    label: "Craftsmanship",
    copy: "Hand-finished in small batches. A technician signs off on every paddle before it's sealed with its NFC chip.",
  },
  {
    label: "Engineering",
    copy: "Carbon-fiber faces and foam cores tuned for a wider sweet spot without giving up the pop serious players play for.",
  },
  {
    label: "Why Tarsius",
    copy: "You're not buying a paddle off a shelf. You're buying the one built for you, and you can prove it in one tap.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-carbon px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* narrative */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">Our Story</p>
          <h2 className="font-display mt-4 text-5xl font-extrabold uppercase leading-[0.9] sm:text-6xl">
            Built for the
            <br />
            point that
            <br />
            <span className="text-gradient">matters.</span>
          </h2>
          <p className="mt-8 max-w-md text-light/75">
            Tarsius started on a court in Cebu, where a bent aluminum paddle lost
            a championship point that should have been won. We set out to build
            the paddle that wouldn&apos;t, and to give every owner a way to know,
            without doubt, that what&apos;s in their hand is the real thing.
          </p>
        </motion.div>

        {/* spec dossier */}
        <div className="divide-y divide-graphite border-y border-graphite">
          {dossier.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 py-7 sm:grid-cols-[10rem_1fr]"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-victory/80 transition-colors group-hover:text-gold">
                {item.label}
              </span>
              <p className="text-lg text-light/85">{item.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

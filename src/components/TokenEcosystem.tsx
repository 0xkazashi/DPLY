"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const TokenEcosystem = () => {
  return (
    <section className="w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col items-center overflow-hidden">

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white/10 border border-white text-white text-xs font-semibold px-3 py-1 rounded mb-6 w-fit relative z-10"
      >
        DPLOY.FUN
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Powering the Dploy.fun Ecosystem
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-gray-400 text-center max-w-2xl mb-12"
      >
        Dploy structure is simple but concrete, giving creators all functions needed.
      </motion.p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full max-w-6xl">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -5 }} 
          whileInView={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-[#111] rounded-xl p-6 shadow-lg transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
            <h3 className="text-white font-semibold mb-2">
              Instant/multi-platform deployment
            </h3>
            <p className="text-gray-400 text-sm">
              Deploy tokens directly via TG bot, groups, X, or Discord
            </p>
          </div>
          <div className="bg-[#111] rounded-xl p-6 shadow-lg transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
            <h3 className="text-white font-semibold mb-2">
              Anti-PVP system
            </h3>
            <p className="text-gray-400 text-sm">
              Only one ticker every 24 hours per creator
            </p>
          </div>
        </motion.div>

        {/* Middle Column (Logo/Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center items-center w-full"
        >
          <div className="bg-[#111] shadow-xl rounded-2xl relative w-full max-w-[400px]">
            <Image
              src="/660.jpg"
              alt="Deploy Token"
              width={400}
              height={400}
              className="object-contain rounded-2xl w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 5 }} 
          whileInView={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-[#111] rounded-xl p-6 shadow-lg transform rotate-[3deg] hover:rotate-0 transition-transform duration-300">
            <h3 className="text-white font-semibold mb-2">
              Fee modification/claim alerts
            </h3>
            <p className="text-gray-400 text-sm">
              Creator fees can be modified to selected TG/X/Discord users, who are notified by a claim bot
            </p>
          </div>
          <div className="bg-[#111] rounded-xl p-6 shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
            <h3 className="text-white font-semibold mb-2">
              Verified dev identity
            </h3>
            <p className="text-gray-400 text-sm">
              Each token shows the dev’s TG/X/Discord handle
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenEcosystem;

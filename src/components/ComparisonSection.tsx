"use client";
import { motion } from "framer-motion";

const ComparisonSection = () => {
  return (
    <section id="competition" className="w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col items-center text-center overflow-hidden">
    
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white/10 border border-white text-white text-xs font-semibold px-3 py-1 rounded mb-6 w-fit"
      >
        COMPETITIVE ADVANTAGE
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        What Sets Dploy.fun Apart
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed mb-16"
      >
        Discover how Dploy.fun outperforms other platforms with unmatched features,
        better performance, and greater value.
      </motion.p>

      <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Mobile ke liye thoda kam distance safe rehta hai
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#0b0b0b] border border-gray-800 rounded-xl p-6 w-full md:w-1/3 text-left shadow-lg shadow-black/40 flex flex-col"
        >
          <h3 className="font-bold mb-4 text-gray-300">Other Platforms</h3>
          <ul className="space-y-4 text-gray-500 text-sm flex-grow">
            <li>- Deployment Method: Web-only</li>
            <li>- Unlimited Same Name Tickers</li>
            <li>- No mechanism to alert fee receivers</li>
            <li>- No dexscreener update</li>
            <li>- No metadata editing</li>
            <li>- No fee redirection or manual</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="self-center text-white font-bold text-lg border border-white bg-black rounded-full px-5 py-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] z-10 my-[-20px] md:my-0"
        >
          VS
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#0b0b0b] border border-white/20 rounded-xl p-6 w-full md:w-1/3 text-left shadow-lg shadow-white/5 flex flex-col"
        >
          <h3 className="font-bold mb-4 text-white">Dploy.fun</h3>
          <ul className="space-y-4 text-gray-200 text-sm flex-grow">
            <li>- Multi-platform Deploy: TG bot (groups), X, Discord, terminal</li>
            <li>- 1 ticker / 24h per dev to stop PVP wars</li>
            <li>- Notifies fee beneficiaries to claim rewards</li>
            <li>- Free dexscreener update</li>
            <li>- Metadata update (Description + URLs)</li>
            <li>- Can redirect fees to chosen TG/X/Discord members</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;

"use client";

import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const RevenueModel = () => {
  return (
    <section id="revenue" className="w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col items-center">
      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white/10 border border-white text-white text-xs font-semibold px-3 py-1 rounded mb-6 w-fit relative z-10"
      >
        REVENUE MODEL
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Transparent & Sustainable Revenue Structure
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-gray-400 text-center max-w-3xl mb-12"
      >
        Our revenue-sharing model makes the ecosystem far more sustainable, creating a win-win relationship between the platform and creators.
      </motion.p>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -80, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#111] rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaStar className="text-white" />
            <h3 className="text-lg font-semibold">
              1% standard Fee
            </h3>
          </div>
          <p className="text-gray-400 text-sm">
            At every trade (both Buy and Sell), a 1% swap fee is collected in SOL.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotate: 5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#111] rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaStar className="text-white" />
            <h3 className="text-lg font-semibold">Treasury</h3>
          </div>
          <p className="text-gray-400 text-sm">
            40% of total fees are accumulated and transferred to the Dploy.fun Treasury.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#111] rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaStar className="text-white" />
            <h3 className="text-lg font-semibold">Revenue Sharing</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Dploy.fun allocates 40% of all trading fees collected to token creators
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueModel;

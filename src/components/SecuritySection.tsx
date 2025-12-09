"use client";

import { FaShieldAlt, FaLock, FaRobot, FaDatabase } from "react-icons/fa";

const SecuritySection = () => {
  return (
    <section id="security" className="w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col items-center">
      {/* Top Badge */}
      <div className="bg-white/10 border border-white text-white text-xs font-semibold px-3 py-1 rounded mb-6">
        SECURITY
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Built with Security at the Core
      </h2>
      <p className="text-gray-400 text-center max-w-3xl mb-16">
        
      </p>

      {/* Security Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
        {/* Card 1 */}
        <div className="bg-[#0c0c0c] border border-white rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-500 transition">
          <FaShieldAlt className="text-white text-5xl mb-4 " />
          <h3 className="font-semibold mb-2">Audited Smart Contracts</h3>
          <p className="text-gray-400 text-sm">
            All contracts independently verified for safety.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0c0c0c] border border-white rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-500 transition">
          <FaLock className="text-white text-5xl mb-4 " />
          <h3 className="font-semibold mb-2">Liquidity Lock</h3>
          <p className="text-gray-400 text-sm">
            Liquidity locks for investor assurance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0c0c0c] border border-white rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-500 transition">
          <FaRobot className="text-white text-5xl mb-4 " />
          <h3 className="font-semibold mb-2">Bundlers Detection</h3>
          <p className="text-gray-400 text-sm">
            Protects traders from being overshadowed by bots.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#0c0c0c] border border-white rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-500 transition">
          <FaDatabase className="text-white text-5xl mb-4" />
          <h3 className="font-semibold mb-2">DEX Listing</h3>
          <p className="text-gray-400 text-sm">
            Raydium will be the initial exchange where liquidity is provided.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

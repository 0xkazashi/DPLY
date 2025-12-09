"use client";

const LastSection = () => {
  return (
    <section className="relative w-full bg-black bg-dot-grid text-white py-20 px-6 flex flex-col items-center text-center">
      {/* Background Check Icon Glow */}
      <div className="absolute top-10 w-40 h-40 md:w-56 md:h-56 bg-white/10 rounded-full blur-3xl"></div>

      {/* Governance Badge */}
      <div className="bg-white/30 border border-white text-white text-xs font-semibold px-3 py-1 rounded mb-6 w-fit relative z-10">
        $DPLOY
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
        What makes <span className="text-white">$DPLOY</span> valuable?
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed relative z-10">
        20% of all platform fees are allocated to the Buyback & Burn contract. This contract automatically purchases $DPLOY tokens from the open market and permanently burns them, reducing supply and creating a deflationary effect that supports long-term value growth.

All unclaimed fees (those not claimed by creators or fee collectors within the set period) are also redirected to the Buyback & Burn contract, further strengthening the deflationary mechanism.
      </p>
    </section>
  );
};

export default LastSection;

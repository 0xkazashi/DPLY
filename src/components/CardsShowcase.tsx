"use client";

const CasinoCardsSection = () => {
  const cards = [
    {
      title: "Technical barrier",
      para: "Requires coding, contract deployment, and liquidity setup.",
    },
    {
      title: "Lack of trust",
      para: "Traders don’t know if the dev is real or just another anonymous rug puller.",
    },
    {
      title: "Unfair competition",
      para: "PVP deployers spam multiple tickers, leaving genuine creators overshadowed.",
    },
    {
      title: "No proper distribution of fees",
      para: "Creators cannot make changes to the reward pool or designate other beneficiaries for fees.",
    },
  ];

  return (
    <section className="w-full relative bg-black bg-dot-grid py-20 px-6 overflow-hidden">
      
  
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[400px] w-[300px] bg-white/10 blur-[150px] pointer-events-none rounded-full"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[300px] bg-white/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="
                w-full h-auto min-h-[300px]
                bg-neutral-900/80 
                border border-white/10
                shadow-[0_0_15px_rgba(255,255,255,0.05)] 
                rounded-2xl flex flex-col justify-center items-center 
                p-6 text-center 
                backdrop-blur-sm
                hover:border-white/30 hover:bg-neutral-900
                hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]
                transition-all duration-300
              "
            >
              <h3 className="font-bold text-xl text-white tracking-wide mb-4">
                {card.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {card.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasinoCardsSection;

"use client";

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="relative w-full bg-black bg-dot-grid text-white py-20 md:py-40 px-6 flex flex-col items-center justify-center overflow-hidden min-h-[60vh] md:min-h-[80vh]">

    
      <div className="
        relative z-10 w-full max-w-4xl 
        bg-black/80 border border-white/10 backdrop-blur-md 
        rounded-3xl overflow-hidden 
        p-6 md:p-12 
        flex flex-col items-center text-center 
        shadow-lg shadow-white/10
      ">

        <div className="bg-white/10 border border-white text-white text-xs font-semibold px-3 py-1 rounded mb-6 w-fit shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          TECHNICAL ARCHITECTURE
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Architecture for <span>Speed & Scale</span>
        </h2>

        <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl">
          Three layers: <span className="text-white font-medium">Contract Layer</span> (chain-specific templates), 
          <span className="text-white font-medium"> Middleware Layer</span> (API orchestration), and 
          <span className="text-white font-medium"> Front-End Layer</span> (web & mobile with wallet integrations).
        </p>

      </div>
    </section>
  );
};

export default ArchitectureSection;

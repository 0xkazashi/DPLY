import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Hero: FC = () => {
  return (
    <section className="w-full bg-black bg-dot-grid flex justify-center items-center px-3 py-20">
      {/* Card Container */}
      
      <div
        className="w-[95%] max-w-[1600px] min-h-[700px] rounded-3xl relative overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center"
        style={{
          backgroundImage: "url('/Vector_2646.jpg')", // apni image yahan lagani hai
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content wrapper on top of overlay */}
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 p-10 md:p-16 text-white">
            <div className="flex items-center gap-2 text-sm text-gray-200 mb-4">
              <FaCheckCircle className="text-white" />
              <span>Welcome to Dploy.fun</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Redefining Token <br />
              Launches with <br />
              Competitive Edge
            </h1>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-[0_0_15px_#ffffff] transition">
              Launch Token
            </button>
          </div>

          {/* Right Content */}
          <div className="flex-1 p-10 md:p-16 text-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-white" />
              <span className="text-sm">Built on Solana Network</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Dploy is the next-gen launchpad on SOL network, 
              designed to benefit all stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { FaTwitter } from "react-icons/fa";
import { TbSend } from "react-icons/tb";

const Navbar: FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-md text-white shadow-lg z-50">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between px-6 md:px-12 h-20 md:h-24 overflow-hidden">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-8 md:h-9 md:w-9">
            <Image
              src="/logo.jfif"
              alt="Dploy Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-lg md:text-xl tracking-wide">Dploy.fun</span>
        </Link>

        {/* Nav Links with IDs */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 text-md font-medium">
          <li><Link href="/">Home</Link></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-white transition">About</a></li>
          <li><a href="#problems" onClick={(e) => handleScroll(e, "problems")} className="hover:text-white transition">Problems</a></li>
          <li><a href="#revenue" onClick={(e) => handleScroll(e, "revenue")} className="hover:text-white transition">Revenue Model</a></li>
          <li><a href="#security" onClick={(e) => handleScroll(e, "security")} className="hover:text-white transition">Security</a></li>
          <li><a href="#architecture" onClick={(e) => handleScroll(e, "architecture")} className="hover:text-white transition">Architecture</a></li>
          <li><a href="#competition" onClick={(e) => handleScroll(e, "competition")} className="hover:text-white transition">Competition</a></li>
          
        </ul>

        {/* Icons + CTA */}
        <div className="flex items-center gap-4">
          <TbSend className="text-white text-xl cursor-pointer hover:scale-110 transition hover:text-gray-300" />
          <FaTwitter className="text-white text-xl cursor-pointer hover:scale-110 transition hover:text-gray-300" />

          <button
            className="hidden sm:block ml-2 px-6 md:px-8 py-2.5 md:py-3.5 rounded-full font-semibold 
            bg-white text-black 
            shadow-[0_0_12px_#ffffff] hover:shadow-[0_0_20px_#ffffff] 
             transition duration-300 text-sm md:text-base"
          >
            Enter dApp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

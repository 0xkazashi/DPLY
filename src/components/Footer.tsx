"use client";

import { Twitter, Github } from "lucide-react";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Dploy<span className="text-white">.fun</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-sm">
            Dploy is the next-gen launchpad on SOL network, designed to benefit all stakeholders.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-gray-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-gray-400 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:text-gray-400 transition-colors"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://telegram.com"
              target="_blank"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <FaTelegram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-green-900/30 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Deploy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

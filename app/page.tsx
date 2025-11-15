"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* first column */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">OcuMind</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Improving nutrition awareness through AI-powered food analysis.
            </p>
          </div>

          {/* second column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* third column — Follow / Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="https://twitter.com" className="hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="hover:text-white transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} OcuMind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

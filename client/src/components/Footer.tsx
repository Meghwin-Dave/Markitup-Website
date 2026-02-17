import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black mb-6 tracking-tight">MarkItUp</div>
            <p className="text-gray-400 text-sm leading-relaxed">
            Create, Grow, and connect multiple business
            brands under one strategic ecosystem</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/it-buddy" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  IT Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Our Ventures</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/discount-buddy" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Discount Buddy
                </Link>
              </li>
              <li>
                <Link href="/it-buddy" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  IT Buddy
                </Link>
              </li>
              <li>
                <Link href="/market-buddy" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Market Buddy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gray-400 flex-shrink-0 mt-1" />
                <a href="mailto:hello@markitup.com" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  hello@markitup.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gray-400 flex-shrink-0 mt-1" />
                <a href="tel:+447767901263" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  +44 (0) 7767 901263
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm font-medium">London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-sm font-medium">
              © {currentYear} MarkItUp. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "IT Services", href: "/it-buddy" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-slate-100">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-black tracking-tight">
            <span className="text-slate-900">Mark</span>
            <span style={{ color: "var(--accent-teal)" }}>It</span>
            <span className="text-slate-900">Up</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium text-sm relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-teal transition-all group-hover:w-full" style={{ backgroundColor: "var(--accent-teal)" }}></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-slate-900 text-white px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-all font-semibold text-sm relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <span 
              className="absolute inset-0 w-0 transition-all group-hover:w-full" 
              style={{ backgroundColor: "var(--accent-teal)" }}
            ></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} className="text-slate-900" /> : <Menu size={24} className="text-slate-900" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t-2 border-slate-100 bg-white">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-all font-semibold text-center"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

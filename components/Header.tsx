"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll level to update header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" }
  ];

  return (
    <header className={`sticky top-0 z-[100] w-full border-b transition-all duration-500 ${
      isScrolled ? "py-4 border-white/10 bg-slate-950/90 backdrop-blur-xl" : "py-6 border-transparent bg-transparent"
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6 md:px-8">
        
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="h-9 w-9 md:h-10 md:w-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-transform duration-300">
            I
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            Insurica<span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/login" 
              className="text-sm font-bold text-slate-300 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Button asChild className="bg-white text-slate-950 hover:bg-slate-200 border-0 font-bold px-8 h-12 rounded-xl shadow-xl shadow-white/10 transition-all active:scale-95">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-xl font-bold text-slate-200 hover:text-white"
                >
                  {link.label}
                  <ChevronRight className="h-5 w-5 text-indigo-500" />
                </Link>
              ))}
              <div className="h-px w-full bg-white/5 my-4"></div>
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center h-14 rounded-xl border border-slate-800 text-white font-bold"
                >
                  Log In
                </Link>
                <Button asChild className="h-14 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white border-0 font-bold rounded-xl shadow-lg shadow-indigo-500/10">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started Now</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

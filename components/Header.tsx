import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-9 w-9 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              I
            </div>
            <span className="text-2xl font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              Insurica<span className="text-cyan-400">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/pricing" 
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group py-2"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden sm:block text-sm font-bold text-slate-300 hover:text-white transition-colors px-4 py-2"
          >
            Log in
          </Link>
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-200 border-0 font-bold px-6 h-11 rounded-xl shadow-xl shadow-white/10 transition-all active:scale-95">
            <Link href="/contact">Request Access</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

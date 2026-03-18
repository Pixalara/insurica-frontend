import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl opacity-50 pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 py-16 md:px-6 relative z-10">
        <div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 text-center sm:text-left">
          
          <div className="space-y-6 lg:col-span-4 lg:pr-8">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <div className="h-8 w-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                I
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Insurica.</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Simplifying insurance management for Indian agents. Ditch the spreadsheets and scale your portfolio with an intelligent, secure dashboard.
            </p>
            <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5 text-xs font-semibold text-slate-400 tracking-wide uppercase">
              Go Digital Today
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">About Us</Link></li>
              <li><Link href="/pricing" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Pricing</Link></li>
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">Request Early Access</Link></li>
              <li>
                <div className="group inline-flex items-start gap-2">
                   <a href="mailto:insurica.sales@pixalara.com" className="text-slate-400 group-hover:text-indigo-400 transition-colors duration-300 break-all">
                     insurica.sales@pixalara.com
                   </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-3">
             <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get Started</h3>
             <p className="text-slate-400 text-sm mb-4">Ready to automate your renewals?</p>
             <Link href="/contact" className="block">
                <button className="w-full bg-slate-900 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-sm shadow-indigo-500/10 active:scale-[0.98]">
                   Start 30-Day Free Trial
                </button>
             </Link>
          </div>

        </div>
        
        <div className="mt-16 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Insurica. Engineered by{" "}
            <a 
              href="https://pixalara.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-cyan-400 transition-all font-bold relative group inline-block"
            >
              Pixalara
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
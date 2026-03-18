import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Smartphone } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-20 lg:py-28">
           <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-sm font-semibold text-cyan-400 mb-8 backdrop-blur-sm tracking-wide">
              Start with a 30-Day Free Trial
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Enterprise Tech at <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Minimal Cost</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We believe every Indian agent deserves world-class digital tools. Simple pricing, zero hidden fees, and full ownership of your data.
            </p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-24 bg-slate-50 relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-slate-50 opacity-10"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
              
              {/* Tier 1: 1500 Clients */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col p-8 lg:p-10 hover:-translate-y-1">
                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Agency Starter</h3>
                <p className="text-slate-500 mb-6 font-bold text-sm">For up to 1,500 clients</p>
                <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900 tracking-tighter">₹999</span>
                  <span className="text-slate-500 font-bold text-sm">/year</span>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                   {["Up to 1,500 active clients", "30 Days Free Trial included", "Single user access", "Full features access", "Email support"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium text-sm leading-relaxed">{item}</span>
                      </li>
                   ))}
                </ul>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs border-2 border-slate-200 text-slate-700 bg-white hover:border-indigo-600 hover:text-indigo-600 transition-all active:scale-95">Start Free Trial</button>
                </Link>
              </div>
              
              {/* Tier 2: 1500-3000 Clients (Popular) */}
              <div className="bg-slate-950 rounded-3xl border border-indigo-500/30 shadow-[0_0_60px_-15px_rgba(99,102,241,0.4)] flex flex-col p-8 lg:p-12 relative overflow-hidden md:scale-105 z-20 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 right-0 px-5 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-bl-2xl shadow-xl">
                  Most Popular
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2 pt-4 uppercase tracking-tight">Agency Plus</h3>
                <p className="text-indigo-400 mb-6 font-bold text-sm">For up to 3,000 clients</p>
                <div className="mb-8 p-6 bg-slate-900/80 rounded-2xl border border-white/5 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white tracking-tighter">₹1,499</span>
                  <span className="text-indigo-300 font-bold text-sm">/year</span>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                   {["Up to 3,000 active clients", "30 Days Free Trial included", "Multi-user Team Support", "Full features access", "Priority WhatsApp support"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-slate-200 font-medium text-sm leading-relaxed">{item}</span>
                      </li>
                   ))}
                </ul>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-indigo-500/25 transition-all active:scale-95">Start Free Trial Now</button>
                </Link>
              </div>
 
              {/* Tier 3: Above 3000 Clients */}
               <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col p-8 lg:p-10 hover:-translate-y-1">
                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Agency Pro</h3>
                <p className="text-slate-500 mb-6 font-bold text-sm">For more than 3,000 clients</p>
                <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900 tracking-tighter">₹1,999</span>
                  <span className="text-slate-500 font-bold text-sm">/year</span>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                   {["Over 3,000 active clients", "30 Days Free Trial included", "Unlimited Team Support", "Full features access", "Priority VIP support"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium text-sm leading-relaxed">{item}</span>
                      </li>
                   ))}
                </ul>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs border-2 border-slate-200 text-slate-700 bg-white hover:border-indigo-600 hover:text-indigo-600 transition-all active:scale-95">Start Free Trial</button>
                </Link>
              </div>
            </div>
            
            {/* Value Proposition Box */}
            <div className="mt-28 max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(99,102,241,0.1)] relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 opacity-20"></div>
               <div className="grid md:grid-cols-2 gap-12 md:gap-20 text-center md:text-left relative z-10">
                  <div className="flex flex-col items-center md:items-start">
                     <div className="h-16 w-16 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="h-8 w-8" />
                     </div>
                     <h4 className="font-black text-2xl mb-4 text-slate-900 uppercase tracking-tight">Risk-Free Trial</h4>
                     <p className="text-slate-500 leading-relaxed font-medium">Full 30-day unrestricted access to digitize your portfolio before spending a single rupee.</p>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                     <div className="h-16 w-16 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                        <Smartphone className="h-8 w-8" />
                     </div>
                     <h4 className="font-black text-2xl mb-4 text-slate-900 uppercase tracking-tight">Total Ownership</h4>
                     <p className="text-slate-500 leading-relaxed font-medium">You own your data. Export your entire client list to Excel instantly at any time, no questions asked.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>
 
        {/* FAQ Section */}
        <section className="py-24 bg-white border-t border-slate-100 mb-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <span className="text-indigo-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Clear Answers</span>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-5xl mx-auto grid gap-6 md:gap-10 md:grid-cols-2">
               {[
                  { q: "How does the 30-day trial work?", a: "You get unrestricted access to all features for 30 days. No credit card is required up front. We'll remind you before the trial ends so you can decide to continue." },
                  { q: "What if I exceed my client limit?", a: "Your existing data remains completely safe. You'll simply be prompted to upgrade to the next tier when you try to add more clients beyond your current limit." },
                  { q: "Is this a monthly or annual fee?", a: "To keep costs as low as possible for agents, we focus on annual billing. This ensures your dashboard and renewal alerts run uninterrupted for the full year." },
                  { q: "Are there any setup fees?", a: "Absolutely none. You pay only the flat annual subscription fee listed above. All future core software updates are included automatically." }
               ].map((faq, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:bg-white transition-all duration-300">
                     <h4 className="font-black text-xl mb-4 text-slate-900 tracking-tight leading-tight">{faq.q}</h4>
                     <p className="text-slate-600 leading-relaxed font-medium text-sm">{faq.a}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        <CTASection 
          title="Scale Your Agency Today"
          subtitle="Join the future of insurance management. Your 30-day free trial starts now."
        />
      </main>
      <Footer />
    </div>
  );
}
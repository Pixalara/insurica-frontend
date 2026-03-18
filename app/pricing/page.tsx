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
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
              
              {/* Tier 1: 1500 Clients */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Agency Starter</h3>
                <p className="text-slate-500 mb-6 font-medium">For up to 1,500 clients</p>
                <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-4xl font-black text-slate-900">₹999</span>
                  <span className="text-slate-500 font-medium">/year</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   {["Up to 1,500 active clients", "30 Days Free Trial included", "Single user access", "Full features access", "Email support"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                   ))}
                </ul>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-4 rounded-xl font-bold border-2 border-slate-200 text-slate-700 bg-white hover:border-indigo-600 hover:text-indigo-600 transition-colors">Start Free Trial</button>
                </Link>
              </div>
              
              {/* Tier 2: 1500-3000 Clients (Popular) */}
              <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] flex flex-col p-8 lg:p-10 relative overflow-hidden transform md:-translate-y-4">
                <div className="absolute top-0 right-0 p-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider rounded-bl-xl shadow-sm">
                  Most Popular
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 pt-2">Agency Plus</h3>
                <p className="text-indigo-300 mb-6 font-medium">For up to 3,000 clients</p>
                <div className="mb-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <span className="text-4xl font-black text-white">₹1,499</span>
                  <span className="text-slate-400 font-medium">/year</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   {["Up to 3,000 active clients", "30 Days Free Trial included", "Multi-user Team Support up to 5 users", "Full features access", "Priority WhatsApp support"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-cyan-400 mr-3 shrink-0" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                   ))}
                </ul>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-4 rounded-xl font-bold border-0 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:from-indigo-600 hover:to-cyan-600 shadow-lg shadow-indigo-500/20 transition-all">Start Free Trial</button>
                </Link>
              </div>

              {/* Tier 3: Above 3000 Clients */}
               <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Agency Pro</h3>
                <p className="text-slate-500 mb-6 font-medium">For more than 3,000 clients</p>
                <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-4xl font-black text-slate-900">₹1,999</span>
                  <span className="text-slate-500 font-medium">/year</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   {["More than 3,000 active clients", "30 Days Free Trial included", "Multi-user Team Support up to 50 users", "Full features access", "Priority call support", "Dedicated account manager"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                   ))}
                </ul>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-4 rounded-xl font-bold border-2 border-slate-200 text-slate-700 bg-white hover:border-indigo-600 hover:text-indigo-600 transition-colors">Start Free Trial</button>
                </Link>
              </div>
            </div>
            
            {/* Value Proposition Box */}
            <div className="mt-20 max-w-3xl mx-auto bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.08)]">
               <div className="grid md:grid-cols-2 gap-10 text-center md:text-left">
                  <div className="flex flex-col items-center md:items-start group">
                     <div className="h-14 w-14 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                        <ShieldCheck className="h-7 w-7" />
                     </div>
                     <h4 className="font-bold text-xl mb-3 text-slate-900">Risk-Free Trial</h4>
                     <p className="text-slate-600 leading-relaxed font-medium">Full 30-day free access to digitize your portfolio before a single rupee is spent.</p>
                  </div>
                  <div className="flex flex-col items-center md:items-start group">
                     <div className="h-14 w-14 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                        <Smartphone className="h-7 w-7" />
                     </div>
                     <h4 className="font-bold text-xl mb-3 text-slate-900">Total Ownership</h4>
                     <p className="text-slate-600 leading-relaxed font-medium">You own your data. Export your entire client list to Excel instantly at any time.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
               <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">Clear Answers</span>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-4xl mx-auto grid gap-8 md:gap-12 md:grid-cols-2">
               {[
                  { q: "How does the 30-day trial work?", a: "You get unrestricted access to all features for 30 days. No credit card is required. We'll remind you before the trial ends so you can decide to continue." },
                  { q: "What if I exceed my client limit?", a: "Your existing data remains completely safe. You will simply be prompted to upgrade to the next tier when you try to add the 1,501st or 3,001st client." },
                  { q: "Is this a monthly or annual fee?", a: "To keep costs as low as possible for agents, we offer annual billing. This ensures your automated dashboard and renewal alerts run uninterrupted for the full year." },
                  { q: "Are there any setup fees?", a: "Zero. You pay only the flat annual subscription fee listed above. All future core software updates are included automatically." }
               ].map((faq, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                     <h4 className="font-bold text-lg mb-3 text-slate-800">{faq.q}</h4>
                     <p className="text-slate-600 leading-relaxed">{faq.a}</p>
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
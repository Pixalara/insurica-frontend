import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ShieldCheck, Lock, Cloud, Cpu, Database, Smartphone, Zap, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {/* Modern Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-24 lg:py-32">
          {/* Futuristic background elements */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-indigo-400 mb-8 backdrop-blur-sm tracking-wide">
              Powering Indian Insurance
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Next-Gen Tech for <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Indian Agents</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We engineer enterprise-grade, highly secure platforms that transform how Indian insurance professionals manage their business, secure their data, and serve their clients in the digital age.
            </p>
          </div>
        </section>

        {/* The Insurica Engine (Features for India) */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Engineered for the Indian Market</h2>
              <p className="mt-4 text-lg text-slate-600">
                Built from the ground up to handle the complexities of Indian insurance portfolios, from LIC policies to multi-carrier general insurance.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                {[
                  {
                    icon: Database,
                    title: "Complex Portfolio Sync",
                    description: "Intelligent databases designed to structure messy policy data, specifically optimized for Indian carrier formats."
                  },
                  {
                    icon: Cpu,
                    title: "Automated Workflows",
                    description: "Smart algorithms track renewals, calculate premiums, and generate reminders without human intervention."
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile-First Architecture",
                    description: "Lightning-fast application accessible from anywhere, designed for varying network conditions across India."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us / Security Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-16 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1 grid gap-4 sm:grid-cols-2">
                 {[
                  { icon: ShieldCheck, title: "Bank-Grade Encryption" },
                  { icon: Lock, title: "100% Data Privacy" },
                  { icon: Cloud, title: "Reliable Cloud Backup" },
                  { icon: CheckCircle2, title: "ISO Compliant Systems" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center p-4 border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <feature.icon className="h-6 w-6 text-emerald-600 mr-3 shrink-0" />
                    <span className="font-semibold text-slate-800">{feature.title}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2">
                  <Lock className="mr-2 h-4 w-4" /> Secure by Design
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Your Data Security is Our Core Infrastructure</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  As an insurance professional, your client data is your most valuable asset. We treat it with the highest level of security. Insurica uses advanced encryption protocols, ensuring that your data remains strictly confidential and protected against unauthorized access.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  We are not just a software tool; we are your trusted technology partner. We never share, sell, or analyze your individual client data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Vision Section - Premium Redesign */}
        <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden group">
          {/* Visual Ambiance */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none transition-opacity duration-700"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden group/card">
                {/* Decorative Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500"></div>
                
                <div className="text-center">
                  <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-xs mb-10 block">Our Core Mission</span>
                  
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight leading-[1.1]">
                    Architecting the Future of Insurance
                  </h2>
                  
                  <div className="relative inline-block mb-10">
                    <div className="text-4xl md:text-6xl text-indigo-500/20 absolute -top-8 -left-8 font-serif leading-none italic">"</div>
                    <p className="text-xl md:text-3xl font-light leading-relaxed text-slate-300 italic max-w-4xl mx-auto relative z-10 font-sans">
                      We envision a future where Indian insurance agents are not bogged down by manual data entry, but empowered by 
                      <span className="text-white font-semibold"> robust, intelligent systems</span>. Our mission is to build the digital infrastructure that makes this possible, fostering trust and operational excellence.
                    </p>
                    <div className="text-4xl md:text-6xl text-indigo-500/20 absolute -bottom-12 -right-4 font-serif leading-none italic">"</div>
                  </div>
                  
                  <div className="mt-16 pt-10 border-t border-white/5 flex flex-col items-center">
                    <div className="h-0.5 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 mb-6 scale-x-100 group-hover/card:scale-x-150 transition-transform duration-500"></div>
                    <p className="font-black text-sm tracking-[0.4em] uppercase text-white/60">
                      The <span className="text-white">Insurica</span> Engineering Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection 
          title="Upgrade Your Tech Stack"
          subtitle="Join the thousands of forward-thinking agents trusting Insurica with their business."
        />
      </main>
      <Footer />
    </div>
  );
}

import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Users, Zap, 
  BarChart3, BellRing, Smartphone, Database,
  TrendingUp, Lock, Cloud
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import DashboardPreview from "@/components/DashboardPreview";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        
        {/* === NEW TECH-FORWARD HERO SECTION === */}
        <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-slate-950 text-white">
          {/* Futuristic background elements matching About page */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className="flex flex-col items-center space-y-6 md:space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-xs md:text-sm font-semibold bg-primary/5 text-indigo-400 backdrop-blur-sm tracking-wide">
                The Simple Tech Provider for Modern Agents
              </div>
              
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl leading-[1.1]">
                Empower Your Portfolio. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Go Digital Today.
                </span>
              </h1>
              
              <p className="max-w-[700px] text-lg text-slate-300 md:text-xl leading-relaxed">
                Transform your offline diary into a secure, intelligent dashboard. Manage clients, track renewals, and scale your business at a minimal cost of subscription.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0">
                <Button size="lg" asChild className="text-lg px-8 py-6 h-auto shadow-xl shadow-primary/20 w-full sm:w-auto bg-primary hover:bg-primary/90 text-white border-0">
                  <Link href="/pricing">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 h-auto w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-slate-900/50 backdrop-blur-sm">
                  <a href="#detailed-features">Explore Features</a>
                </Button>
              </div>

              {/* === DASHBOARD PREVIEW === */}
              <div className="mt-12 md:mt-16 w-full max-w-6xl mx-auto text-left px-0 md:px-0">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </section>

        {/* === TRUST SECTION - BLENDED === */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
          
          <div className="container mx-auto px-6 md:px-8 relative z-10">
             <div className="text-center mb-16">
               <p className="text-xs md:text-sm font-black text-indigo-400 uppercase tracking-[0.3em] mb-4">Quality & Security</p>
               <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">Your Data is <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Secure & Private</span></h2>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
                <TrustItem icon={Lock} title="Bank-Grade Security" color="text-emerald-400" bg="bg-emerald-500/10" />
                <TrustItem icon={ShieldCheck} title="100% Data Privacy" color="text-indigo-400" bg="bg-indigo-500/10" />
                <TrustItem icon={Cloud} title="Cloud Backups" color="text-cyan-400" bg="bg-cyan-500/10" />
             </div>
          </div>
          
          {/* Bottom curve-like mask to transition to next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </section>

        {/* === FEATURE CARDS SECTION === */}
        <section id="detailed-features" className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Digital Tools for Scalable Growth</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Ditch the fragile Excel sheets. Insurica provides an intelligent, unified toolkit designed specifically to digitize Indian insurance portfolios.
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <FeatureCard icon={BellRing} title="Automated Renewals" desc="Smart algorithms track expiries across all categories. Never miss a renewal reminder again." />
              <FeatureCard icon={Database} title="Unified Customer Vault" desc="One secure location for all client data, policies, and family members. No duplicate entry." />
              <FeatureCard icon={BarChart3} title="Intelligent Dashboard" desc="Monitor premium collection, upcoming expiries, and earned commissions at a glance." />
              <FeatureCard icon={Smartphone} title="Mobile-Ready Access" desc="Access your entire agency portfolio securely from your phone, anywhere in the field." />
              <FeatureCard icon={TrendingUp} title="Commission Tracking" desc="Stop leaking revenue. Track expected vs. received commissions across multiple carriers." />
              <FeatureCard icon={CheckCircle2} title="Status Workflows" desc="Organize your daily tasks. Mark policies as Renewed, Follow-Up, or require immediate action." />
            </div>
          </div>
        </section>

        {/* === BRAND ORIGIN - BLENDED === */}
        <section className="py-24 md:py-32 bg-slate-950 text-center relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <p className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Engineered by Pixalara</p>
            <h2 className="text-3xl md:text-5xl font-black mb-10 italic text-white max-w-4xl mx-auto tracking-tight leading-tight">
              "Digital Experiences. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Engineered to Scale.</span>"
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              We build simple, powerful software at a minimal cost of subscription, ensuring every agent has access to enterprise-grade technology.
            </p>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
        </section>
 
        <CTASection title="Ready to Empower Your Portfolio?" subtitle="Go digital today. Start your 30-day free trial and experience the difference." />
      </main>
      <Footer />
    </div>
  );
}

{/* Helper Feature Card */}
function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="group p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 relative overflow-hidden flex flex-col items-center sm:items-start text-center sm:text-left">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      <div className="h-14 w-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-7 w-7 text-indigo-600" />
      </div>
      <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-medium text-sm">{desc}</p>
    </div>
  );
}

{/* Helper Trust Item - Redesigned for Dark Blend */}
function TrustItem({ icon: Icon, title, color, bg }: { icon: any, title: string, color: string, bg: string }) {
  return (
    <div className="flex flex-col items-center text-center p-10 rounded-3xl border border-white/5 bg-slate-900/50 backdrop-blur-xl hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group">
      <div className={`h-16 w-16 ${bg} ${color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-8 w-8" />
      </div>
      <span className="font-black text-white text-lg tracking-tight">{title}</span>
    </div>
  );
}

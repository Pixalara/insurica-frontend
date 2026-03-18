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

        {/* === TRUST SECTION === */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-10">
               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Trusted Technology for Modern Agents</p>
               <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Your Data is Secure & Private</h2>
             </div>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                <div className="flex items-center gap-2"><Lock className="h-6 w-6 text-emerald-600" /><span className="font-semibold text-slate-700">Bank-Grade Security</span></div>
                <div className="flex items-center gap-2"><ShieldCheck className="h-6 w-6 text-indigo-600" /><span className="font-semibold text-slate-700">100% Data Privacy</span></div>
                <div className="flex items-center gap-2"><Cloud className="h-6 w-6 text-cyan-600" /><span className="font-semibold text-slate-700">Cloud Backups</span></div>
             </div>
          </div>
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

        {/* === BRAND ORIGIN === */}
        <section className="py-20 md:py-28 bg-slate-950 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4">Engineered by Pixalara</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 italic text-white max-w-3xl mx-auto">"Digital Experiences. Engineered to Scale."</h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              We build simple, powerful software at a minimal cost of subscription, ensuring every agent has access to enterprise-grade technology.
            </p>
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
    <div className="group p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
      <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

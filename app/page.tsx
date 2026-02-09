import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Users, Zap, 
  BarChart3, BellRing, Smartphone, ClipboardCheck, Database,
  TrendingUp, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ActionButtons from "@/components/ActionButtons";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        
        {/* === HERO SECTION === */}
        <section className="relative pt-12 pb-20 md:pt-32 md:pb-48 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className="flex flex-col items-center space-y-6 md:space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-xs md:text-sm font-medium bg-primary/5 text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                Designed for Modern Indian Insurance Agents
              </div>
              
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl leading-[1.1]">
                Scale Your Agency with <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  Intelligent Automation
                </span>
              </h1>
              
              <p className="max-w-[700px] text-base text-slate-600 md:text-xl leading-relaxed">
                Manage clients, track renewals, and monitor commissions from one simple dashboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto px-4 sm:px-0">
                <Button size="lg" asChild className="text-lg px-8 py-6 h-auto shadow-xl shadow-primary/20 w-full sm:w-auto">
                  <Link href="/pricing">Start 30-Day Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 h-auto w-full sm:w-auto">
                  <a href="#detailed-features">Explore Features</a>
                </Button>
              </div>

              {/* === MOBILE-RESPONSIVE DASHBOARD PREVIEW === */}
              <div className="mt-12 md:mt-20 w-full max-w-6xl mx-auto relative group text-left px-4 md:px-0">
                <div className="relative rounded-xl md:rounded-2xl border-[1px] border-slate-200 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] md:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-700">
                  {/* Container: Stacks vertically on mobile, row on desktop */}
                  <div className="bg-white w-full flex flex-col md:flex-row min-h-[500px] md:aspect-[16/11]">
                    
                    {/* Mobile Sidebar Navigation (Horizontal scroll on mobile) */}
                    <div className="md:hidden flex overflow-x-auto bg-[#0f172a] p-4 gap-4 no-scrollbar border-b border-white/10">
                       <SidebarItem icon={TrendingUp} label="Overview" active mini />
                       <SidebarItem icon={Users} label="Clients" mini />
                       <SidebarItem icon={ShieldCheck} label="General" mini />
                       <SidebarItem icon={Zap} label="Health" mini />
                       <SidebarItem icon={CheckCircle2} label="Life" mini />
                    </div>

                    {/* Desktop Sidebar */}
                    <div className="w-[22%] h-full bg-[#0f172a] hidden md:flex flex-col p-6">
                      <div className="flex items-center gap-2 mb-10">
                        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">I</div>
                        <span className="text-white font-bold text-lg tracking-tight">Insurica.</span>
                      </div>
                      <div className="space-y-2">
                        <SidebarItem icon={TrendingUp} label="Overview" active />
                        <SidebarItem icon={Users} label="Clients" />
                        <SidebarItem icon={ShieldCheck} label="General Insurance" />
                        <SidebarItem icon={Zap} label="Health Insurance" />
                        <SidebarItem icon={CheckCircle2} label="Life Insurance" />
                        <SidebarItem icon={ClipboardCheck} label="Lead Management" />
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col bg-slate-50/30 overflow-hidden">
                      <div className="h-14 md:h-16 border-b flex items-center justify-between px-4 md:px-8 bg-white">
                        <h3 className="font-bold text-slate-800 text-xs md:text-sm">Agent Performance Dashboard</h3>
                        <BellRing className="h-4 w-4 text-slate-400" />
                      </div>

                      <div className="p-4 md:p-8 space-y-4 md:space-y-6 overflow-y-auto">
                        {/* Stats Cards: 1 column on mobile, 3 on desktop */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                          <StatCard icon={Users} label="Total Clients" value="1,248" color="text-blue-600" />
                          <StatCard icon={BellRing} label="Renewals" value="42" color="text-orange-500" />
                          <StatCard icon={BarChart3} label="Commission" value="₹84,200" color="text-green-600" />
                        </div>

                        {/* Revenue Growth & Family Vault */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                          <div className="lg:col-span-2 p-4 md:p-6 border rounded-xl md:rounded-2xl bg-white shadow-sm overflow-hidden">
                            <h4 className="text-xs md:text-sm font-bold text-slate-800 mb-6 md:mb-8">Revenue Growth (6 Months)</h4>
                            <div className="h-32 md:h-40 flex items-end gap-2 md:gap-3 px-1 md:px-2">
                              {[
                                { h: "35%", c: "from-blue-400 to-blue-600", l: "Jan" },
                                { h: "55%", c: "from-indigo-400 to-indigo-600", l: "Feb" },
                                { h: "45%", c: "from-purple-400 to-purple-600", l: "Mar" },
                                { h: "75%", c: "from-pink-400 to-pink-600", l: "Apr" },
                                { h: "65%", c: "from-rose-400 to-rose-600", l: "May" },
                                { h: "92%", c: "from-primary to-blue-700", l: "Jun" }
                              ].map((bar, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                                  <div 
                                    style={{ height: bar.h }}
                                    className={`w-full bg-gradient-to-t ${bar.c} rounded-t-sm md:rounded-t-lg transition-all duration-500 relative`}
                                  >
                                    {i === 5 && <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] font-bold text-primary">₹84k</div>}
                                  </div>
                                  <span className="text-[8px] md:text-[10px] text-slate-400 font-bold">{bar.l}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-4 md:p-6 border rounded-xl md:rounded-2xl bg-[#0f172a] text-white shadow-xl relative overflow-hidden">
                             <h4 className="text-xs font-bold mb-4 flex items-center gap-2"><Users className="h-3 w-3 text-primary" /> Family Vault</h4>
                             <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                               <p className="text-[10px] text-slate-400 mb-1 font-bold">KAPOOR FAMILY</p>
                               <div className="flex justify-between items-center"><span className="text-xs">Health Plus</span><span className="text-[10px] font-bold text-orange-400">12 Days</span></div>
                             </div>
                          </div>
                        </div>

                        {/* Policy Table: Horizontal scroll ONLY on the table to keep layout intact */}
                        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                          <div className="overflow-x-auto no-scrollbar">
                            <table className="w-full text-left text-[10px] md:text-[11px] min-w-[450px]">
                              <tbody className="divide-y divide-slate-100">
                                {[
                                  { name: "Rahul Sharma", type: "Health Plus", amount: "₹18.5k", phone: "919876543210" },
                                  { name: "Anita Desai", type: "Motor Gold", amount: "₹12.4k", phone: "919876543211" }
                                ].map((row, i) => (
                                  <tr key={i} className="hover:bg-slate-50/50">
                                    <td className="px-4 md:px-6 py-3 md:py-4 font-bold text-slate-700 whitespace-nowrap">{row.name}</td>
                                    <td className="px-4 md:px-6 py-3 md:py-4 text-slate-500 whitespace-nowrap">{row.type}</td>
                                    <td className="px-4 md:px-6 py-3 md:py-4 text-right font-black whitespace-nowrap">{row.amount}</td>
                                    <td className="px-4 md:px-6 py-3 md:py-4 text-center">
                                      <ActionButtons phone={row.phone} policyId={`INS-0${i+1}`} clientName={row.name} />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === FEATURE CARDS SECTION === */}
        <section id="detailed-features" className="py-16 md:py-24 bg-white border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16 px-4">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Everything You Need to Run Your Agency</h2>
              <p className="mt-4 text-sm md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                No more jumping between portals. Insurica provides a unified toolkit designed for Indian insurance professionals.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <FeatureCard icon={BellRing} title="Renewal Intelligence" desc="Automatically identifies upcoming expiries across Life, Health, and General insurance." />
              <FeatureCard icon={Database} title="360° Client Vault" desc="Securely store policy PDFs, KYC documents, and claim history in one encrypted database." />
              <FeatureCard icon={BarChart3} title="Commission Analytics" desc="Track expected vs. received commissions from various insurers without manual calculation." />
              <FeatureCard icon={Users} title="Lead Pipeline" desc="Manage prospects from inquiry to issuance. Never let a hot lead go cold." />
              <FeatureCard icon={Smartphone} title="Mobile-First UI" desc="Access your entire agency portfolio from your smartphone while meeting clients." />
              <FeatureCard icon={ShieldCheck} title="Bank-Grade Security" desc="Your data is protected with 256-bit encryption and IRDAI-compliant standards." />
            </div>
          </div>
        </section>

        {/* === BRAND ORIGIN === */}
        <section className="py-16 md:py-24 bg-slate-50 border-t">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Built by Pixalara</p>
            <h2 className="text-xl md:text-3xl font-bold mb-6 italic text-slate-800 leading-tight">"Digital Experiences. Engineered to Scale."</h2>
            <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto italic">
              "Insurica was born to empower the Indian insurance professional with the tools they truly deserve."
            </p>
          </div>
        </section>

        <CTASection title="Ready to Scale Your Agency?" subtitle="Join 10,000+ agents today. Start your 30-day free trial." />
      </main>
      <Footer />
    </div>
  );
}

{/* Helper Sidebar Item */}
function SidebarItem({ icon: Icon, label, active = false, mini = false }: { icon: any, label: string, active?: boolean, mini?: boolean }) {
  return (
    <div className={`flex items-center gap-2 md:gap-3 px-3 py-2 md:py-2.5 rounded-lg transition-all whitespace-nowrap shrink-0 ${active ? 'bg-primary/10 md:border-l-4 md:border-primary text-white' : 'text-slate-400 md:hover:bg-white/5'}`}>
      <Icon className={`h-4 w-4 ${active ? 'text-primary' : 'text-slate-500'}`} />
      <span className="text-[10px] md:text-xs font-medium">{label}</span>
    </div>
  );
}

{/* Helper Stat Card */}
function StatCard({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) {
  return (
    <div className="p-4 md:p-5 border rounded-xl md:rounded-2xl bg-white shadow-sm flex flex-col sm:block">
      <Icon className={`h-4 w-4 md:h-5 md:w-5 ${color} mb-2`} />
      <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase">{label}</p>
      <h4 className="text-lg md:text-xl font-black text-slate-900 leading-tight">{value}</h4>
    </div>
  );
}

{/* Helper Feature Card */}
function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="group p-6 md:p-8 rounded-xl md:rounded-2xl border bg-white hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 text-primary rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="h-5 w-5 md:h-6 md:w-6" />
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{title}</h3>
      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
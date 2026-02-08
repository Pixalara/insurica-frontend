import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Zap, BarChart3, BellRing, Smartphone, ClipboardCheck, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FeatureBlock from "@/components/FeatureBlock";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-white">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-primary/5 text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                Designed for Indian Insurance Agents
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
                The intelligent dashboard for modern insurance agents. <span className="text-primary">Manage clients, track renewals, and scale your agency with precision.</span>
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Track renewals, clients, and commissions from one simple dashboard.
                Stop losing business to missed deadlines and manual tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                  <Link href="/contact">Request Access <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                {/* Scroll link to the new detailed features section */}
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 h-auto">
                  <a href="#detailed-features">Explore Full Capabilities</a>
                </Button>
              </div>
              <div className="mt-12 w-full max-w-5xl rounded-xl border bg-slate-50 p-4 shadow-2xl">
                <div className="aspect-video rounded-lg bg-white border flex items-center justify-center text-muted-foreground italic">
                  [Dashboard Preview Image Placeholder]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - Remains as per original */}
        <section className="py-20 bg-slate-50 border-y">
          {/* ... (Existing Problem Section Content) ... */}
        </section>

        {/* Detailed Features Section (Merged from Features Page) */}
        <section id="detailed-features" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Everything You Need to Run Your Agency
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                No more jumping between portals. Insurica provides a unified toolkit designed for the specific workflow of Indian insurance professionals.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1: Renewal Intelligence */}
              <div className="group p-8 rounded-2xl border bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <BellRing className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Renewal Intelligence</h3>
                <p className="text-muted-foreground mb-4">Automatically identifies upcoming expiries across Life, Health, and General insurance categories.</p>
                <ul className="text-sm space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> WhatsApp Integration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> 30/60/90 Day Alerts</li>
                </ul>
              </div>

              {/* Feature 2: 360 Client Vault */}
              <div className="group p-8 rounded-2xl border bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">360° Client Vault</h3>
                <p className="text-muted-foreground mb-4">Securely store policy PDFs, KYC documents, and claim history in one encrypted database.</p>
                <ul className="text-sm space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> One-Click Document Retrieval</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Family Grouping Features</li>
                </ul>
              </div>

              {/* Feature 3: Commission Analytics */}
              <div className="group p-8 rounded-2xl border bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Commission Tracking</h3>
                <p className="text-muted-foreground mb-4">Track expected vs. received commissions from various insurers without manual calculation.</p>
                <ul className="text-sm space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Payout Reconciliation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Performance Analytics</li>
                </ul>
              </div>

              {/* Feature 4: Lead Pipeline */}
              <div className="group p-8 rounded-2xl border bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Lead Pipeline</h3>
                <p className="text-muted-foreground mb-4">Manage prospects from inquiry to issuance. Never let a hot lead go cold due to poor follow-up.</p>
              </div>

              {/* Feature 5: Multi-Insurer Sync */}
              <div className="group p-8 rounded-2xl border bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Multi-Insurer View</h3>
                <p className="text-muted-foreground mb-4">A single source of truth across all your empanelled companies. No more 10-portal mornings.</p>
              </div>

              {/* Feature 6: Digital Presence */}
              <div className="group p-8 rounded-2xl border bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile-First UI</h3>
                <p className="text-muted-foreground mb-4">Access your entire agency portfolio from your smartphone while meeting clients in the field.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Origin Section */}
        <section className="py-20 bg-slate-50 border-t">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold text-muted-foreground mb-8">Built by Pixalara</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="max-w-2xl text-lg text-muted-foreground italic">
                "We built Insurica because we saw how Indian insurance agents were struggling with outdated tools. 
                Our goal is to empower agents with technology that makes them more efficient and more profitable."
              </p>
              <div className="font-semibold text-primary">— The Pixalara Team</div>
            </div>
          </div>
        </section>

        <CTASection 
          title="Ready to Scale Your Agency?"
          subtitle="Stop managing spreadsheets and start managing relationships. Request your access today."
        />
      </main>
      <Footer />
    </div>
  );
}
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Zap } from "lucide-react";
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
                Never Miss an Insurance <span className="text-primary">Renewal</span> Again
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Track renewals, clients, and commissions from one simple dashboard. 
                Stop losing business to missed deadlines and manual tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                  <Link href="/contact">Request Access <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 h-auto">
                  <Link href="/features">Explore Features</Link>
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

        {/* Problem Section */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                The Old Way is Costing You Money
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Managing a growing insurance portfolio shouldn't be a nightmare.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Missed Policy Renewals",
                  description: "Forgetting a renewal means lost commission and unprotected clients. It happens more often than you think."
                },
                {
                  title: "Excel-based Tracking",
                  description: "Spreadsheets are fragile, hard to update, and impossible to scale. You need a database, not a table."
                },
                {
                  title: "Multiple Insurer Portals",
                  description: "Logging into 10 different portals every morning just to check status is a waste of your valuable time."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border shadow-sm">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold">!</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6 text-left">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  One Dashboard to Rule Them All
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Insurica brings all your policy data into one clean interface. 
                  Know exactly who needs to renew today, this week, or next month.
                </p>
                <ul className="space-y-4">
                  {[
                    "Unified view across all insurance providers",
                    "Automated renewal alerts and reminders",
                    "Complete client history at your fingertips",
                    "Commission tracking made simple"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <span className="font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button asChild size="lg">
                    <Link href="/contact">Get Started Now</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 w-full rounded-2xl border bg-slate-100 p-2 shadow-xl aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center italic text-muted-foreground">
                [Product Illustration Placeholder]
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Preview */}
        <section className="py-20 bg-slate-50 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built for the Modern Agent
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <FeatureBlock 
                icon={Zap} 
                title="Renewal Tracking" 
                description="Live tracking of every policy expiry with automated alerts so you never miss a follow-up."
              />
              <FeatureBlock 
                icon={Users} 
                title="Client Management" 
                description="Store documents, contact details, and policy history for every client in one secure place."
              />
              <FeatureBlock 
                icon={ShieldCheck} 
                title="Lead Management" 
                description="Track prospective clients from initial inquiry to policy issuance without losing data."
              />
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white border-t">
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

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PricingCard from "@/components/PricingCard";
import { CheckCircle2, Zap, ShieldCheck } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-white py-20 border-b">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-primary/5 text-primary mb-6 animate-pulse">
              <Zap className="h-4 w-4 mr-2" />
              Start with a 30-Day Free Trial
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              No hidden fees. No credit card required to start your trial. 
              Choose the plan that matches your current client base.
            </p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
              
              {/* Tier 1: 1500 Clients */}
              <PricingCard 
                title="Agency Starter"
                price="999"
                duration="/year"
                description="For up to 1,500 clients"
                features={[
                  "Up to 1,500 active clients",
                  "30 Days Free Trial included",
                  "Single user access",
                  "Full features access",
                  "Email support"
                ]}
              />
              
              {/* Tier 2: 1500-3000 Clients */}
              <PricingCard 
                title="Agency Plus"
                price="1,499"
                duration="/year"
                isPopular={true}
                description="For upto 3,000 clients"
                features={[
                  "Upto 3,000 active clients",
                  "30 Days Free Trial included",
                  "Multi-user Team Support up to 5 users",
                  "Full features access",
                  "Priority WhatsApp support"
                ]}
              />

              {/* Tier 3: Above 3000 Clients */}
              <PricingCard 
                title="Agency Pro"
                price="1,999"
                duration="/year"
                description="For more than 3,000 clients"
                features={[
                  "More than 3,000 active clients",
                  "30 Days Free Trial included",
                  "Multi-user Team Support up to 50 users",
                  "Full features access",
                  "Priority call support",
                  "Dedicated account manager"
                ]}
              />
            </div>
            
            {/* Value Proposition Box */}
            <div className="mt-20 max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm">
              <div className="flex justify-center mb-4 text-primary">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Risk-Free Integration</h3>
              <p className="text-muted-foreground mb-6">
                Every plan starts with a <strong>full 30-day free trial</strong>. We provide free data migration assistance to help you move from Excel or other portals seamlessly.
              </p>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                Trusted by 500+ Indian Insurance Professionals
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How does the 30-day trial work?
                  </h4>
                  <p className="text-muted-foreground">You get unrestricted access to all features for 30 days. No credit card is required. We&apos;ll remind you before the trial ends.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    What if I exceed my client limit?
                  </h4>
                  <p className="text-muted-foreground">Your existing data remains safe. You will be prompted to upgrade to the next tier only when you try to add the 1,501st or 3,001st client.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Is this a monthly or annual fee?
                  </h4>
                  <p className="text-muted-foreground">To keep costs low for agents, we offer annual billing. This ensures your dashboard and renewal alerts run uninterrupted for the full year.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Can I export my data?
                  </h4>
                  <p className="text-muted-foreground">Yes, you own your data. You can export your entire client list and policy details to Excel at any time with one click.</p>
                </div>
              </div>
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
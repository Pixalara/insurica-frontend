import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PricingCard from "@/components/PricingCard";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-white py-20 border-b">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees, no long-term contracts.
            </p>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <PricingCard 
                title="Individual Agent"
                description="Perfect for independent insurance agents starting to digitize their portfolio."
                features={[
                  "Up to 500 active policies",
                  "Core renewal tracking dashboard",
                  "Basic client management",
                  "Automated email reminders",
                  "Mobile app access",
                  "Standard support"
                ]}
              />
              <PricingCard 
                title="Small Agency"
                description="Ideal for growing agencies with multiple agents and a large client base."
                isPopular={true}
                features={[
                  "Unlimited active policies",
                  "Advanced agency dashboard",
                  "Team collaboration features",
                  "Document vault for every client",
                  "Custom commission reports",
                  "Priority phone & email support",
                  "Bulk data import assistance"
                ]}
              />
            </div>
            
            <div className="mt-20 max-w-3xl mx-auto bg-white p-8 rounded-xl border text-center shadow-sm">
              <h3 className="text-xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-6">
                For large insurance firms or national agencies, we offer customized enterprise plans with white-labeling and dedicated account management.
              </p>
              <p className="font-medium text-primary italic">
                "Pricing may vary based on usage and agency size."
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-bold text-lg mb-2">Can I switch plans later?</h4>
                  <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time as your business needs change.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Is there a free trial?</h4>
                  <p className="text-muted-foreground">We offer a personalized demo and a limited-time trial for all agents who request access.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Is my data secure?</h4>
                  <p className="text-muted-foreground">Absolutely. We use industry-standard encryption and security protocols to protect your client data.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Do you provide support?</h4>
                  <p className="text-muted-foreground">Yes, we provide dedicated support via email and WhatsApp for all our users.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection 
          title="Start Your Free Demo Today"
          subtitle="Join the future of insurance management. Request access and our team will get back to you within 24 hours."
        />
      </main>
      <Footer />
    </div>
  );
}

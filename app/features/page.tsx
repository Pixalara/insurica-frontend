import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Zap, Users, BarChart3, Bell, Smartphone, Shield } from "lucide-react";

const features = [
  {
    title: "Renewal Tracking",
    description: "Keep a bird's-eye view of all upcoming renewals across all insurers. Our system automatically flags policies that are about to expire, giving you enough time to reach out to your clients and secure the renewal.",
    icon: Bell,
  },
  {
    title: "Client & Policy Management",
    description: "No more digging through paper files or multiple emails. Store every client's contact info, document copies, and full policy history in one organized digital vault. Accessible from anywhere, anytime.",
    icon: Users,
  },
  {
    title: "Lead Management",
    description: "Turn inquiries into policies. Track every lead from the first phone call to the final premium payment. Never let a potential client slip through the cracks again due to lack of follow-up.",
    icon: Zap,
  },
  {
    title: "Commission Insights",
    description: "Understand your earnings better. Track commissions across different insurers and products. Get simple reports that show you where your business is growing and which products are most profitable.",
    icon: BarChart3,
  },
  {
    title: "Mobile Friendly",
    description: "Your business doesn't stop when you're away from your desk. Insurica is fully responsive, meaning you can check client details or renewal dates right from your smartphone while meeting clients.",
    icon: Smartphone,
  },
  {
    title: "Data Security",
    description: "Your data is your most valuable asset. We use bank-grade encryption to ensure that your client information and policy data are kept private and secure, with regular backups to prevent any data loss.",
    icon: Shield,
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-slate-50 py-20 border-b">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
              Insurica.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              The intelligent dashboard for modern insurance agents. Manage clients, track renewals, and scale your agency with precision.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">No Technical Jargon. Just Results.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              We've designed Insurica to be as simple as using WhatsApp. No complex training required. 
              Start managing your portfolio like a pro from day one.
            </p>
            <div className="inline-flex rounded-2xl border bg-white p-2 shadow-lg overflow-hidden max-w-4xl w-full aspect-video items-center justify-center text-muted-foreground italic">
              [Feature Demo Screenshot Placeholder]
            </div>
          </div>
        </section>

        <CTASection 
          title="See Insurica in Action"
          subtitle="Request access today and our team will show you how Insurica can transform your daily workflow."
        />
      </main>
      <Footer />
    </div>
  );
}

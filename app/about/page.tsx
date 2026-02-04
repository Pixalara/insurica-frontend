import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Users, Target, Shield, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-white py-20 border-b">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              About <span className="text-primary">Insurica</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are on a mission to empower Indian insurance agents with the best-in-class technology 
              to manage their business and serve their clients better.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-16 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Built by Pixalara</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Insurica is a product of Pixalara, a technology company dedicated to building simple yet powerful 
                  solutions for specialized industries. Our team of engineers and designers spent months talking 
                  to insurance agents across India to understand their daily struggles.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We found that most agents were still relying on physical diaries, fragile Excel sheets, or 
                  overly complex software that was never built for the Indian market. Insurica was born out 
                  of a need for something simpler, faster, and more reliable.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: Users,
                    title: "Agent-First",
                    description: "Every feature we build is designed with the agent's workflow in mind."
                  },
                  {
                    icon: Target,
                    title: "Focus on Impact",
                    description: "We focus on solving the problems that cost you time and money."
                  },
                  {
                    icon: Shield,
                    title: "Trust & Security",
                    description: "Your data security is our top priority, always."
                  },
                  {
                    icon: Rocket,
                    title: "Continuous Innovation",
                    description: "We are constantly improving Insurica based on your feedback."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-xl border">
                    <item.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Our Vision for Indian Insurance</h2>
            <p className="text-xl opacity-90 leading-relaxed italic">
              "We believe that technology should be an enabler, not a barrier. Our vision is to digitize 
              the millions of insurance portfolios across India, helping agents become more efficient 
              and helping clients never lose coverage due to a missed renewal."
            </p>
            <p className="mt-8 font-semibold text-lg">— The Founders, Pixalara</p>
          </div>
        </section>

        <CTASection 
          title="Join the Insurica Community"
          subtitle="Be part of the digital revolution in the Indian insurance industry. Request access today."
        />
      </main>
      <Footer />
    </div>
  );
}

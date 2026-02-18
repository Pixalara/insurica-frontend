import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestAccessForm from "@/components/RequestAccessForm";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Activate Your <span className="text-primary">Renewal Dashboard</span>
                </h1>
                <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                  Stop managing renewals in spreadsheets. Start tracking clients, policies, and commissions in one simple system.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border shadow-sm">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email Support</h3>
                    <p className="text-muted-foreground">For onboarding, partnerships, or product queries.</p>
                    <a href="mailto:insurica.sales@pixalara.com" className="text-primary font-medium hover:underline">
                      insurica.sales@pixalara.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border shadow-sm">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">WhatsApp Assistance</h3>
                    <p className="text-muted-foreground">Mon–Fri | 9 AM – 6 PM</p>
                    <p className="text-muted-foreground">Quick setup and support guidance.</p>
                    <p className="text-foreground font-medium">+91 99886-88654</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border shadow-sm">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Sales &amp; Onboarding Call</h3>
                    <p className="text-muted-foreground">For agencies ready to migrate and activate Insurica.</p>
                    <p className="text-foreground font-medium">+91 99886-88654</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-bold mb-2">What Happens After You Apply?</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                  <li>We understand your current renewal tracking process.</li>
                  <li>We guide you through quick data import (Excel or manual entry).</li>
                  <li>Your dashboard is configured for your agency.</li>
                  <li>Your upcoming renewals are automatically organized and tracked.</li>
                </ol>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-lg opacity-50 pointer-events-none" />
              <div className="relative z-10">
                <RequestAccessForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

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
                  Request <span className="text-primary">Early Access</span>
                </h1>
                <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                  Tell us a bit about your agency, and our team will get back to you with a personalized demo and access credentials.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border shadow-sm">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-muted-foreground">For sales and partnerships</p>
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
                    <h3 className="font-bold">WhatsApp Support</h3>
                    <p className="text-muted-foreground">Available Mon-Fri, 9am - 6pm</p>
                    <p className="text-foreground font-medium">+91 99886 88654</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border shadow-sm">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Call Sales</h3>
                    <p className="text-muted-foreground">Direct line for urgent inquiries</p>
                    <p className="text-foreground font-medium">+91 99886 88654</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-bold mb-2">What happens next?</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                  <li>We'll review your agency details</li>
                  <li>Our team will call you for a quick discovery session</li>
                  <li>You'll get a personalized walkthrough of the platform</li>
                  <li>We'll set up your account and help you import your data</li>
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

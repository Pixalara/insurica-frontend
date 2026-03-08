import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestAccessForm from "@/components/RequestAccessForm";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Header />
      <main className="flex-grow relative overflow-hidden py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                  Activate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Renewal Dashboard</span>
                </h1>
                <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-lg">
                  Stop managing renewals in spreadsheets. Start tracking clients, policies, and commissions in one simple system.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-sm hover:border-indigo-500/40 transition-colors group">
                  <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                    <Mail className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Email Support</h3>
                    <p className="text-slate-400 text-sm mb-1">For onboarding, partnerships, or product queries.</p>
                    <a href="mailto:insurica.sales@pixalara.com" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                      insurica.sales@pixalara.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-sm hover:border-emerald-500/40 transition-colors group">
                  <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                    <MessageSquare className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">WhatsApp Assistance</h3>
                    <p className="text-slate-400 text-sm mb-1">Mon–Fri | 9 AM – 6 PM</p>
                    <p className="text-slate-400 text-sm mb-1">Quick setup and support guidance.</p>
                    <p className="text-slate-200 font-medium">+91 99886-88654</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-sm hover:border-blue-500/40 transition-colors group">
                  <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Sales &amp; Onboarding Call</h3>
                    <p className="text-slate-400 text-sm mb-1">For agencies ready to migrate and activate Insurica.</p>
                    <p className="text-slate-200 font-medium">+91 99886-88654</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20">
                <h4 className="font-bold mb-3 text-white text-lg">What Happens After You Apply?</h4>
                <ol className="list-decimal list-inside space-y-3 text-slate-300">
                  <li className="pl-2 marker:text-indigo-400">We understand your current renewal tracking process.</li>
                  <li className="pl-2 marker:text-indigo-400">We guide you through quick data import (Excel or manual entry).</li>
                  <li className="pl-2 marker:text-indigo-400">Your dashboard is configured for your agency.</li>
                  <li className="pl-2 marker:text-indigo-400">Your upcoming renewals are automatically organized and tracked.</li>
                </ol>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
               <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative z-10 h-full">
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

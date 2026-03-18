import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({ 
  title = "Ready to transform your insurance business?", 
  subtitle = "Join hundreds of agents who are already using Insurica to grow their business."
}: CTASectionProps) {
  return (
    <section className="bg-slate-950 py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button size="lg" asChild className="group relative w-full sm:w-auto text-lg px-12 py-7 h-auto bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-black tracking-tight rounded-2xl border-0 shadow-[0_0_25px_rgba(79,70,229,0.25)] hover:shadow-[0_0_35px_rgba(79,70,229,0.4)] transition-all duration-300 active:scale-95 overflow-hidden">
              <Link href="/contact" className="flex items-center">
                <span className="relative z-10">Request Early Access</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </Link>
            </Button>
            <Link href="/pricing" className="text-slate-300 hover:text-white font-bold tracking-tight text-lg flex items-center gap-3 group px-4 py-4 transition-all transition-colors">
              Explore Pricing 
              <div className="w-10 h-px bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

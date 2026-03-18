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
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto text-lg px-10 py-7 h-auto bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-xl shadow-xl shadow-white/5 transition-all">
              <Link href="/contact">Request Access <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Link href="/pricing" className="text-slate-300 hover:text-white font-semibold flex items-center gap-2 group p-4">
              Explore Pricing 
              <span className="w-6 h-px bg-slate-700 group-hover:bg-indigo-500 transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

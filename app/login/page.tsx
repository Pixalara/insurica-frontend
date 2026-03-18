import Link from "next/link";
import { ArrowLeft, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors group mb-12">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="flex-grow flex items-center justify-center px-6 relative z-10 pb-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="inline-flex h-16 w-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl items-center justify-center text-white font-black text-2xl shadow-2xl shadow-indigo-500/20 mb-8 mx-auto">
              I
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Account Login</h1>
            <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs font-bold text-cyan-400 backdrop-blur-sm tracking-widest uppercase">
              Early Access Only
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 rounded-t-full"></div>
            
            <div className="space-y-6 text-center">
              <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 inline-flex mb-2">
                <Lock className="h-6 w-6 text-indigo-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Closed Beta Access</h2>
              <p className="text-slate-400 leading-relaxed text-sm">
                Insurica is currently in a controlled beta for invited agencies only as we ensure 100% data security protocols.
              </p>
              
              <div className="pt-4 space-y-4">
                <Button asChild className="w-full h-14 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-black uppercase tracking-widest text-xs border-0 shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all active:scale-[0.98]">
                  <Link href="/contact">Request Access Preview <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                
                <p className="text-xs text-slate-500 font-medium">
                  Existing agent? Contact your account manager for portal access.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center mt-8 text-slate-500 text-sm font-medium">
            &copy; 2026 Insurica by Pixalara. Engineered to Scale.
          </p>
        </div>
      </div>
    </div>
  );
}

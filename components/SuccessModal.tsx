"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
}

export default function SuccessModal({ isOpen, onClose, name }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-12 text-center"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] -z-10" />
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 12 }}
              className="h-24 w-24 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl flex items-center justify-center mb-8 border border-emerald-500/30"
            >
              <CheckCircle2 className="h-12 w-12 text-emerald-400" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
              Submission Successful!
            </h2>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Thank you, <span className="text-indigo-400 font-bold">{name}</span>! Your request for early access has been received. Our team will contact you within the next 24 hours.
            </p>

            <div className="grid gap-4 w-full">
              <Button 
                onClick={onClose}
                className="w-full h-14 text-lg font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl transition-all shadow-lg shadow-indigo-500/20 group"
              >
                Close & Explore 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Subtle Bottom Accent */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

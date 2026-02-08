"use client"; // Essential for handling onClick events in Next.js App Router

import { ArrowRight, ClipboardCheck, MessageCircle } from "lucide-react";

interface ActionButtonsProps {
  phone: string;
  policyId: string;
  clientName: string;
}

/**
 * ActionButtons Component
 * Provides interactive triggers for WhatsApp messaging and PDF downloads.
 * Marked as a Client Component to support browser-based event handlers.
 */
export default function ActionButtons({ phone, policyId, clientName }: ActionButtonsProps) {
  
  // Logic to open WhatsApp with a pre-filled reminder message
  const handleWhatsApp = () => {
    const message = `Hello ${clientName}, this is a reminder regarding your policy ${policyId} from Insurica-A Simple Agent Dashboard.`;
    // Encodes the string for a safe URL and opens in a new tab
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Placeholder for future PDF generation or cloud storage retrieval
  const handleDownload = () => {
    console.log(`Downloading PDF for ${policyId}`);
    // Example: window.location.href = `/api/download/${policyId}`;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {/* WhatsApp Action Button */}
      <button 
        onClick={handleWhatsApp}
        title="Send WhatsApp Reminder"
        className="p-2 rounded-lg bg-green-50 text-green-600 border border-green-100 hover:bg-green-600 hover:text-white transition-all shadow-sm active:scale-95"
      >
        <MessageCircle className="h-4 w-4" />
      </button>
      
      {/* PDF Download Action Button */}
      <button 
        onClick={handleDownload}
        title="Download Policy PDF"
        className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95"
      >
        <ClipboardCheck className="h-4 w-4" />
      </button>

      {/* Navigation Action Button */}
      <button 
        title="View Full Details"
        className="p-2 rounded-lg bg-slate-50 text-slate-400 border border-slate-200 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
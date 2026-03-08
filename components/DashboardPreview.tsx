"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, BellRing, BarChart3, TrendingUp, ShieldCheck, Zap, 
  CheckCircle2, ClipboardCheck, Activity, ArrowUpRight
} from "lucide-react";

// Mock Data
const chartData = [
  { h: "35%", c: "from-indigo-900 to-indigo-600", l: "Jan", v: "₹32k" },
  { h: "55%", c: "from-indigo-800 to-indigo-500", l: "Feb", v: "₹48k" },
  { h: "45%", c: "from-indigo-700 to-indigo-400", l: "Mar", v: "₹41k" },
  { h: "75%", c: "from-indigo-600 to-cyan-500", l: "Apr", v: "₹68k" },
  { h: "65%", c: "from-cyan-600 to-cyan-400", l: "May", v: "₹59k" },
  { h: "92%", c: "from-indigo-500 to-cyan-300", l: "Jun", v: "₹84k" }
];

const feedItems = [
  { id: 1, text: "Upcoming Renewal: Sharma Family (Health)", time: "In 2 Days", type: "renewal", icon: BellRing, color: "text-amber-400", bg: "bg-amber-500/10" },
  { id: 2, text: "New lead assigned: Rahul Sharma", time: "10m ago", type: "lead", icon: Users, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { id: 3, text: "Upcoming Renewal: Gupta Motors", time: "In 5 Days", type: "renewal", icon: BellRing, color: "text-amber-400", bg: "bg-amber-500/10" },
  { id: 4, text: "Policy renewed for Kapoor Family", time: "1h ago", type: "renewal", icon: RefreshCcw, color: "text-emerald-400", bg: "bg-emerald-500/10" }
];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeFeedItems, setActiveFeedItems] = useState<typeof feedItems>([]);

  // Entrance animation and feed simulation
  useEffect(() => {
    setMounted(true);
    
    // Stagger feed items entering
    feedItems.forEach((item, index) => {
      setTimeout(() => {
        setActiveFeedItems(prev => [item, ...prev].slice(0, 3)); // Keep only latest 3
      }, (index + 1) * 2000); // Add a new item every 2 seconds
    });
  }, []);

  if (!mounted) return <div className="min-h-[500px] w-full bg-slate-900 rounded-2xl animate-pulse"></div>;

  return (
    <div className="relative rounded-xl md:rounded-2xl border border-slate-700/50 bg-slate-900 shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)] md:shadow-[0_0_100px_-15px_rgba(99,102,241,0.25)] overflow-hidden">
      <div className="bg-slate-900 w-full flex flex-col md:flex-row min-h-[500px] md:aspect-[16/11]">
        
        {/* === Mobile Sidebar === */}
        <div className="md:hidden flex overflow-x-auto bg-slate-950 p-4 gap-4 no-scrollbar border-b border-slate-800">
          <SidebarItem icon={TrendingUp} label="Overview" active={activeTab === "Overview"} onClick={() => setActiveTab("Overview")} mini />
          <SidebarItem icon={Users} label="Clients" active={activeTab === "Clients"} onClick={() => setActiveTab("Clients")} mini />
          <SidebarItem icon={ShieldCheck} label="General" mini />
          <SidebarItem icon={Zap} label="Health" mini />
        </div>

        {/* === Desktop Sidebar === */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[200px] lg:w-[240px] h-full bg-slate-950 hidden md:flex flex-col p-6 border-r border-slate-800 shrink-0"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]">I</div>
            <span className="text-white font-bold tracking-tight">Insurica.</span>
          </div>
          <div className="space-y-1">
            <SidebarItem icon={TrendingUp} label="Overview" active={activeTab === "Overview"} onClick={() => setActiveTab("Overview")} />
            <SidebarItem icon={Users} label="Clients" active={activeTab === "Clients"} onClick={() => setActiveTab("Clients")} />
            <SidebarItem icon={ShieldCheck} label="General" />
            <SidebarItem icon={Zap} label="Health" />
            <SidebarItem icon={CheckCircle2} label="Life" />
            <div className="my-4 border-t border-slate-800"></div>
            <SidebarItem icon={ClipboardCheck} label="Leads" />
          </div>
        </motion.div>

        {/* === Main Content Area === */}
        <div className="flex-1 flex flex-col bg-slate-900 overflow-hidden relative">
          
          {/* Header */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-14 md:h-16 border-b border-slate-800 flex items-center justify-between px-4 md:px-8 bg-slate-900/50 backdrop-blur-sm relative z-20"
          >
            <h3 className="font-bold text-slate-200 text-xs md:text-sm">Agent Performance Dashboard</h3>
            <div className="relative">
              <BellRing className="h-4 w-4 md:h-5 md:w-5 text-slate-400 cursor-pointer hover:text-white transition-colors" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-rose-500 rounded-full animate-ping"></span>
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-rose-500 rounded-full"></span>
            </div>
          </motion.div>

          {/* Dashboard Grid */}
          <div className="p-4 md:p-8 space-y-4 md:space-y-6 overflow-y-auto relative z-10 h-full">
            
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <AnimatedStatCard icon={Users} label="Total Clients" value={1248} prefix="" suffix="" color="text-cyan-400" delay={0.3} />
              <AnimatedStatCard icon={BellRing} label="Renewals (30d)" value={42} prefix="" suffix="" color="text-amber-400" delay={0.4} />
              <AnimatedStatCard icon={BarChart3} label="Commission" value={84200} prefix="₹" suffix="" color="text-emerald-400" delay={0.5} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 pb-4">
              
              {/* Interactive Bar Chart */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="lg:col-span-2 p-5 md:p-6 border border-slate-800 rounded-xl md:rounded-2xl bg-slate-950 shadow-sm overflow-hidden relative group"
              >
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-slate-200">Revenue Growth</h4>
                    <p className="text-[10px] text-slate-500 mt-1">Last 6 Months Projection</p>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                    <ArrowUpRight className="h-3 w-3" />
                    <span className="text-[10px] font-bold">+24%</span>
                  </div>
                </div>

                <div className="h-32 md:h-48 flex items-end gap-2 md:gap-4 px-1 md:px-2 relative">
                  {chartData.map((bar, i) => (
                    <div 
                      key={i} 
                      className="flex-1 flex flex-col items-center gap-2 h-full justify-end relative cursor-pointer"
                      onMouseEnter={() => setHoveredBar(i)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {/* Tooltip */}
                      <AnimatePresence>
                        {hoveredBar === i && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute -top-8 bg-slate-800 border border-slate-700 text-white text-[10px] py-1 px-2 rounded font-bold whitespace-nowrap z-30 shadow-xl"
                          >
                            {bar.v}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Bar */}
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: bar.h }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                        className={`w-full bg-gradient-to-t ${bar.c} rounded-t-sm md:rounded-t-lg transition-all duration-300 relative z-20 ${hoveredBar !== null && hoveredBar !== i ? 'opacity-50' : 'opacity-100 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]'}`}
                      />
                      <span className={`text-[8px] md:text-[10px] font-bold transition-colors ${hoveredBar === i ? 'text-cyan-400' : 'text-slate-500'}`}>{bar.l}</span>
                      
                      {/* Hover Highlight Column */}
                      {hoveredBar === i && (
                        <div className="absolute inset-y-0 -inset-x-1 bg-slate-800/30 rounded-lg -z-10 pointer-events-none"></div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Live Activity Feed */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-4 md:p-6 border border-slate-800 rounded-xl md:rounded-2xl bg-slate-950 text-white shadow-xl relative overflow-hidden flex flex-col"
              >
                <div className="flex items-center gap-2 text-slate-200 justify-between mb-4">
                   <h4 className="text-xs font-bold flex items-center gap-2"><Activity className="h-3 w-3 text-cyan-400" /> Live Activity</h4>
                   <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                </div>
                
                <div className="flex-1 flex flex-col gap-3 relative">
                  {/* Empty state while loading */}
                  {activeFeedItems.length === 0 && (
                     <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-xs italic">Awaiting activity...</div>
                  )}

                  <AnimatePresence>
                    {activeFeedItems.map((item) => (
                      <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                        animate={{ opacity: 1, height: "auto", marginBottom: 12 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 flex items-start gap-3"
                      >
                        <div className={`p-1.5 rounded-md shrink-0 mt-0.5 ${item.bg}`}>
                           <item.icon className={`h-3 w-3 ${item.color}`} />
                        </div>
                        <div>
                           <p className="text-[10px] md:text-xs text-slate-300 leading-snug">{item.text}</p>
                           <span className="text-[8px] md:text-[9px] text-slate-500 font-medium mt-1 block">{item.time}</span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                
                {/* Fade out bottom of feed */}
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper: Animated Stat Card
function AnimatedStatCard({ icon: Icon, label, value, prefix, suffix, color, delay }: any) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const duration = 1500; // 1.5 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easePercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setDisplayValue(Math.floor(easePercentage * value));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Delay start
    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrame);
    };
  }, [value, delay]);

  // Format currency/numbers
  const formattedValue = displayValue.toLocaleString('en-IN');

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="p-4 md:p-5 border border-slate-800 rounded-xl md:rounded-2xl bg-slate-950 hover:bg-slate-900 transition-colors shadow-sm group cursor-pointer relative overflow-hidden"
    >
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-slate-800/30 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
      
      <div className="relative z-10">
        <Icon className={`h-4 w-4 md:h-5 md:w-5 ${color} mb-2 group-hover:scale-110 transition-transform`} />
        <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</p>
        <h4 className="text-xl md:text-2xl font-black text-white mt-1">
          {prefix}{formattedValue}{suffix}
        </h4>
      </div>
    </motion.div>
  );
}

// Helper: Sidebar Item
function SidebarItem({ icon: Icon, label, active = false, mini = false, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-2 md:gap-3 px-3 py-2 md:py-2.5 rounded-lg transition-all shrink-0 cursor-pointer ${
        active 
          ? 'bg-indigo-500/20 md:border-l-2 md:border-cyan-400 text-cyan-300 shadow-[inset_2px_0_10px_rgba(99,102,241,0.1)]' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border-l-2 border-transparent'
      }`}
    >
      <Icon className={`h-4 w-4 ${active ? 'text-cyan-400' : 'text-slate-500'}`} />
      <span className="text-[10px] md:text-xs font-semibold whitespace-nowrap">{label}</span>
      {active && !mini && (
        <motion.div 
          layoutId="sidebar-active" 
          className="absolute left-0 w-[2px] h-4 bg-cyan-400 rounded-r-full hidden md:block"
        />
      )}
    </div>
  );
}

// Refresh Icon missing from standard lucide-react export occasionally, defining here for feed
function RefreshCcw(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2v6h-6" />
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M3 22v-6h6" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    </svg>
  );
}

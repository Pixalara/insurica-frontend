import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingCardProps {
  title: string;
  description: string;
  price?: string;
  duration?: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ 
  title, 
  description, 
  price, 
  duration = "/year",
  features, 
  isPopular 
}: PricingCardProps) {
  return (
    <Card className={`group flex flex-col h-full transition-all duration-300 ease-out cursor-pointer ${
      isPopular
        ? "border-primary/60 shadow-2xl shadow-primary/20 scale-105 z-10 bg-gradient-to-b from-primary/[0.04] to-white hover:-translate-y-2 hover:shadow-3xl hover:shadow-primary/30 hover:border-primary"
        : "border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/80 hover:border-primary/40"
    }`}>
      <CardHeader className="pb-4">
        {isPopular && (
          <div className="flex items-center gap-1.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full w-fit mb-3 shadow-md shadow-primary/30">
            <Sparkles className="h-3 w-3" />
            Most Popular
          </div>
        )}
        <CardTitle className={`text-2xl font-bold transition-colors duration-300 ${isPopular ? "text-primary" : "group-hover:text-primary"}`}>
          {title}
        </CardTitle>
        <CardDescription className="text-base mt-1.5 leading-relaxed">{description}</CardDescription>
      </CardHeader>

      {/* Divider */}
      <div className={`mx-6 h-px transition-colors duration-300 ${isPopular ? "bg-primary/20" : "bg-slate-100 group-hover:bg-primary/10"}`} />
      
      <CardContent className="flex-grow pt-6">
        {price && (
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-semibold text-muted-foreground">₹</span>
              <span className="text-5xl font-black tracking-tight">{price}</span>
              <span className="text-muted-foreground ml-1 font-medium text-sm">{duration}</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-md border border-emerald-100">
              <Check className="h-3 w-3" />
              30 Days Free Trial
            </div>
          </div>
        )}
        
        <ul className="space-y-3.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
              <span className={`flex-shrink-0 mt-0.5 flex items-center justify-center h-5 w-5 rounded-full transition-colors duration-300 ${
                isPopular ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"
              }`}>
                <Check className="h-3 w-3" />
              </span>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-6">
        <Button
          asChild
          className={`w-full h-12 text-base font-bold transition-all duration-300 ${
            isPopular
              ? "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35"
              : "hover:shadow-md hover:shadow-primary/20"
          }`}
          variant={isPopular ? "default" : "outline"}
        >
          <Link href="/contact">Get Started Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
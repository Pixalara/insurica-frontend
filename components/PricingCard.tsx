import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingCardProps {
  title: string;
  description: string;
  price?: string;
  duration?: string; // Fixes the build error
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ 
  title, 
  description, 
  price, 
  duration = "/year", // Default to annual billing
  features, 
  isPopular 
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col h-full transition-all duration-300 ${
      isPopular ? "border-primary shadow-2xl scale-105 z-10" : "hover:shadow-md"
    }`}>
      <CardHeader>
        {isPopular && (
          <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full w-fit mb-2">
            Most Popular
          </div>
        )}
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-base mt-2 leading-relaxed">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        {price && (
          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-4xl font-black tracking-tight">₹{price}</span>
              <span className="text-muted-foreground ml-2 font-medium">{duration}</span>
            </div>
            <p className="text-[10px] text-primary font-bold mt-2 uppercase tracking-tighter">
              + 30 Days Free Trial
            </p>
          </div>
        )}
        
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-6">
        <Button asChild className="w-full h-12 text-base font-bold shadow-lg shadow-primary/10" variant={isPopular ? "default" : "outline"}>
          <Link href="/contact">Get Started Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
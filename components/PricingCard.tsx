import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingCardProps {
  title: string;
  description: string;
  price?: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ title, description, price, features, isPopular }: PricingCardProps) {
  return (
    <Card className={`flex flex-col h-full ${isPopular ? "border-primary shadow-lg scale-105" : ""}`}>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {price && (
          <div className="mb-6">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-muted-foreground ml-2">/month</span>
          </div>
        )}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <Check className="h-5 w-5 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full h-11" variant={isPopular ? "default" : "outline"}>
          <Link href="/contact">Request Access</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

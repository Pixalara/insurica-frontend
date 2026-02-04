import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({ 
  title = "Ready to transform your insurance business?", 
  subtitle = "Join hundreds of agents who are already using Insurica to grow their business."
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-[600px] text-lg text-primary-foreground/90 md:text-xl">
          {subtitle}
        </p>
        <div className="mt-10 flex justify-center">
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6 h-auto">
            <Link href="/contact">Request Access</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

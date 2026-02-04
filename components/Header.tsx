import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight text-primary">Insurica.</span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/features" className="transition-colors hover:text-primary">Features</Link>
            <Link href="/pricing" className="transition-colors hover:text-primary">Pricing</Link>
            <Link href="/about" className="transition-colors hover:text-primary">About</Link>
          </nav>
          <Button asChild>
            <Link href="/contact">Request Access</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

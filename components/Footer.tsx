import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight text-primary">Insurica.</span>
            <p className="text-sm text-muted-foreground">
              Simplifying insurance management system for Indian agents.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Request Access</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:insurica.sales@pixalara.com" className="hover:text-primary transition-colors">
                  insurica.sales@pixalara.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Insurica. Powered by{" "}
            <a 
              href="https://pixalara.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors font-medium"
            >
              Pixalara
            </a>.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
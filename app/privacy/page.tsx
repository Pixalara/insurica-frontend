import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg font-medium text-foreground">Last Updated: February 3, 2026</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
              <p>
                Insurica ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our website and services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us when you request access to our platform, including:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Name and contact information (email address, mobile number)</li>
                <li>Business details (agent type, agency name)</li>
                <li>Communications you send to us</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Process your request for access and set up your account</li>
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you about our services, including updates and support</li>
                <li>Ensure the security and integrity of our platform</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Data Protection</h2>
              <p>
                We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Sharing of Information</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share your information with service providers who perform services on our behalf, or when required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="font-bold text-primary">
                Email: insurica.sales@pixalara.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

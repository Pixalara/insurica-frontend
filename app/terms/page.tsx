import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg font-medium text-foreground">Last Updated: February 3, 2026</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Insurica website and platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Use of Services</h2>
              <p>
                You must be at least 18 years old and a licensed insurance agent or agency representative to use our services. You agree to use the services only for lawful purposes and in accordance with these terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. User Responsibilities</h2>
              <p>You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>Ensuring the accuracy of the data you upload to the platform</li>
                <li>Complying with all applicable insurance regulations and laws</li>
                <li>All activities that occur under your account</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the Insurica platform, including but not limited to text, graphics, logos, and software, are the exclusive property of Pixalara and are protected by intellectual property laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Pixalara and Insurica shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the services after such changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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

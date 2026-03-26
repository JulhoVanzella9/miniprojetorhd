import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load below-the-fold sections for performance
const VisualProof = dynamic(() => import("@/components/VisualProof"));
const Benefits = dynamic(() => import("@/components/Benefits"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Offer = dynamic(() => import("@/components/Offer"));
const Guarantees = dynamic(() => import("@/components/Guarantees"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const StickyCTA = dynamic(() => import("@/components/StickyCTA"));

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Hero />
      <VisualProof />
      <Benefits />
      <Testimonials />
      <Offer />
      <Guarantees />
      <FAQ />

      {/* Final CTA */}
      <section className="px-4 py-12 max-w-2xl mx-auto">
        <div className="relative bg-gradient-to-br from-accent/10 via-surface to-surface border border-accent/20 rounded-3xl p-8 sm:p-10 text-center overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <span className="inline-block text-4xl mb-3">🎬</span>
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              Pronto Para Ter Seu <span className="text-accent">Cinema Portátil</span>?
            </h2>
            <p className="text-foreground/60 text-sm mb-6 max-w-md mx-auto">
              Não perca essa oferta. Estoque limitado com frete grátis para todo Brasil.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-foreground/50 mb-6">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Frete grátis
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Garantia 30 dias
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Compra segura
              </span>
            </div>

            <a
              href="/checkout"
              className="inline-flex items-center justify-center font-extrabold bg-accent hover:bg-accent-dark text-background rounded-full shadow-lg shadow-accent/25 transition-colors tracking-wide px-10 py-5 text-xl"
            >
              COMPRE AGORA
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <p className="text-xs text-foreground/30 mt-4">
              Pagamento seguro via Mercado Pago • Parcele em até 12x
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  );
}

import { PRODUCT } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-surface-light px-4 py-8 text-center">
      <p className="text-xs text-foreground/30">
        {new Date().getFullYear()} {PRODUCT.name}. Este site não é afiliado ao
        Mercado Livre. Todas as marcas mencionadas são de seus respectivos donos.
      </p>
    </footer>
  );
}

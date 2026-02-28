import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export default function Header({ variant = "solid" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solDropdown, setSolDropdown] = useState(false);
  const [location] = useLocation();

  const isTransparent = variant === "transparent";
  const textColor = isTransparent ? "text-white" : "text-foreground";
  const textMuted = isTransparent ? "text-white/70" : "text-muted-foreground";
  const bgClass = isTransparent ? "bg-transparent" : "bg-background/80 backdrop-blur-md border-b border-border/50";
  const logoFilter = isTransparent ? "brightness-0 invert" : "";

  return (
    <header className={`sticky top-0 z-50 w-full ${bgClass}`}>
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/horizontal-logo.png" alt="Paypers" className={`h-8 md:h-10 object-contain ${logoFilter}`} />
        </Link>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          <nav className="flex items-center gap-8 font-medium text-[14px]">
            <div
              className="relative"
              onMouseEnter={() => setSolDropdown(true)}
              onMouseLeave={() => setSolDropdown(false)}
            >
              <button className={`flex items-center gap-1 py-2 ${textMuted} hover:text-primary transition-colors`} data-testid="nav-solucoes">
                Soluções <ChevronDown className={`w-3.5 h-3.5 transition-transform ${solDropdown ? "rotate-180" : ""}`} />
              </button>
              {solDropdown && (
                <div className="absolute top-full left-0 pt-1 w-56 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-neutral-light p-2">
                    <Link href="/precatorios" className="block px-4 py-3 rounded-lg text-secondary hover:bg-neutral-lightest transition-colors text-[14px]" data-testid="nav-precatorios">
                      Venda seu Precatório
                    </Link>
                    <Link href="/tributaria" className="block px-4 py-3 rounded-lg text-secondary hover:bg-neutral-lightest transition-colors text-[14px]" data-testid="nav-tributaria">
                      Transação Tributária
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/investidores" className={`${textMuted} hover:text-primary transition-colors`} data-testid="nav-investidores">Investidores</Link>
            <Link href="/sobre" className={`${textMuted} hover:text-primary transition-colors`} data-testid="nav-sobre">Sobre</Link>
            <Link href="/contato" className={`${textMuted} hover:text-primary transition-colors`} data-testid="nav-contato">Contato</Link>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg px-6 h-11 text-[14px]" data-testid="button-baixar-app">
            Baixar App
          </Button>
        </div>

        <button className="md:hidden ml-auto" onClick={() => setMobileOpen(!mobileOpen)} data-testid="button-mobile-menu">
          {mobileOpen ? <X className={`w-6 h-6 ${textColor}`} /> : <Menu className={`w-6 h-6 ${textColor}`} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border p-4 space-y-2">
          <Link href="/precatorios" className="block px-4 py-3 rounded-lg text-secondary hover:bg-neutral-lightest" onClick={() => setMobileOpen(false)}>Venda seu Precatório</Link>
          <Link href="/tributaria" className="block px-4 py-3 rounded-lg text-secondary hover:bg-neutral-lightest" onClick={() => setMobileOpen(false)}>Transação Tributária</Link>
          <Link href="/investidores" className="block px-4 py-3 rounded-lg text-secondary hover:bg-neutral-lightest" onClick={() => setMobileOpen(false)}>Investidores</Link>
          <Link href="/sobre" className="block px-4 py-3 rounded-lg text-secondary hover:bg-neutral-lightest" onClick={() => setMobileOpen(false)}>Sobre</Link>
          <Link href="/contato" className="block px-4 py-3 rounded-lg text-secondary hover:bg-neutral-lightest" onClick={() => setMobileOpen(false)}>Contato</Link>
          <Button className="w-full bg-primary text-primary-foreground rounded-lg h-11 mt-2">Baixar App</Button>
        </div>
      )}
    </header>
  );
}

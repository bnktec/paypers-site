import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function SystemDesign() {
  return (
    <div className="min-h-screen bg-neutral-lightest text-neutral-darkest p-8">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <div>
          <div className="mb-4">
            <Link href="/" className="text-sm font-medium text-primary hover:underline">
              &larr; Voltar para o Site
            </Link>
          </div>
          <h1 className="text-4xl font-bold font-heading mb-2">Paypers Design System</h1>
          <p className="text-neutral-regular text-lg">Documentação atualizada com base no Figma enviado.</p>
        </div>

        {/* Colors */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-heading border-b pb-2">1. Cores (Baseadas no Figma)</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Base Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorSwatch name="base/light" hex="#FFFFFF" hasBorder textClass="text-neutral-darkest" />
                <ColorSwatch name="base/dark" hex="#10101B" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Brand Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                <ColorSwatch name="brand/lightest" hex="#F5FDE9" hasBorder textClass="text-neutral-darkest" />
                <ColorSwatch name="brand/lighter" hex="#F0FACD" hasBorder textClass="text-neutral-darkest" />
                <ColorSwatch name="brand/light" hex="#CAE888" textClass="text-neutral-darkest" />
                <ColorSwatch name="brand/regular" hex="#93C11F" />
                <ColorSwatch name="brand/dark" hex="#577815" />
                <ColorSwatch name="brand/darker" hex="#3C5007" />
                <ColorSwatch name="brand/darkest" hex="#182C01" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Neutral Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                <ColorSwatch name="neutral/lightest" hex="#FAFAFA" hasBorder textClass="text-neutral-darkest" />
                <ColorSwatch name="neutral/lighter" hex="#F5F5F5" hasBorder textClass="text-neutral-darkest" />
                <ColorSwatch name="neutral/light" hex="#D4D4D4" hasBorder textClass="text-neutral-darkest" />
                <ColorSwatch name="neutral/regular" hex="#737373" />
                <ColorSwatch name="neutral/dark" hex="#404040" />
                <ColorSwatch name="neutral/darker" hex="#171717" />
                <ColorSwatch name="neutral/darkest" hex="#0A0A0A" />
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-heading border-b pb-2">2. Tipografia (Montserrat)</h2>
            <p className="text-neutral-regular mt-2">Extraída diretamente do painel de fontes do Figma.</p>
          </div>

          <div className="space-y-8 bg-white p-8 rounded-xl border border-neutral-light">
            <div className="border-b border-neutral-lighter pb-6">
              <p className="text-[12px] text-neutral-regular mb-4 font-mono">Screen Title (h1) &bull; Montserrat SemiBold 48px &bull; Line Height 130% &bull; L.S -1.6%</p>
              <h1 className="text-[48px] font-semibold leading-[1.3] tracking-[-1.6%]">Simplificando a Negociação de Precatórios</h1>
            </div>

            <div className="border-b border-neutral-lighter pb-6">
              <p className="text-[12px] text-neutral-regular mb-4 font-mono">Section Title (h3) &bull; Montserrat SemiBold 24px &bull; Line Height 130% &bull; L.S -0.8%</p>
              <h2 className="text-[24px] font-semibold leading-[1.3] tracking-[-0.8%]">Simplificando a Negociação de Precatórios</h2>
            </div>

            <div className="border-b border-neutral-lighter pb-6">
              <p className="text-[12px] text-neutral-regular mb-4 font-mono">Section Inner Title (h5) &bull; Montserrat SemiBold 18px &bull; Line Height 150% &bull; L.S 0%</p>
              <h3 className="text-[18px] font-semibold leading-[1.5]">Simplificando a Negociação de Precatórios</h3>
            </div>

            <div className="border-b border-neutral-lighter pb-6">
              <p className="text-[12px] text-neutral-regular mb-4 font-mono">Body (p) &bull; Montserrat Regular 16px &bull; Line Height 150% &bull; L.S 0%</p>
              <p className="text-[16px] leading-[1.5]">Simplificando a Negociação de Precatórios</p>
            </div>

            <div className="border-b border-neutral-lighter pb-6">
              <p className="text-[12px] text-neutral-regular mb-4 font-mono">Small - Regular (small) &bull; Montserrat Regular 14px &bull; Line Height 130% &bull; L.S 0%</p>
              <p className="text-[14px] leading-[1.3]">Simplificando a Negociação de Precatórios</p>
            </div>

            <div className="border-b border-neutral-lighter pb-6">
              <p className="text-[12px] text-neutral-regular mb-4 font-mono">Small - Medium (small) &bull; Montserrat Medium 14px &bull; Line Height 130% &bull; L.S 0%</p>
              <p className="text-[14px] font-medium leading-[1.3]">Simplificando a Negociação de Precatórios</p>
            </div>

            <div>
              <p className="text-[12px] text-neutral-regular mb-4 font-mono">Extra Small - Regular (span) &bull; Montserrat Regular 12px &bull; Line Height 100% &bull; L.S 0%</p>
              <span className="text-[12px] leading-[1]">Simplificando a Negociação de Precatórios</span>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-heading border-b pb-2">3. Componentes (Ajustados)</h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center p-6 bg-white border border-neutral-light rounded-xl">
                <Button className="rounded-lg px-8 h-[48px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">Primary Button</Button>
                <Button variant="outline" className="rounded-lg px-8 h-[48px] font-semibold border-neutral-light hover:bg-neutral-lighter text-neutral-darkest">Outline Button</Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

function ColorSwatch({ name, hex, hasBorder = false, textClass = "text-white" }: { name: string, hex: string, hasBorder?: boolean, textClass?: string }) {
  return (
    <div className="space-y-2">
      <div
        className={`h-24 w-full rounded-lg flex items-end p-3 ${hasBorder ? 'border border-neutral-light' : ''}`}
        style={{ backgroundColor: hex }}
      >
        <span className={`text-[12px] font-medium ${textClass}`}>{hex}</span>
      </div>
      <div>
        <p className="font-bold text-[14px]">{name}</p>
      </div>
    </div>
  );
}

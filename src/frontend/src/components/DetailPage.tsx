import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Scroll } from "lucide-react";
import { useEffect } from "react";
import type { Document } from "../data/documents";
import { DefinitionAccordion } from "./DefinitionAccordion";

interface DetailPageProps {
  doc: Document;
  onBack: () => void;
}

export function DetailPage({ doc, onBack }: DetailPageProps) {
  const Icon = doc.icon;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className="min-h-screen bg-background"
      style={{ animation: "hero-fade 0.45s cubic-bezier(0.22,1,0.36,1) both" }}
    >
      {/* Sticky header */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b-2 border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            type="button"
            data-ocid="nav.back_button"
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 py-1"
            aria-label="Back to portfolio"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Portfolio
          </button>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
            <Scroll className="w-3.5 h-3.5" />
            <span>Anushka Sharma</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-b from-secondary/60 to-white border-b-2 border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 mb-8">
            <Icon className="w-11 h-11 text-primary" strokeWidth={1.5} />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            {doc.title}
          </h1>
          <p className="font-display italic text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
            &ldquo;{doc.introLine}&rdquo;
          </p>
          <p className="mt-4 text-sm text-muted-foreground font-body">
            {doc.teaser}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">
        {/* Synopsis */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-2xl font-bold text-foreground whitespace-nowrap">
              Synopsis
            </h2>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
          <p className="font-body text-base leading-relaxed text-foreground/85">
            {doc.synopsis}
          </p>
        </section>

        {/* Key Definitions */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-2xl font-bold text-foreground whitespace-nowrap">
              Key Definitions
            </h2>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
          <p className="text-sm text-muted-foreground font-body mb-5">
            Click on any term below to expand its definition.
          </p>
          <DefinitionAccordion definitions={doc.definitions} />
        </section>

        {/* Legal Provisions */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-2xl font-bold text-foreground whitespace-nowrap">
              Legal Provisions &amp; Sections
            </h2>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
          <ul className="space-y-4">
            {doc.provisions.map((prov) => (
              <li
                key={prov.section}
                className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-secondary/30 transition-all duration-200 group"
              >
                <span className="section-badge mt-0.5 flex-shrink-0">
                  {prov.section}
                </span>
                <span className="font-body text-sm text-foreground/85 leading-relaxed pt-0.5">
                  {prov.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10" />
          <p className="font-body text-sm text-muted-foreground mb-6">
            Access the complete document in its original form.
          </p>
          <a
            href={doc.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="doc.open_modal_button"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground font-body font-semibold px-10 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 gap-3 h-auto"
            >
              <ExternalLink className="w-5 h-5" />
              Open Full Document
            </Button>
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-secondary/30 py-8 text-center">
        <p className="font-body text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()}. Built with{" "}
          <span className="text-primary">&#9829;</span> using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

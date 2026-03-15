import { Feather, Scale } from "lucide-react";
import { useState } from "react";
import { DetailPage } from "./components/DetailPage";
import { DocumentCard } from "./components/DocumentCard";
import { documents } from "./data/documents";
import type { Document } from "./data/documents";

export default function App() {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  const handleOpen = (doc: Document) => setSelectedDoc(doc);

  const handleBack = () => {
    setSelectedDoc(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedDoc) {
    return <DetailPage doc={selectedDoc} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top accent strip */}
      <div className="h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Nav */}
      <nav className="border-b-2 border-border bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center gap-3">
          <Scale className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <span className="font-display text-sm font-semibold text-foreground tracking-wide">
            Anushka Sharma
          </span>
          <span className="text-border mx-1">&middot;</span>
          <span className="font-body text-xs text-muted-foreground">
            Legal Portfolio
          </span>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center px-6 pt-20 pb-16 max-w-3xl mx-auto">
        <div className="hero-fade hero-fade-1 inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary/30 bg-secondary mb-8">
          <Feather className="w-7 h-7 text-primary" strokeWidth={1.5} />
        </div>

        <h1 className="hero-fade hero-fade-2 font-display text-5xl md:text-6xl font-bold text-foreground leading-tight mb-7">
          Anushka&apos;s <em className="text-primary not-italic">Legal</em>{" "}
          Portfolio
        </h1>

        <div className="hero-fade hero-fade-2 w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />

        <p className="hero-fade hero-fade-3 font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto">
          Before diving into my written submissions, take a moment to explore a
          quick introduction to the documents featured here. Each section offers
          a short synopsis, highlights key definitions and legal provisions, and
          gives you a glimpse of what the full document contains. Think of it as
          a small guide to make navigating these detailed legal drafts a little
          smoother and a lot more enjoyable.
        </p>

        <div className="hero-fade hero-fade-4 inline-flex items-center gap-3 bg-secondary/80 border border-border rounded-full px-6 py-2.5">
          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
          <p className="font-body text-sm text-foreground/75 italic">
            All documents featured here are the original work of{" "}
            <strong className="font-semibold text-primary not-italic">
              Anushka Sharma
            </strong>
            .
          </p>
        </div>
      </header>

      {/* Section label */}
      <div className="text-center mb-10 px-6">
        <p className="font-body text-xs font-semibold tracking-widest uppercase text-primary/60">
          &mdash; Featured Documents &mdash;
        </p>
      </div>

      {/* Document grid */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.slice(0, 3).map((doc) => (
            <DocumentCard
              key={doc.id}
              doc={doc}
              index={doc.id}
              onClick={handleOpen}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {documents.slice(3).map((doc) => (
            <DocumentCard
              key={doc.id}
              doc={doc}
              index={doc.id}
              onClick={handleOpen}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-secondary/30 py-10 text-center px-6">
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
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

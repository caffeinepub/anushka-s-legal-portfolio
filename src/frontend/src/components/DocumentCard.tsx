import { ExternalLink } from "lucide-react";
import type { Document } from "../data/documents";

interface DocumentCardProps {
  doc: Document;
  index: number;
  onClick: (doc: Document) => void;
}

export function DocumentCard({ doc, index, onClick }: DocumentCardProps) {
  const Icon = doc.icon;
  return (
    <button
      type="button"
      data-ocid={`doc.item.${index}`}
      onClick={() => onClick(doc)}
      className={`card-animate card-animate-${index} red-glow group w-full text-center cursor-pointer bg-white border-2 border-border rounded-2xl p-8 flex flex-col items-center gap-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-[220px]`}
      aria-label={`Open ${doc.title}`}
    >
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
          <Icon
            className="w-9 h-9 text-primary transition-colors duration-300 group-hover:text-white"
            strokeWidth={1.5}
          />
        </div>
        <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10 blur-md" />
      </div>
      <div>
        <h3 className="font-display text-xl font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
          {doc.title}
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          {doc.teaser}
        </p>
      </div>
      <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <span>Explore Document</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </div>
    </button>
  );
}

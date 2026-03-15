import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Definition } from "../data/documents";

interface DefinitionAccordionProps {
  definitions: Definition[];
}

export function DefinitionAccordion({ definitions }: DefinitionAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className="space-y-3">
      {definitions.map((def, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={def.term}
            className="border-2 border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50"
          >
            <button
              type="button"
              data-ocid={`definition.item.${i + 1}`}
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-secondary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-foreground text-base pr-4">
                {def.term}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="px-5 pb-5 pt-3 bg-secondary/40 border-t border-border">
                <p className="text-foreground/85 font-body text-sm leading-relaxed">
                  {def.explanation}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface QuizAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function QuizAccordion({ title, children, defaultOpen = false }: QuizAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="card mb-4">
      <button
        className="w-full flex items-center justify-between p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-accent" />
        ) : (
          <ChevronDown className="w-5 h-5 text-accent" />
        )}
      </button>
      {isOpen && <div className="p-4 pt-0">{children}</div>}
    </div>
  );
}
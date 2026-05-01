"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-bold text-dark text-lg">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="text-gray-600 pb-5 leading-relaxed">{answer}</p>}
    </div>
  );
}

"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {FAQS.map((faq, i) => (
        <div className="faq-item" key={faq.q}>
          <button
            type="button"
            className="faq-question"
            aria-expanded={open === i}
            aria-controls={`faq-panel-${i}`}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {faq.q}
            <span className="faq-mark" aria-hidden="true">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <p className="faq-answer" id={`faq-panel-${i}`}>
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

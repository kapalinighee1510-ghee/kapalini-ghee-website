"use client";

import { useState } from "react";
import { FAQS } from "@/data/site";

export function FaqList({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{FAQS.slice(0, limit).map((item, index) => <div className={`faq-item${open === index ? " open" : ""}`} key={item.question}><h3><button type="button" aria-expanded={open === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpen((current) => current === index ? null : index)}><span>{item.question}</span><span className="faq-plus" aria-hidden="true">{open === index ? "−" : "+"}</span></button></h3><div id={`faq-answer-${index}`} className="faq-answer" inert={open !== index}><p>{item.answer}</p></div></div>)}</div>;
}

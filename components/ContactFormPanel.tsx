"use client";

import { FormEvent, useMemo, useState } from "react";
import { siteConfig } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  service: "Brand & Identity Design",
  message: "",
};

export default function ContactFormPanel() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const whatsappHref = useMemo(() => {
    const lines = [
      "Hello Owalistic Sol, I would like to discuss a project.",
      "",
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Service: ${form.service || "-"}`,
      "Project Details:",
      form.message || "-",
    ];

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [form]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("ready");
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-form-panel">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-dark"
            placeholder="John Doe"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-dark"
            placeholder="john@example.com"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service of Interest</label>
          <select
            id="service"
            name="service"
            className="input-dark"
            value={form.service}
            onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
          >
            <option value="Brand & Identity Design">Brand & Identity Design</option>
            <option value="Custom Web Development">Custom Web Development</option>
            <option value="eCommerce & CMS Sites">eCommerce & CMS Sites</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Project Details</label>
          <textarea
            id="message"
            name="message"
            className="input-dark"
            placeholder="Tell us about your project goals..."
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "20px" }}>
          Send Project Brief
        </button>
      </form>

      <div className={`contact-form-note ${status === "ready" ? "is-visible" : ""}`} aria-live="polite">
        <p>Your project brief is ready to send on WhatsApp.</p>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
          Open WhatsApp again
        </a>
        <span>
          Prefer email instead? Send it to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </span>
      </div>
    </div>
  );
}

"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import type { ContactPayload } from "@/types/contact";

const initialForm: ContactPayload = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  company: "",
};

const GENERIC_ERROR = `Something went wrong — please call us at ${PHONE_DISPLAY}.`;

export default function QuoteForm() {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  }

  function handleReset() {
    setForm(initialForm);
    setSent(false);
    setError("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const { firstName, lastName, email, phone, message } = form;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setError(GENERIC_ERROR);
        return;
      }

      setSent(true);
    } catch {
      setError(GENERIC_ERROR);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="quote-card form-success">
        <span className="form-success-icon">✓</span>
        <span className="form-success-title">Request received</span>
        <p className="form-success-text">
          We&apos;ll be in touch within 5 minutes. For an active emergency,
          call <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> now.
        </p>
        <button type="button" className="form-reset" onClick={handleReset}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="quote-card" noValidate onSubmit={handleSubmit}>
      <label
        htmlFor="company"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
      >
        Company
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company ?? ""}
          onChange={handleChange}
        />
      </label>
      <div className="form-stack">
        <div className="form-row">
          <label className="form-field" htmlFor="firstName">
            First Name *
            <input
              id="firstName"
              name="firstName"
              autoComplete="given-name"
              value={form.firstName}
              onChange={handleChange}
              className={error && !form.firstName.trim() ? "invalid" : ""}
            />
          </label>
          <label className="form-field" htmlFor="lastName">
            Last Name *
            <input
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              value={form.lastName}
              onChange={handleChange}
              className={error && !form.lastName.trim() ? "invalid" : ""}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="form-field" htmlFor="email">
            Email *
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className={error && !form.email.trim() ? "invalid" : ""}
            />
          </label>
          <label className="form-field" htmlFor="phone">
            Phone *
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              className={error && !form.phone.trim() ? "invalid" : ""}
            />
          </label>
        </div>
        <label className="form-field" htmlFor="message">
          How can we help you? *
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={error && !form.message.trim() ? "invalid" : ""}
          />
        </label>
        {error && <span className="form-error">{error}</span>}
        <button type="submit" className="form-submit">
          Get My Free Quote
        </button>
        <span className="form-note">
          Once you submit the form, we&apos;ll be in touch within 5 minutes.
        </span>
      </div>
    </form>
  );
}

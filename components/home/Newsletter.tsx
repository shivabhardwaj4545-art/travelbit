"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/validators";

export function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Subscription failed.");
      }

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-brand-forest text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 text-brand-orange flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
          Receive Char Dham 2026 Opening Dates & Weather Alerts
        </h2>
        <p className="text-white/80 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
          Subscribe for early yatra e-pass registration alerts, helicopter schedule announcements, and seasonal discount deals. No spam, ever.
        </p>

        {isSuccess ? (
          <div className="mt-8 bg-brand-green/20 border border-brand-green text-brand-green-light py-4 px-6 rounded-2xl inline-flex items-center gap-2 text-sm font-bold animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-brand-green" />
            <span>You're subscribed! We will send you official Yatra updates.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2"
          >
            <input
              type="text"
              {...register("honeypot")}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email")}
                className={`w-full px-5 py-3.5 rounded-full text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                  errors.email ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-300 mt-1 text-left px-3">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-md active:scale-95 disabled:opacity-70 flex items-center justify-center gap-1.5"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Subscribing..." : "Subscribe"}</span>
            </button>
          </form>
        )}

        {errorMessage && (
          <div className="mt-4 text-xs text-red-300 flex items-center justify-center gap-1">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
}


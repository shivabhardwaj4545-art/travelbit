"use client";

import React, { useState } from "react";
import { Send, CheckCircle, MessageSquare, AlertCircle, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquirySchema, type InquiryFormData } from "@/lib/validators";

export function QuickInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      destination: "Char Dham Yatra",
      travelers: 2,
      honeypot: "",
    },
  });

  const formValues = watch();

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Failed to submit inquiry.");
      }

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Error submitting inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello TravelBit! I would like to get a quote:
*Destination:* ${formValues.destination || "Uttarakhand Tour"}
*Name:* ${formValues.name || ""}
*Phone:* ${formValues.phone || ""}`
    );
    window.open(`https://wa.me/918851770775?text=${text}`, "_blank");
  };

  return (
    <section className="py-16 bg-brand-cream/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-gray-100">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-brand-green text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span>Get 3 Free Competitive Quotes</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-forest">
              Quick Tour Inquiry & Price Estimate
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              Tell us your travel dream. Our dedicated Uttarakhand pilgrimage desk will send customized quotes within 15 minutes.
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center py-8 space-y-4 max-w-md mx-auto">
              <div className="w-14 h-14 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">
                Inquiry Successfully Submitted!
              </h3>
              <p className="text-xs text-gray-600">
                We've routed your inquiry to 3 certified operators. You'll receive instant quotes on WhatsApp and Phone.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-xs font-bold text-brand-green hover:underline"
              >
                Submit Another Request →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {errorMessage && (
                <div className="bg-red-50 text-red-700 text-xs p-3 rounded-xl border border-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Bot Honeypot */}
              <input
                type="text"
                {...register("honeypot")}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Mobile / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 9876543210"
                    {...register("phone")}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Destination / Yatra
                  </label>
                  <select
                    {...register("destination")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green bg-white"
                  >
                    <option value="Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath)">
                      Complete Char Dham Yatra
                    </option>
                    <option value="Kedarnath & Badrinath Do Dham">
                      Kedarnath & Badrinath (Do Dham)
                    </option>
                    <option value="Jim Corbett Wildlife Safari">
                      Jim Corbett Wildlife Safari
                    </option>
                    <option value="Kainchi Dham & Nainital">
                      Kainchi Dham & Nainital
                    </option>
                    <option value="Auli & Joshimath Ski Getaway">
                      Auli & Joshimath Ski Tour
                    </option>
                    <option value="Chopta Tungnath Trek">
                      Chopta & Tungnath Trek
                    </option>
                    <option value="Valley of Flowers & Hemkund">
                      Valley of Flowers & Hemkund
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Number of Travelers
                  </label>
                  <select
                    {...register("travelers")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green bg-white"
                  >
                    <option value={1}>1 Traveler (Solo)</option>
                    <option value={2}>2 Travelers (Couple)</option>
                    <option value={4}>3 - 5 Travelers (Family)</option>
                    <option value={8}>6 - 10 Travelers (Group)</option>
                    <option value={15}>10+ Travelers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Approx Travel Date
                  </label>
                  <input
                    type="date"
                    {...register("travelDate")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Message / Special Needs (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Need helicopter tickets, senior-friendly ground-floor hotels, pure vegetarian meal plan..."
                  {...register("message")}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white py-3.5 px-8 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry & Compare Quotes"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}


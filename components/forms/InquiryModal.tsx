"use client";

import React, { useState } from "react";
import { X, Send, Sparkles, CheckCircle, MessageSquare, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquirySchema, type InquiryFormData } from "@/lib/validators";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestination?: string;
  packageId?: string;
}

export function InquiryModal({
  isOpen,
  onClose,
  defaultDestination = "Char Dham Yatra, Uttarakhand",
  packageId,
}: InquiryModalProps) {
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
      destination: defaultDestination,
      packageId: packageId || "",
      travelers: 2,
      honeypot: "",
    },
  });

  const formValues = watch();

  if (!isOpen) return null;

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
        throw new Error(json.error || "Failed to submit inquiry. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello TravelBit! I would like to inquire about:
*Destination:* ${formValues.destination || defaultDestination}
*Name:* ${formValues.name || ""}
*Travelers:* ${formValues.travelers || 2}
*Date:* ${formValues.travelDate || "Flexible"}
*Note:* ${formValues.message || "Please share customized package details."}`
    );
    window.open(`https://wa.me/918851770775?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-brand-forest to-[#144737] text-white p-6 relative">
          <button
            onClick={() => {
              reset();
              setIsSuccess(false);
              onClose();
            }}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Instant Free Quote — Save Up To 30%</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-white">
            Plan Your Yatra
          </h3>
          <p className="text-xs text-white/80 mt-1">
            Compare quotes from certified Uttarakhand specialists with money-safe guarantee.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-heading font-bold text-xl text-gray-900">
                Inquiry Received!
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you! Our Uttarakhand tour specialist will contact you on{" "}
                <span className="font-bold text-gray-900">{formValues.phone}</span> within 15 minutes.
              </p>

              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-bold transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Instantly on WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    reset();
                    onClose();
                  }}
                  className="text-xs text-gray-500 hover:text-gray-700 py-2 font-medium"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {errorMessage && (
                <div className="bg-red-50 text-red-700 text-xs p-3 rounded-xl border border-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Honeypot field for bot suppression */}
              <input
                type="text"
                {...register("honeypot")}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  {...register("name")}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    {...register("phone")}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    {...register("email")}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Destination & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Destination / Yatra
                  </label>
                  <input
                    type="text"
                    {...register("destination")}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Number of Travelers
                  </label>
                  <select
                    {...register("travelers")}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green bg-white"
                  >
                    <option value={1}>1 Person (Solo)</option>
                    <option value={2}>2 Persons (Couple)</option>
                    <option value={4}>3 - 5 Persons (Family)</option>
                    <option value={8}>6 - 10 Persons (Group)</option>
                    <option value={15}>10+ Persons (Large Group)</option>
                  </select>
                </div>
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Preferred Travel Date / Month
                </label>
                <input
                  type="date"
                  {...register("travelDate")}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Special Requirements (Helicopter, VIP Darshan, Meals, etc.)
                </label>
                <textarea
                  rows={2}
                  placeholder="Need ground floor rooms for senior citizens, helicopter tickets, pure veg meals..."
                  {...register("message")}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white py-3.5 rounded-xl font-bold shadow-lg transition-all disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry & Compare Quotes"}
                  </span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <span>Or connect directly:</span>
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="text-brand-green font-bold hover:underline flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                  <span>•</span>
                  <a
                    href="tel:18008890379"
                    className="text-brand-forest font-bold hover:underline"
                  >
                    1800-8890-379
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}


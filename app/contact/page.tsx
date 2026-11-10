import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { QuickInquiryForm } from "@/components/home/QuickInquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | TravelBit Holidays",
  description:
    "Get in touch with TravelBit Holidays pilgrimage desk in Janakpuri, New Delhi. Call toll-free 1800-8890-379 or WhatsApp +91 8851770775.",
};

export default function ContactPage() {
  return (
    <div className="bg-brand-cream/40 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-brand-green text-xs font-bold uppercase tracking-wider block">
            We Are Here To Assist 24/7
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-forest">
            Contact TravelBit Holidays
          </h1>
          <p className="text-sm text-gray-600">
            Have questions about biometric registration, Kedarnath helicopter passes, or group pricing? Speak with our Himalayan travel specialists.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Toll Free */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-brand-orange flex items-center justify-center mb-3">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-base text-gray-900">
              Toll Free & Landline
            </h4>
            <a
              href="tel:18008890379"
              className="text-xs font-bold text-brand-forest hover:text-brand-green block"
            >
              1800-8890-379 (Toll Free)
            </a>
            <a
              href="tel:01143528641"
              className="text-xs text-gray-500 hover:text-brand-green block"
            >
              011-43528641 (Delhi Office)
            </a>
          </div>

          {/* WhatsApp & Mobile */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-brand-green flex items-center justify-center mb-3">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-base text-gray-900">
              WhatsApp & Mobile
            </h4>
            <a
              href="https://wa.me/918851770775"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-brand-green hover:underline block"
            >
              +91 8851770775 (WhatsApp)
            </a>
            <a
              href="tel:+918750764165"
              className="text-xs text-gray-500 hover:text-brand-forest block"
            >
              +91 8750764165 (Mobile)
            </a>
          </div>

          {/* Email Support */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-base text-gray-900">
              Email Helpdesk
            </h4>
            <a
              href="mailto:info@travelbitholidays.co.in"
              className="text-xs font-bold text-gray-800 hover:text-brand-green block truncate"
            >
              info@travelbitholidays.co.in
            </a>
            <span className="text-xs text-gray-500 block">
              Response within 30 minutes
            </span>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-base text-gray-900">
              Operating Schedule
            </h4>
            <span className="text-xs font-bold text-gray-800 block">
              Mon – Sun: 24/7 Live Support
            </span>
            <span className="text-xs text-gray-500 block">
              Continuous mountain coordination
            </span>
          </div>
        </div>

        {/* Office Address Banner */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-brand-forest text-white flex items-center justify-center shrink-0">
            <MapPin className="w-7 h-7 text-brand-orange" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading font-bold text-lg text-gray-900">
              TravelBit Holidays Registered Head Office
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              316, 3rd floor, Vishwadeep Tower, District Centre, Janakpuri, New Delhi 110058
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div>
          <QuickInquiryForm />
        </div>
      </div>
    </div>
  );
}


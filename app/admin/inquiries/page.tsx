"use client";

import React, { useState, useEffect } from "react";
import {
  Lock,
  ShieldCheck,
  Phone,
  Mail,
  Calendar,
  Users,
  MessageSquare,
  CheckCircle,
  Clock,
  RefreshCw,
  Search,
} from "lucide-react";
import type { StoredInquiry } from "@/lib/inquiryStore";

export default function AdminInquiriesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [inquiries, setInquiries] = useState<StoredInquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: travelbit2025
    if (pin === "travelbit2025") {
      setIsAuthenticated(true);
      setPinError("");
      loadInquiries();
    } else {
      setPinError("Invalid Admin PIN. Please check your credentials.");
    }
  };

  const loadInquiries = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/inquiries");
      if (res.ok) {
        const json = await res.json();
        setInquiries(json.inquiries || []);
      }
    } catch (err) {
      console.error("Failed to load inquiries:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (
    id: string,
    newStatus: StoredInquiry["status"]
  ) => {
    try {
      const res = await fetch("/api/admin/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setInquiries((prev) =>
          prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
        );
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesStatus = filterStatus === "ALL" || inq.status === filterStatus;
    const matchesSearch =
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.phone.includes(searchQuery) ||
      (inq.destination && inq.destination.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-cream/60 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-forest text-white flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-8 h-8 text-brand-orange" />
          </div>

          <div className="space-y-1">
            <h1 className="font-heading font-extrabold text-2xl text-brand-forest">
              Agent Portal Access
            </h1>
            <p className="text-xs text-gray-500">
              Protected dashboard for TravelBit Holidays inquiry management.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-left">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Admin Secret Key / PIN
              </label>
              <input
                type="password"
                placeholder="Enter password (default: travelbit2025)"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
              {pinError && (
                <p className="text-xs text-red-500 mt-1 font-semibold">{pinError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-brand-forest hover:bg-brand-forest-light text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
            >
              Unlock Inquiries Dashboard
            </button>
          </form>

          <p className="text-[11px] text-gray-400">
            Authorized operations personnel only • TravelBit Holidays
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream/40 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>TravelBit Lead Management</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl text-brand-forest">
              Inquiries & Traveler Leads ({inquiries.length})
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadInquiries}
              disabled={isLoading}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 shadow-sm transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
              <span>Refresh Leads</span>
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 text-xs font-bold transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Status Tabs */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "NEW", "CONTACTED", "QUOTED", "CLOSED"].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filterStatus === st
                    ? "bg-brand-forest text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search leads by name, phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
          </div>
        </div>

        {/* Inquiries Table / Cards */}
        {filteredInquiries.length > 0 ? (
          <div className="space-y-4">
            {filteredInquiries.map((inq) => (
              <div
                key={inq.id}
                className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Left: Client info & message */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading font-bold text-lg text-gray-900">
                      {inq.name}
                    </h3>

                    {/* Status Badge */}
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                        inq.status === "NEW"
                          ? "bg-red-100 text-red-700"
                          : inq.status === "CONTACTED"
                          ? "bg-amber-100 text-amber-800"
                          : inq.status === "QUOTED"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {inq.status}
                    </span>

                    <span className="text-xs text-gray-400">
                      {new Date(inq.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                    <span className="font-semibold text-brand-forest">
                      📍 {inq.destination || "General Uttarakhand Yatra"}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-gray-400" />
                      {inq.travelers} Travelers
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      Date: {inq.travelDate || "Flexible"}
                    </span>
                  </div>

                  {inq.message && (
                    <blockquote className="text-xs bg-gray-50 border-l-2 border-brand-green p-2.5 rounded text-gray-700">
                      "{inq.message}"
                    </blockquote>
                  )}

                  <div className="flex flex-wrap items-center gap-4 text-xs pt-1">
                    <a
                      href={`tel:${inq.phone}`}
                      className="flex items-center gap-1 text-gray-700 hover:text-brand-forest font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{inq.phone}</span>
                    </a>
                    <a
                      href={`mailto:${inq.email}`}
                      className="flex items-center gap-1 text-gray-700 hover:text-brand-forest font-medium"
                    >
                      <Mail className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{inq.email}</span>
                    </a>
                  </div>
                </div>

                {/* Right: Actions & Status updater */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-end gap-3 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-gray-500 font-bold uppercase">
                      Status:
                    </span>
                    <select
                      value={inq.status}
                      onChange={(e) =>
                        handleStatusChange(inq.id, e.target.value as any)
                      }
                      className="px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-800 bg-white"
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="QUOTED">QUOTED</option>
                      <option value="CLOSED">CLOSED</option>
                    </select>
                  </div>

                  <a
                    href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello ${inq.name}! This is TravelBit Holidays regarding your inquiry for ${inq.destination || "Uttarakhand Tour"}. We have prepared customized quotes for you.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Client</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm space-y-2">
            <CheckCircle className="w-10 h-10 text-gray-300 mx-auto" />
            <h3 className="font-heading font-bold text-base text-gray-800">
              No inquiries found
            </h3>
            <p className="text-xs text-gray-500">
              No traveler inquiries match the current filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


"use client";

import React, { useState } from "react";
import { ChevronDown, Utensils, Hotel, MapPin } from "lucide-react";
import type { ItineraryDay } from "@/data/packagesData";

interface ItineraryAccordionProps {
  itinerary: ItineraryDay[];
}

export function ItineraryAccordion({ itinerary }: ItineraryAccordionProps) {
  const [openDays, setOpenDays] = useState<number[]>([1]); // Day 1 open by default

  const toggleDay = (day: number) => {
    if (openDays.includes(day)) {
      setOpenDays(openDays.filter((d) => d !== day));
    } else {
      setOpenDays([...openDays, day]);
    }
  };

  const expandAll = () => {
    setOpenDays(itinerary.map((d) => d.day));
  };

  const collapseAll = () => {
    setOpenDays([]);
  };

  return (
    <div className="space-y-4">
      {/* Top toggle all buttons */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          {itinerary.length} Days Detailed Schedule
        </span>
        <div className="flex gap-3 text-xs">
          <button
            onClick={expandAll}
            className="text-brand-green font-semibold hover:underline"
          >
            Expand All
          </button>
          <span>•</span>
          <button
            onClick={collapseAll}
            className="text-gray-500 font-semibold hover:underline"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Days List */}
      <div className="space-y-3">
        {itinerary.map((item) => {
          const isOpen = openDays.includes(item.day);

          return (
            <div
              key={item.day}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
            >
              <button
                onClick={() => toggleDay(item.day)}
                className="w-full p-4 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-forest text-white font-heading font-bold text-xs flex items-center justify-center shrink-0">
                    Day {item.day}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-gray-900 leading-snug">
                    {item.title}
                  </h4>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-brand-green" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-gray-600 space-y-3 border-t border-gray-100">
                  <p className="leading-relaxed text-gray-700 text-sm">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2 border-t border-gray-100/80 text-[11px]">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Utensils className="w-3.5 h-3.5 text-brand-orange" />
                      <span>
                        <strong>Meals:</strong> {item.meals}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Hotel className="w-3.5 h-3.5 text-brand-green" />
                      <span>
                        <strong>Stay:</strong> {item.stay}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}


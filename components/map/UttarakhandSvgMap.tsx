"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { geoMercator, geoPath } from "d3-geo";
import {
  MapPin,
  Compass,
  Navigation,
  ArrowRight,
  Sparkles,
  Mountain,
} from "lucide-react";
import {
  UTTARAKHAND_DISTRICTS_GEOJSON,
  MAP_POINTS_OF_INTEREST,
  MAP_CIRCUITS,
  type MapPointOfInterest,
  type MapCircuit,
} from "@/data/uttarakhandGeoJson";

export function UttarakhandSvgMap() {
  const [activeTab, setActiveTab] = useState<"districts" | "circuits">("circuits");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [selectedPoi, setSelectedPoi] = useState<MapPointOfInterest | null>(
    MAP_POINTS_OF_INTEREST[2] // Kedarnath by default
  );
  const [activeCircuit, setActiveCircuit] = useState<MapCircuit>(MAP_CIRCUITS[0]);

  // SVG dimensions
  const width = 800;
  const height = 580;

  // d3-geo projection fitted to Uttarakhand bounding box
  const projection = useMemo(() => {
    return geoMercator().fitExtent(
      [
        [40, 40],
        [width - 40, height - 40],
      ],
      UTTARAKHAND_DISTRICTS_GEOJSON
    );
  }, [width, height]);

  const pathGenerator = useMemo(() => {
    return geoPath().projection(projection);
  }, [projection]);

  // Filtered POIs
  const filteredPois = useMemo(() => {
    if (selectedCategory === "all") return MAP_POINTS_OF_INTEREST;
    return MAP_POINTS_OF_INTEREST.filter(
      (poi) => poi.category === selectedCategory
    );
  }, [selectedCategory]);

  // Circuit path generator
  const circuitSvgPath = useMemo(() => {
    if (!activeCircuit || activeCircuit.coordinates.length < 2) return "";
    const points = activeCircuit.coordinates.map((coord) => projection(coord));
    if (!points[0]) return "";
    return points.reduce((acc, pt, idx) => {
      if (!pt) return acc;
      return idx === 0 ? `M ${pt[0]} ${pt[1]}` : `${acc} L ${pt[0]} ${pt[1]}`;
    }, "");
  }, [activeCircuit, projection]);

  const categoryButtons = [
    { id: "all", label: "All Sites" },
    { id: "pilgrimage", label: "Sacred Dhams" },
    { id: "adventure", label: "Treks & Ski" },
    { id: "wildlife", label: "Wildlife" },
    { id: "scenic", label: "Lakes & Vistas" },
  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-200/80 shadow-2xl p-6 lg:p-8 overflow-hidden">
      {/* Top Header & Toggles */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4 text-brand-orange" />
            <span>Interactive Devbhoomi Geographic Navigator</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl lg:text-3xl text-brand-forest">
            Explore Uttarakhand by Region & Circuits
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Projected from official district coordinates. Click pins to preview packages and route confluences.
          </p>
        </div>

      {/* View Toggle: Circuits vs Districts */}
      <div className="flex flex-wrap items-center bg-gray-100 p-1 rounded-2xl gap-1 self-start lg:self-auto">
        <button
          onClick={() => setActiveTab("circuits")}
          className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all text-center ${
            activeTab === "circuits"
              ? "bg-brand-forest text-white shadow-md"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Yatra Circuits View
        </button>
        <button
          onClick={() => setActiveTab("districts")}
          className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all text-center ${
            activeTab === "districts"
              ? "bg-brand-forest text-white shadow-md"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          13 Districts View
        </button>
      </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 py-4">
        <span className="text-xs font-semibold text-gray-500 mr-2">Filter Pins:</span>
        {categoryButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setSelectedCategory(btn.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === btn.id
                ? "bg-brand-green text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Main Map + Detail Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-2">
        {/* Left: SVG Map Rendering */}
        <div className="lg:col-span-8 relative bg-gradient-to-br from-emerald-50/40 via-white to-amber-50/30 rounded-2xl p-4 border border-emerald-900/10">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto max-h-[520px] select-none"
          >
            <defs>
              <filter id="mapShadow" x="-5%" y="-5%" width="115%" height="115%">
                <feDropShadow
                  dx="2"
                  dy="4"
                  stdDeviation="3"
                  floodColor="#0B2E22"
                  floodOpacity="0.15"
                />
              </filter>
            </defs>

            {/* District Polygons */}
            <g filter="url(#mapShadow)">
              {UTTARAKHAND_DISTRICTS_GEOJSON.features.map((feature) => {
                const pathString = pathGenerator(feature as any) || "";
                const isHovered = hoveredDistrict === feature.properties?.name;
                const isGarhwal = feature.properties?.division === "Garhwal";

                return (
                  <path
                    key={feature.id}
                    d={pathString}
                    fill={
                      isHovered
                        ? "#5B9A2F"
                        : isGarhwal
                        ? "#E8EFE5"
                        : "#F5EFE0"
                    }
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    className="transition-colors duration-200 cursor-pointer"
                    onMouseEnter={() => setHoveredDistrict(feature.properties?.name)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                  />
                );
              })}
            </g>

            {/* Circuit Line Overlay */}
            {activeTab === "circuits" && circuitSvgPath && (
              <g>
                <path
                  d={circuitSvgPath}
                  fill="none"
                  stroke={activeCircuit.color}
                  strokeWidth="3.5"
                  strokeDasharray="6,4"
                  className="animate-pulse"
                />
              </g>
            )}

            {/* Interactive Pins */}
            {filteredPois.map((poi) => {
              const projected = projection(poi.coordinates);
              if (!projected) return null;
              const [cx, cy] = projected;
              const isSelected = selectedPoi?.id === poi.id;

              return (
                <g
                  key={poi.id}
                  transform={`translate(${cx}, ${cy})`}
                  onClick={() => setSelectedPoi(poi)}
                  className="cursor-pointer group"
                >
                  {/* Pulsing ring if selected */}
                  {isSelected && (
                    <circle
                      r="12"
                      fill={poi.category === "pilgrimage" ? "#E8890C" : "#5B9A2F"}
                      opacity="0.3"
                      className="animate-ping"
                    />
                  )}

                  {/* Marker Pin Base */}
                  <circle
                    r={isSelected ? "7" : "5"}
                    fill={
                      isSelected
                        ? "#0B2E22"
                        : poi.category === "pilgrimage"
                        ? "#E8890C"
                        : poi.category === "adventure"
                        ? "#2563EB"
                        : poi.category === "wildlife"
                        ? "#059669"
                        : "#5B9A2F"
                    }
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    className="transition-transform group-hover:scale-125"
                  />

                  {/* Pin label text */}
                  <text
                    y="-9"
                    textAnchor="middle"
                    className={`text-[10px] font-bold select-none pointer-events-none fill-gray-800 ${
                      isSelected ? "fill-brand-forest font-extrabold" : ""
                    }`}
                  >
                    {poi.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-md border border-gray-100 text-[11px] space-y-1.5">
            <div className="font-bold text-gray-700 uppercase tracking-wider text-[10px]">
              Legend
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8890C]" />
              <span>Sacred Dhams</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
              <span>Treks & Adventure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
              <span>Wildlife Safaris</span>
            </div>
          </div>

          {hoveredDistrict && (
            <div className="absolute top-4 right-4 bg-brand-forest text-white text-xs px-3 py-1.5 rounded-lg shadow-md font-semibold">
              District: {hoveredDistrict}
            </div>
          )}
        </div>

        {/* Right: Selected POI / Circuit Detail Showcase */}
        <div className="lg:col-span-4 space-y-4">
          {activeTab === "circuits" ? (
            /* Circuit selector cards */
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Choose Yatra Circuit:
              </div>
              {MAP_CIRCUITS.map((circ) => (
                <div
                  key={circ.id}
                  onClick={() => setActiveCircuit(circ)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeCircuit.id === circ.id
                      ? "border-brand-green bg-brand-green/10 shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-heading font-bold text-sm text-gray-900">
                      {circ.name}
                    </h4>
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: circ.color }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2">
                    {circ.description}
                  </p>
                  <div className="flex flex-wrap gap-1 text-[10px] text-gray-600 font-medium">
                    {circ.stopNames.map((st, i) => (
                      <span key={i} className="bg-white/80 px-2 py-0.5 rounded border border-gray-200">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {/* Active POI Preview Card */}
          {selectedPoi && (
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-44 w-full">
                <Image
                  src={selectedPoi.image}
                  alt={selectedPoi.name}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute top-3 left-3 bg-brand-forest/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {selectedPoi.district} District
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-2 py-0.5 rounded">
                  Alt: {selectedPoi.altitude}
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h4 className="font-heading font-bold text-base text-gray-900">
                  {selectedPoi.name}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {selectedPoi.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/packages/${selectedPoi.packageSlug}`}
                    className="w-full flex items-center justify-center gap-1.5 bg-brand-green hover:bg-brand-green-hover text-white py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>View Tour Packages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


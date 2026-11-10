import React from "react";
import { UttarakhandSvgMap } from "@/components/map/UttarakhandSvgMap";

export function InteractiveMapSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <UttarakhandSvgMap />
    </section>
  );
}


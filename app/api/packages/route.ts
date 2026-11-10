import { NextResponse } from "next/server";
import { packagesData } from "@/data/packagesData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const destination = searchParams.get("destination")?.toLowerCase();
  const category = searchParams.get("category");
  const minPrice = searchParams.get("minPrice")
    ? parseInt(searchParams.get("minPrice")!)
    : 0;
  const maxPrice = searchParams.get("maxPrice")
    ? parseInt(searchParams.get("maxPrice")!)
    : Infinity;
  const duration = searchParams.get("duration");

  let filtered = [...packagesData];

  if (destination) {
    filtered = filtered.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes(destination) ||
        pkg.destination.toLowerCase().includes(destination) ||
        pkg.region.toLowerCase().includes(destination)
    );
  }

  if (category && category !== "All") {
    filtered = filtered.filter(
      (pkg) => pkg.category.toLowerCase() === category.toLowerCase()
    );
  }

  filtered = filtered.filter(
    (pkg) => pkg.price >= minPrice && pkg.price <= maxPrice
  );

  if (duration) {
    if (duration === "1-3") {
      filtered = filtered.filter((pkg) => pkg.durationDays <= 3);
    } else if (duration === "4-7") {
      filtered = filtered.filter(
        (pkg) => pkg.durationDays >= 4 && pkg.durationDays <= 7
      );
    } else if (duration === "8+") {
      filtered = filtered.filter((pkg) => pkg.durationDays >= 8);
    }
  }

  return NextResponse.json({
    total: filtered.length,
    packages: filtered,
  });
}


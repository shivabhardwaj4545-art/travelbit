export interface TouristTripProps {
  name: string;
  description: string;
  image: string;
  providerName: string;
  price: number;
  currency?: string;
  durationDays: number;
}

export function generateTripJsonLd(pkg: TouristTripProps) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: pkg.description,
    image: pkg.image,
    touristType: ["Pilgrims", "Families", "Adventure Travelers"],
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: pkg.currency || "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
    },
    provider: {
      "@type": "TravelAgency",
      name: "TravelBit Holidays",
      telephone: "1800-8890-379",
      email: "info@travelbitholidays.co.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "316, 3rd floor, Vishwadeep Tower, District Centre, Janakpuri",
        addressLocality: "New Delhi",
        postalCode: "110058",
        addressCountry: "IN",
      },
    },
  };
}

export function generateAgencyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "TravelBit Holidays",
    image: "https://travelbitholidays.co.in/logo.png",
    telephone: "1800-8890-379",
    email: "info@travelbitholidays.co.in",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "316, 3rd floor, Vishwadeep Tower, District Centre, Janakpuri",
      addressLocality: "New Delhi",
      postalCode: "110058",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
}


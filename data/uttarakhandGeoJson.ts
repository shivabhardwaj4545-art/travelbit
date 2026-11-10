import type { ExtendedFeatureCollection } from "d3-geo";

export interface MapPointOfInterest {
  id: string;
  name: string;
  slug: string;
  category: "pilgrimage" | "adventure" | "wildlife" | "scenic";
  coordinates: [number, number]; // [lng, lat]
  altitude: string;
  district: string;
  description: string;
  image: string;
  packageSlug: string;
}

export interface MapCircuit {
  id: string;
  name: string;
  color: string;
  description: string;
  coordinates: [number, number][]; // Line coordinates [lng, lat]
  stopNames: string[];
}

export const UTTARAKHAND_DISTRICTS_GEOJSON: ExtendedFeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "uttarkashi",
      properties: { name: "Uttarkashi", division: "Garhwal", hq: "Uttarkashi", area: "8016 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.85, 31.10], [78.20, 31.35], [78.60, 31.45], [79.05, 31.30],
            [79.35, 31.05], [79.20, 30.80], [78.85, 30.70], [78.45, 30.60],
            [78.10, 30.70], [77.85, 31.10]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "chamoli",
      properties: { name: "Chamoli", division: "Garhwal", hq: "Gopeshwar", area: "8030 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [79.20, 30.80], [79.35, 31.05], [79.75, 31.00], [80.10, 30.75],
            [80.00, 30.40], [79.65, 30.25], [79.30, 30.30], [79.15, 30.60],
            [79.20, 30.80]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "rudraprayag",
      properties: { name: "Rudraprayag", division: "Garhwal", hq: "Rudraprayag", area: "1984 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [78.85, 30.70], [79.15, 30.60], [79.25, 30.40], [79.05, 30.20],
            [78.80, 30.30], [78.75, 30.55], [78.85, 30.70]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "tehri_garhwal",
      properties: { name: "Tehri Garhwal", division: "Garhwal", hq: "New Tehri", area: "3642 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [78.10, 30.70], [78.45, 30.60], [78.75, 30.55], [78.60, 30.20],
            [78.30, 30.15], [78.05, 30.35], [78.10, 30.70]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "dehradun",
      properties: { name: "Dehradun", division: "Garhwal", hq: "Dehradun", area: "3088 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.60, 30.90], [77.85, 31.10], [78.10, 30.70], [78.05, 30.35],
            [78.30, 30.15], [78.20, 29.95], [77.80, 30.10], [77.60, 30.50],
            [77.60, 30.90]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "haridwar",
      properties: { name: "Haridwar", division: "Garhwal", hq: "Haridwar", area: "2360 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.80, 30.10], [78.20, 29.95], [78.35, 29.80], [78.15, 29.60],
            [77.85, 29.70], [77.70, 29.90], [77.80, 30.10]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "pauri_garhwal",
      properties: { name: "Pauri Garhwal", division: "Garhwal", hq: "Pauri", area: "5230 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [78.30, 30.15], [78.60, 30.20], [78.80, 30.30], [79.05, 30.20],
            [79.30, 30.30], [79.15, 29.80], [78.70, 29.65], [78.35, 29.80],
            [78.20, 29.95], [78.30, 30.15]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "pithoragarh",
      properties: { name: "Pithoragarh", division: "Kumaon", hq: "Pithoragarh", area: "7090 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [80.10, 30.75], [80.50, 30.50], [80.60, 30.00], [80.35, 29.60],
            [80.05, 29.70], [79.90, 29.95], [79.80, 30.30], [80.00, 30.40],
            [80.10, 30.75]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "bageshwar",
      properties: { name: "Bageshwar", division: "Kumaon", hq: "Bageshwar", area: "2246 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [79.65, 30.25], [79.80, 30.30], [79.90, 29.95], [79.60, 29.80],
            [79.40, 29.90], [79.65, 30.25]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "almora",
      properties: { name: "Almora", division: "Kumaon", hq: "Almora", area: "3139 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [79.15, 29.80], [79.40, 29.90], [79.60, 29.80], [79.90, 29.95],
            [79.85, 29.60], [79.45, 29.50], [79.15, 29.80]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "champawat",
      properties: { name: "Champawat", division: "Kumaon", hq: "Champawat", area: "1766 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [79.85, 29.60], [80.05, 29.70], [80.35, 29.60], [80.15, 29.15],
            [79.85, 29.25], [79.85, 29.60]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "nainital_district",
      properties: { name: "Nainital", division: "Kumaon", hq: "Nainital", area: "4251 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [78.90, 29.50], [79.15, 29.80], [79.45, 29.50], [79.75, 29.40],
            [79.70, 29.15], [79.15, 29.20], [78.90, 29.50]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "udham_singh_nagar",
      properties: { name: "Udham Singh Nagar", division: "Kumaon", hq: "Rudrapur", area: "3055 sq km" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [78.85, 29.35], [79.15, 29.20], [79.70, 29.15], [79.85, 29.25],
            [80.15, 29.15], [80.05, 28.80], [79.35, 28.85], [78.85, 29.35]
          ]
        ]
      }
    }
  ]
};

export const MAP_POINTS_OF_INTEREST: MapPointOfInterest[] = [
  {
    id: "poi-yamunotri",
    name: "Yamunotri Dham",
    slug: "yamunotri",
    category: "pilgrimage",
    coordinates: [78.46, 31.01],
    altitude: "3,293 m",
    district: "Uttarkashi",
    description: "Sacred source of Yamuna River and first stop of Char Dham.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80",
    packageSlug: "char-dham-yatra-11n-12d",
  },
  {
    id: "poi-gangotri",
    name: "Gangotri Dham",
    slug: "gangotri",
    category: "pilgrimage",
    coordinates: [78.94, 30.99],
    altitude: "3,100 m",
    district: "Uttarkashi",
    description: "Origin of river Ganga set amidst Himalayan deodars.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    packageSlug: "char-dham-yatra-11n-12d",
  },
  {
    id: "poi-kedarnath",
    name: "Kedarnath Dham",
    slug: "kedarnath",
    category: "pilgrimage",
    coordinates: [79.07, 30.73],
    altitude: "3,583 m",
    district: "Rudraprayag",
    description: "Holy Jyotirlinga surrounded by snow peaks and Mandakini river.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80",
    packageSlug: "char-dham-yatra-11n-12d",
  },
  {
    id: "poi-badrinath",
    name: "Badrinath Dham",
    slug: "badrinath",
    category: "pilgrimage",
    coordinates: [79.49, 30.74],
    altitude: "3,133 m",
    district: "Chamoli",
    description: "Abode of Lord Badri Vishal between Nar & Narayana mountains.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80",
    packageSlug: "char-dham-yatra-11n-12d",
  },
  {
    id: "poi-vof",
    name: "Valley of Flowers",
    slug: "valley-of-flowers",
    category: "scenic",
    coordinates: [79.60, 30.73],
    altitude: "3,658 m",
    district: "Chamoli",
    description: "UNESCO World Heritage floral meadows with 500+ wildflowers.",
    image: "/images/valley-of-flowers-blooms.webp",
    packageSlug: "valley-of-flowers-hemkund-sahib-unesco-trek",
  },
  {
    id: "poi-auli",
    name: "Auli Ski Slopes",
    slug: "auli",
    category: "adventure",
    coordinates: [79.57, 30.53],
    altitude: "3,050 m",
    district: "Chamoli",
    description: "Premier skiing destination and Asia's longest ropeway.",
    image: "/images/auli-meadows-lake.webp",
    packageSlug: "auli-joshimath-ski-slopes-and-nanda-devi",
  },
  {
    id: "poi-chopta",
    name: "Chopta & Tungnath",
    slug: "chopta",
    category: "adventure",
    coordinates: [79.18, 30.49],
    altitude: "2,680 m",
    district: "Rudraprayag",
    description: "Mini Switzerland and trek to highest Shiva shrine.",
    image: "/images/chopta-tungnath-summit.webp",
    packageSlug: "chopta-tungnath-chandrashila-mini-switzerland-trek",
  },
  {
    id: "poi-rishikesh",
    name: "Rishikesh",
    slug: "rishikesh",
    category: "adventure",
    coordinates: [78.27, 30.09],
    altitude: "372 m",
    district: "Dehradun",
    description: "Yoga Capital and White Water Rafting headquarters.",
    image: "/images/rishikesh-river-rafting.webp",
    packageSlug: "rishikesh-mussoorie-hills-and-holy-river",
  },
  {
    id: "poi-haridwar",
    name: "Haridwar",
    slug: "haridwar",
    category: "pilgrimage",
    coordinates: [78.16, 29.95],
    altitude: "314 m",
    district: "Haridwar",
    description: "Gateway to the Gods and Har Ki Pauri Ganga Aarti.",
    image: "/images/har-ki-pauri-ganga-aarti.webp",
    packageSlug: "haridwar-rishikesh-divine-weekend-escape",
  },
  {
    id: "poi-corbett",
    name: "Jim Corbett National Park",
    slug: "jim-corbett",
    category: "wildlife",
    coordinates: [79.13, 29.40],
    altitude: "400 m",
    district: "Nainital",
    description: "Pioneering tiger reserve with open Gypsy safaris.",
    image: "/images/corbett-tiger-safari.webp",
    packageSlug: "jim-corbett-wildlife-safari",
  },
  {
    id: "poi-nainital",
    name: "Nainital Lake City",
    slug: "nainital",
    category: "scenic",
    coordinates: [79.51, 29.39],
    altitude: "2,084 m",
    district: "Nainital",
    description: "Colonial lake promenade, yachting, and panoramic viewpoints.",
    image: "/images/nainital-lake-view.webp",
    packageSlug: "scenic-nainital-lake-city-getaway",
  },
  {
    id: "poi-kainchi",
    name: "Kainchi Dham",
    slug: "kainchi-dham",
    category: "pilgrimage",
    coordinates: [79.54, 29.43],
    altitude: "1,400 m",
    district: "Nainital",
    description: "Revered Neem Karoli Baba Ashram in tranquil Kumaon valley.",
    image: "/images/kainchi-dham-ashram.webp",
    packageSlug: "kainchi-dham-neem-karoli-baba-ashram-tour",
  },
  {
    id: "poi-kausani",
    name: "Kausani & Binsar",
    slug: "kausani",
    category: "scenic",
    coordinates: [79.60, 29.85],
    altitude: "1,890 m",
    district: "Bageshwar",
    description: "300 km uninterrupted panoramic view of snowy Himalayan peaks.",
    image: "/images/almora-kausani-temple.webp",
    packageSlug: "kausani-binsar-almora-kumaon-himalayan-tranquility",
  },
];

export const MAP_CIRCUITS: MapCircuit[] = [
  {
    id: "circuit-chardham",
    name: "Sacred Char Dham Yatra Circuit",
    color: "#E8890C",
    description: "The divine clockwise journey: Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath → Rishikesh",
    stopNames: ["Haridwar", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath", "Rishikesh"],
    coordinates: [
      [78.16, 29.95], // Haridwar
      [78.46, 31.01], // Yamunotri
      [78.94, 30.99], // Gangotri
      [79.07, 30.73], // Kedarnath
      [79.49, 30.74], // Badrinath
      [78.27, 30.09], // Rishikesh
    ],
  },
  {
    id: "circuit-kumaon-lake",
    name: "Kumaon Heritage & Lake Circuit",
    color: "#5B9A2F",
    description: "Scenic tranquil trail: Corbett → Nainital → Kainchi Dham → Almora → Kausani",
    stopNames: ["Jim Corbett", "Nainital", "Kainchi Dham", "Kausani"],
    coordinates: [
      [79.13, 29.40], // Corbett
      [79.51, 29.39], // Nainital
      [79.54, 29.43], // Kainchi Dham
      [79.60, 29.85], // Kausani
    ],
  },
  {
    id: "circuit-garhwal-trek",
    name: "Garhwal Alpine Adventure Circuit",
    color: "#0B2E22",
    description: "Thrills & high meadows: Rishikesh → Chopta/Tungnath → Auli → Valley of Flowers",
    stopNames: ["Rishikesh", "Chopta", "Auli", "Valley of Flowers"],
    coordinates: [
      [78.27, 30.09], // Rishikesh
      [79.18, 30.49], // Chopta
      [79.57, 30.53], // Auli
      [79.60, 30.73], // Valley of Flowers
    ],
  },
];


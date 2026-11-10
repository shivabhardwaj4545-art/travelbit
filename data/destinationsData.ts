export interface DestinationItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  coverImage: string;
  bestTimeToVisit: string;
  altitude: string;
  district: string;
  division: "Garhwal" | "Kumaon";
  popularFor: string[];
  packagesCount: number;
  startingPrice: number;
}

export const destinationsData: DestinationItem[] = [
  {
    id: "dest-kedarnath",
    slug: "kedarnath",
    name: "Kedarnath Dham",
    tagline: "Sacred Jyotirlinga nestled amidst eternal glacial peaks",
    description: "Located at an altitude of 3,583 meters above sea level near the Mandakini River, Kedarnath is the most remote of the four Char Dham sites and one of the twelve sacred Jyotirlingas of Lord Shiva.",
    coverImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    bestTimeToVisit: "May to June & September to October",
    altitude: "3,583 m (11,755 ft)",
    district: "Rudraprayag",
    division: "Garhwal",
    popularFor: ["Kedarnath Temple", "Bhairavnath Mandir", "Vasuki Tal", "Gandhi Sarovar"],
    packagesCount: 6,
    startingPrice: 14999,
  },
  {
    id: "dest-badrinath",
    slug: "badrinath",
    name: "Badrinath Dham",
    tagline: "The celestial abode of Lord Badri Vishal on the banks of Alaknanda",
    description: "Surrounded by Nar and Narayana mountain ranges, Badrinath is consecrated to Lord Vishnu. The vibrant temple facade set against snow-capped peaks creates an awe-inspiring spiritual atmosphere.",
    coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    bestTimeToVisit: "May to June & September to November",
    altitude: "3,133 m (10,279 ft)",
    district: "Chamoli",
    division: "Garhwal",
    popularFor: ["Badrinath Temple", "Tapt Kund", "Mana Village", "Bhim Pul", "Vashistha Gufa"],
    packagesCount: 5,
    startingPrice: 15499,
  },
  {
    id: "dest-rishikesh",
    slug: "rishikesh",
    name: "Rishikesh",
    tagline: "Yoga capital of the world and thrill capital of the Himalayas",
    description: "Where the holy Ganga emerges from the Himalayan foothills, Rishikesh balances ancient spirituality, ashram meditation, and adrenaline-pumping white water rafting and bungee jumping.",
    coverImage: "/images/rishikesh-river-rafting.webp",
    bestTimeToVisit: "September to April",
    altitude: "372 m (1,220 ft)",
    district: "Dehradun",
    division: "Garhwal",
    popularFor: ["Ganga Aarti", "River Rafting", "Beatles Ashram", "Triveni Ghat", "Lakshman Jhula"],
    packagesCount: 8,
    startingPrice: 5499,
  },
  {
    id: "dest-nainital",
    slug: "nainital",
    name: "Nainital",
    tagline: "Emerald lake city cradled by the Kumaon hills",
    description: "A beloved hill town famous for its crescent-shaped eye lake, colonial charm, cable car ropeway, and panoramic Himalayan vistas across snow-crowned peaks.",
    coverImage: "/images/nainital-lake-view.webp",
    bestTimeToVisit: "March to June & October to February (for snow)",
    altitude: "2,084 m (6,837 ft)",
    district: "Nainital",
    division: "Kumaon",
    popularFor: ["Naini Lake Boating", "Naina Devi Temple", "Snow View Point", "Eco Cave Gardens"],
    packagesCount: 7,
    startingPrice: 6499,
  },
  {
    id: "dest-auli",
    slug: "auli",
    name: "Auli & Joshimath",
    tagline: "India's skiing paradise with panoramic views of Mt. Nanda Devi",
    description: "Auli is endowed with pristine alpine meadows that turn into glistening ski slopes in winter. Connected by Asia's longest ropeway from Joshimath, it overlooks majestic peaks.",
    coverImage: "/images/auli-meadows-lake.webp",
    bestTimeToVisit: "December to March (for skiing) & April to June",
    altitude: "3,050 m (10,010 ft)",
    district: "Chamoli",
    division: "Garhwal",
    popularFor: ["Ski Slopes", "Auli Ropeway", "Gorson Bugyal", "Trishul Peak Vistas"],
    packagesCount: 4,
    startingPrice: 8499,
  },
  {
    id: "dest-jim-corbett",
    slug: "jim-corbett",
    name: "Jim Corbett National Park",
    tagline: "India's oldest national park and premier Royal Bengal Tiger sanctuary",
    description: "Spanning across lush valleys, the Ramganga river, and dense Sal forests, Corbett is a wildlife lover's dream with over 200 tigers, 500+ bird species, and herds of wild elephants.",
    coverImage: "/images/corbett-tiger-safari.webp",
    bestTimeToVisit: "November to June",
    altitude: "400 - 1,200 m",
    district: "Nainital / Pauri Garhwal",
    division: "Kumaon",
    popularFor: ["Open Gypsy Safari", "Dhikala Zone", "Garjiya Temple", "Kosi River Stay"],
    packagesCount: 4,
    startingPrice: 6999,
  },
  {
    id: "dest-chopta",
    slug: "chopta",
    name: "Chopta & Tungnath",
    tagline: "Mini Switzerland of India & highest Shiva shrine",
    description: "An unspoiled meadow surrounded by pine, deodar and rhododendron woods. The base for trekking to Tungnath and Chandrashila summit.",
    coverImage: "/images/chopta-tungnath-summit.webp",
    bestTimeToVisit: "April to November (summer/autumn) & Jan-Feb (snow)",
    altitude: "2,680 m (8,790 ft)",
    district: "Rudraprayag",
    division: "Garhwal",
    popularFor: ["Tungnath Temple", "Chandrashila Summit", "Deoria Tal", "Birdwatching"],
    packagesCount: 4,
    startingPrice: 7999,
  },
  {
    id: "dest-kainchi-dham",
    slug: "kainchi-dham",
    name: "Kainchi Dham & Bhowali",
    tagline: "Spiritual sanctuary of Neem Karoli Baba Maharaj-ji",
    description: "Nestled in a tranquil river valley near Bhowali, Kainchi Dham ashram draws seekers, luminaries, and devotees from around the world looking for spiritual solace and unconditional love.",
    coverImage: "/images/kainchi-dham-ashram.webp",
    bestTimeToVisit: "Round the year",
    altitude: "1,400 m (4,593 ft)",
    district: "Nainital",
    division: "Kumaon",
    popularFor: ["Neem Karoli Baba Ashram", "Bhimtal Lake", "Hanuman Mandir", "Kasar Devi"],
    packagesCount: 3,
    startingPrice: 6499,
  },
];


export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogsData: BlogPostItem[] = [
  {
    id: "blog-1",
    slug: "char-dham-yatra-complete-preparation-guide",
    title: "Char Dham Yatra 2026: Complete Preparation, Route & Registration Guide",
    excerpt: "Everything you need to know before embarking on the divine pilgrimage — biometric passes, medical fitness, best route order, and packing essentials.",
    coverImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    author: "Acharya Rajesh Shastri (TravelBit Pilgrimage Desk)",
    publishedAt: "January 15, 2026",
    readTime: "7 min read",
    category: "Pilgrimage Guide",
    tags: ["Char Dham", "Kedarnath", "Badrinath", "Yatra Tips"],
    content: `
      ## The Sacred Four Abodes of Devbhoomi
      Char Dham Yatra in Uttarakhand is revered as one of India's holiest journeys. According to Hindu tradition, the circuit must traditionally follow the clockwise sequence of **Yamunotri, Gangotri, Kedarnath, and Badrinath**.

      ### 1. Mandatory Biometric Registration
      Every yatri must register through the Uttarakhand Tourism Development Board portal or via certified agents. Keep your Aadhaar card, valid mobile number, and emergency contact ready.

      ### 2. High-Altitude Acclimatization Tips
      Kedarnath (3,583 m) and Badrinath (3,133 m) have thin air. Take adequate rest, hydrate frequently with warm water, avoid heavy oily meals during treks, and carry camphor and portable pulse oximeters.

      ### 3. What to Pack
      - Thermal inners and windproof waterproof jacket
      - Trekking shoes with deep lugs and ankle support
      - Power bank, flashlight, and emergency cash
      - Basic first-aid kit with prescribed medicines

      TravelBit provides verified sanitized cabs, deluxe riverside stays, and dedicated round-the-clock yatra support to make your spiritual pilgrimage seamless.
    `,
  },
  {
    id: "blog-2",
    slug: "kainchi-dham-neem-karoli-baba-ashram-darshan-guide",
    title: "Visiting Kainchi Dham: Neem Karoli Baba Ashram Darshan & Rules",
    excerpt: "Discover the serenity of Maharaj-ji's ashram in Kumaon hills that inspired Steve Jobs, Mark Zuckerberg, and millions of devotees worldwide.",
    coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    author: "Pooja Verma",
    publishedAt: "February 2, 2026",
    readTime: "5 min read",
    category: "Spiritual Escapes",
    tags: ["Kainchi Dham", "Neem Karoli Baba", "Nainital", "Ashram"],
    content: `
      ## The Divine Aura of Kainchi Valley
      Located just 17 km from Nainital on the Almora highway, Kainchi Dham was established in 1962 by Sri Neem Karoli Baba. The ashram is surrounded by lush green pine-clad slopes and a crystal-clear mountain stream.

      ### Daily Ashram Routine & Timings
      - Morning Aarti begins around 6:30 AM
      - Evening Hanuman Chalisa chanting and Aarti around 6:30 PM
      - Fresh blessed prasad (chana and sweet bundi) is distributed to every pilgrim

      ### Nearby Places to Combine
      Combine your Kainchi Dham visit with Bhimtal Lake, Naukuchiatal, and the mystical electromagnetic hilltop of Kasar Devi in Almora.
    `,
  },
  {
    id: "blog-3",
    slug: "top-5-beginner-treks-uttarakhand",
    title: "Top 5 Easy & Scenic Himalayan Treks in Uttarakhand for Beginners",
    excerpt: "Dreaming of snow peaks and alpine meadows without extreme high-altitude hardship? Here are the top 5 introductory treks.",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    author: "Captain Rohan Negi (Wilderness Guide)",
    publishedAt: "February 18, 2026",
    readTime: "6 min read",
    category: "Trekking & Adventure",
    tags: ["Trekking", "Chopta", "Deoria Tal", "Valley of Flowers"],
    content: `
      ## Why Uttarakhand is the Trekking Capital
      Uttarakhand offers well-maintained trails, stunning vistas of the Garhwal and Kumaon ranges, and welcoming local communities.

      ### 1. Chopta & Chandrashila Peak
      Distance: 5 km from Chopta | Max Altitude: 13,123 ft
      Famous for 360-degree views of Chaukhamba and Trishul, and the ancient Tungnath Shiva Temple.

      ### 2. Deoria Tal Lake Trek
      Distance: 2.5 km from Sari Village | Max Altitude: 7,998 ft
      Easy gentle slope through oak woods, rewarding you with Chaukhamba's mirror image in pristine waters.

      ### 3. Valley of Flowers
      Distance: 14 km from Govindghat | Max Altitude: 11,500 ft
      UNESCO heritage wonderland of blooming alpine flora from July to August.
    `,
  },
];


/**
 * NOTE: The following testimonials are sample customer review data for demonstration and seed purposes.
 */

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  packageTitle: string;
  rating: number;
  review: string;
  avatar: string;
  date: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Sunil & Rashmi Agarwal",
    location: "New Delhi",
    packageTitle: "Complete Char Dham Yatra (11N/12D)",
    rating: 5,
    review: "Booking through TravelBit gave us total peace of mind. We were traveling with my 68-year-old parents, and the team arranged smooth helicopter passes at Phata and comfortable ground-floor rooms. The driver Virender Ji was courteous and extremely skilled in the hills.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "October 2025",
  },
  {
    id: "rev-2",
    name: "Ananya Deshmukh",
    location: "Pune, Maharashtra",
    packageTitle: "Chopta, Tungnath & Chandrashila Trek",
    rating: 5,
    review: "The sunrise from Chandrashila peak was pure magic! TravelBit's trek leader was safety-conscious, warm, and kept us hydrated throughout. Swiss tents at Chopta had warm fleece blankets and piping hot meals after a long cold day.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    date: "September 2025",
  },
  {
    id: "rev-3",
    name: "Dr. Arvind Bhattacharya",
    location: "Kolkata, West Bengal",
    packageTitle: "Jim Corbett Wildlife Safari & Wilderness Resort",
    rating: 5,
    review: "We compared quotes from 3 operators on TravelBit and saved almost 25%! Our open Gypsy safari in Bijrani zone was phenomenal — we spotted a Royal Bengal tigress resting beside the water canal. Exceptional service by TravelBit team.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    date: "November 2025",
  },
  {
    id: "rev-4",
    name: "Meera & Vikram Nair",
    location: "Bengaluru, Karnataka",
    packageTitle: "Kainchi Dham & Neem Karoli Baba Tour",
    rating: 5,
    review: "The spiritual vibration at Kainchi Dham Ashram is beyond words. Everything was seamlessly arranged by TravelBit — from Kathgodam pickup to Bhimtal lakeside hotel. Highly recommend them for anyone seeking hassle-free pilgrimage.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    date: "August 2025",
  },
];


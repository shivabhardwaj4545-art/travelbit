import { create } from "zustand";

export interface ComparePackageItem {
  id: string;
  slug: string;
  title: string;
  destination: string;
  durationDays: number;
  durationNights: number;
  price: number;
  originalPrice: number;
  rating: number;
  coverImage: string;
  highlights: string[];
}

interface CompareState {
  items: ComparePackageItem[];
  isOpen: boolean;
  addToCompare: (pkg: ComparePackageItem) => boolean;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  isInCompare: (id: string) => boolean;
}

export const useCompareStore = create<CompareState>((set, get) => ({
  items: [],
  isOpen: false,
  addToCompare: (pkg: ComparePackageItem) => {
    const { items } = get();
    if (items.some((item) => item.id === pkg.id)) {
      return true;
    }
    if (items.length >= 3) {
      return false; // limit reached
    }
    set({ items: [...items, pkg], isOpen: true });
    return true;
  },
  removeFromCompare: (id: string) => {
    set({ items: get().items.filter((item) => item.id !== id) });
  },
  clearCompare: () => set({ items: [], isOpen: false }),
  openDrawer: () => set({ isOpen: true }),
  closeDrawer: () => set({ isOpen: false }),
  toggleDrawer: () => set({ isOpen: !get().isOpen }),
  isInCompare: (id: string) => get().items.some((item) => item.id === id),
}));


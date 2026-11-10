import { create } from "zustand";

interface WishlistState {
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  wishlistIds: [],
  toggleWishlist: (id: string) => {
    const { wishlistIds } = get();
    if (wishlistIds.includes(id)) {
      set({ wishlistIds: wishlistIds.filter((item) => item !== id) });
    } else {
      set({ wishlistIds: [...wishlistIds, id] });
    }
  },
  isInWishlist: (id: string) => get().wishlistIds.includes(id),
  clearWishlist: () => set({ wishlistIds: [] }),
}));


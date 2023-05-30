import { create } from "zustand";

interface SectionState {
  order: number;
  name: string;
  setSection: (order: number, name: string) => void;
}

export const sectionStore = create<SectionState>((set) => ({
  order: 0,
  name: "home",
  setSection: (order: number, name: string) => set({ order, name }),
}));

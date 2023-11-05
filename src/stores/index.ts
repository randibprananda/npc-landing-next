import { create } from 'zustand';

export const StoreSport = create(set => ({
  category: [],
  setCategory: (change: any) => set({ categort: change })
}));

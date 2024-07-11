import { create } from "zustand";

interface BudgetStore {
  budget: number;
  setBudget: (budget: number) => void;
}

export const useBudgetStore = create<BudgetStore>((set) => ({
  budget: 0,
  setBudget: (budget: number) => set({ budget }),
}));

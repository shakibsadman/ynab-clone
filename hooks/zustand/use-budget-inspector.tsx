import { create } from "zustand";
import { Item } from "@prisma/client";

export interface TBudgetInspectorState {
  selectedItem?: Item;
  setSelectedItem: (item: Item) => void;
}

const useBudgetInspector = create<TBudgetInspectorState>((set) => ({
  selectedItem: undefined,
  setSelectedItem: (item: Item) => {
    set(() => ({
      selectedItem: item,
    }));
  },
}));

export default useBudgetInspector;

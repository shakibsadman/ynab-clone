import { create } from "zustand";

interface BudgetStore {
  current_step: number;
  budget_status: "stressed" | "unsure" | "stable" | "confident" | undefined;
  persons: string[];
  home_status: "rent" | "own" | "others" | undefined;
  debt: string[] | null;
  transport: string;
  reguler_spend: string[];
  sneak_expense: string[];
  subscriptions: string[];
  saving: string[];
  extras: string[];

  // next step
  nextStep: () => void;
  prevStep: () => void;

  setBudgetStatus: (
    status: "stressed" | "unsure" | "stable" | "confident",
  ) => void;
  setPerson: (person: string) => void;
  setHome: (home: "rent" | "own" | "others") => void;
  setdebt: (debtItem: string) => void;
  setTransport: (mode: string) => void;
  setRegulerSpend: (item: string) => void;
  setSneakExpense: (item: string) => void;
  setSubscription: (item: string) => void;
  setSaving: (item: string) => void;
  setExtras: (item: string) => void;
  canProceed: () => boolean;
}

export const useBudgetStore = create<BudgetStore>((set, get) => ({
  budget_status: undefined,
  current_step: 3,
  persons: [],
  home_status: undefined,
  debt: null,
  transport: "",
  reguler_spend: [],
  sneak_expense: [],
  subscriptions: [],
  saving: [],
  extras: [],
  // go to next step
  nextStep: () =>
    set((state) => {
      const canProceed = (() => {
        switch (state.current_step) {
          case 1:
            return state.budget_status !== undefined;
          case 2:
            return state.persons.length > 0;
          case 3:
            return state.home_status !== undefined;
          case 4:
            return state.debt !== null;
          case 5:
            return state.transport !== "";
          case 6:
            return state.reguler_spend.length > 0;
          case 7:
            return state.sneak_expense.length > 0;
          case 8:
            return state.subscriptions.length > 0;
          case 9:
            return state.saving.length > 0;
          case 10:
            return state.extras.length > 0;
          default:
            return false;
        }
      })();

      if (canProceed) {
        return { current_step: state.current_step + 1 };
      }
      return state;
    }),

  prevStep: () =>
    set((state) => ({
      current_step: Math.max(1, state.current_step - 1),
    })),

  // setters
  setBudgetStatus: (status) =>
    set((state) => ({
      budget_status: status,
    })),

  setPerson: (person) =>
    set((state) => ({
      persons: state.persons.includes(person)
        ? state.persons.filter((p) => p !== person)
        : [...state.persons, person],
    })),
  setHome: (home) =>
    set((state) => ({
      home_status: home,
    })),

  setdebt: (debtItem) =>
    set((state) => ({
      debt: state.debt
        ? state.debt.includes(debtItem)
          ? state.debt.filter((item) => item !== debtItem)
          : [...state.debt, debtItem]
        : [debtItem],
    })),
  setTransport: (mode) =>
    set((state) => ({
      transport: mode,
    })),

  setRegulerSpend: (item) =>
    set((state) => ({
      reguler_spend: state.reguler_spend.includes(item)
        ? state.reguler_spend.filter((i) => i !== item)
        : [...state.reguler_spend, item],
    })),

  setSneakExpense: (item) =>
    set((state) => ({
      sneak_expense: state.sneak_expense.includes(item)
        ? state.sneak_expense.filter((i) => i !== item)
        : [...state.sneak_expense, item],
    })),

  setSubscription: (item) =>
    set((state) => ({
      subscriptions: state.subscriptions.includes(item)
        ? state.subscriptions.filter((i) => i !== item)
        : [...state.subscriptions, item],
    })),

  setSaving: (item) =>
    set((state) => ({
      saving: state.saving.includes(item)
        ? state.saving.filter((i) => i !== item)
        : [...state.saving, item],
    })),

  setExtras: (item) =>
    set((state) => ({
      extras: state.extras.includes(item)
        ? state.extras.filter((i) => i !== item)
        : [...state.extras, item],
    })),
  canProceed: () => {
    const state = get();
    switch (state.current_step) {
      case 1:
        return state.budget_status !== undefined;
      case 2:
        return state.persons.length > 0;
      case 3:
        return state.home_status !== undefined;
      case 4:
        return state.debt !== null;
      case 5:
        return state.transport !== "";
      case 6:
        return state.reguler_spend.length > 0;
      case 7:
        return state.sneak_expense.length > 0;
      case 8:
        return state.subscriptions.length > 0;
      case 9:
        return state.saving.length > 0;
      case 10:
        return state.extras.length > 0;
      default:
        return false;
    }
  },
}));

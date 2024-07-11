import { create } from "zustand";

interface BudgetStore {
  current_step: number;
  budget_status: "stressed" | "unsure" | "stable" | "confident" | undefined;
  persons: string[];
  home_status: "rent" | "own" | "others" | undefined;
  loan: string[] | null;
  transport: string;
  reguler_spend: string[];
  sneak_expense: string[];
  subscritions: string[];
  saving: string[];
  extras: string[];

  // next step
  nextStep: () => void;
  prevStep: () => void;

  setBudgetStatus: (
    status: "stressed" | "unsure" | "stable" | "confident",
  ) => void;
  setPerson: (person: string) => void;
  setLoan: (loanItem: string) => void;
  setRegulerSpend: (item: string) => void;
  setSneakExpense: (item: string) => void;
  setSubscription: (item: string) => void;
  setSaving: (item: string) => void;
  setExtras: (item: string) => void;
  canProceed?: () => boolean;
}

export const useBudgetStore = create<BudgetStore>((set, get) => ({
  budget_status: undefined,
  current_step: 1,
  persons: [],
  home_status: undefined,
  loan: null,
  transport: "",
  reguler_spend: [],
  sneak_expense: [],
  subscritions: [],
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
            return state.loan !== null;
          case 5:
            return state.transport !== "";
          case 6:
            return state.reguler_spend.length > 0;
          case 7:
            return state.sneak_expense.length > 0;
          case 8:
            return state.subscritions.length > 0;
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

  setLoan: (loanItem) =>
    set((state) => ({
      loan: state.loan
        ? state.loan.includes(loanItem)
          ? state.loan.filter((item) => item !== loanItem)
          : [...state.loan, loanItem]
        : [loanItem],
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
      subscritions: state.subscritions.includes(item)
        ? state.subscritions.filter((i) => i !== item)
        : [...state.subscritions, item],
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
        return state.persons.length > 0;
      case 2:
        return state.home_status !== undefined;
      case 3:
        return state.loan !== null;
      case 4:
        return state.transport !== "";
      case 5:
        return state.reguler_spend.length > 0;
      case 6:
        return state.sneak_expense.length > 0;
      case 7:
        return state.subscritions.length > 0;
      case 8:
        return state.saving.length > 0;
      case 9:
        return state.extras.length > 0;
      default:
        return false;
    }
  },
}));

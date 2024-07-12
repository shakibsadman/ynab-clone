type TBudgetStatus = {
  id: string;
  text: string;
  value: "stressed" | "unsure" | "stable" | "confident";
};

export const FinanceStatus: TBudgetStatus[] = [
  { id: "1", text: "😫 Stressed-I want to hide", value: "stressed" },
  {
    id: "2",
    text: "😕 Unsure- Not much direction",
    value: "unsure",
  },
  {
    id: "3",
    text: "🙂 Stable- No fires to put out",
    value: "stable",
  },
  {
    id: "4",
    text: "😀 Confident- Ready For my TED Talk",
    value: "confident",
  },
];

export const extraList = [
  { icon: "🍽️", name: "Dining out" },
  { icon: "❤️", name: "Charity" },
  { icon: "👥", name: "My spending money" },
  { icon: "🍿", name: "Entertainment" },
  { icon: "🎁", name: "Gifts" },
  { icon: "👥", name: "Their spending money" },
  { icon: "🎮", name: "Video games" },
  { icon: "🖼️", name: "Home decor" },
  { icon: "🌱", name: "Hobbies" },
  { icon: "🎉", name: "Celebrations" },
];

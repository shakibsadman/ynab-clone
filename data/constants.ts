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

export const regularSpendList = [
  { name: "🛒 Grocerices", type: "grocerices", group: "needs" },
  { name: "📱 Phone", type: "phone", group: "bills" },
  { name: "💻 Interent", type: "internet", group: "bills" },
  { name: "💇 Personal Care", type: "personal_care", group: "wants" },
  { name: "👖 Clothes", type: "clothes", group: "needs" },
];

export const sneakExpenseList = [
  {
    name: "💳 Aunual credit card fees",
    type: "credit_card",
    group: "expense",
  },
  { name: "🩺 Medical Expenses", type: "medical", group: "expense" },
  { name: "💸Taxes or other fees", type: "taxes", group: "expense" },
];
export const subscriptionList = [
  { name: "🎵 Music", group: "subscription", type: "music" },
  { name: "📺 TV streaming", group: "subscription", type: "tv" },
  { name: "💪 Fitness", group: "subscription", type: "fitness" },
  { name: "🎓 Online courses", group: "subscriptions", type: "courses" },
  { name: "📖 Audio or ebooks", group: "subscriptions", type: "ebooks" },
  { name: "📰 News", group: "subscriptions", type: "news" },
  { name: "🍖 Meal delivery", group: "subscriptions", type: "meals" },
];

export const savingItemsList = [
  { name: "😌 Emergency Fund", group: "saving", type: "emergency_fund" },
  { name: "🚗 New Car", group: "saving", type: "new_car" },
  { name: "💰 Retirement", group: "saving", type: "retirement" },
  { name: "📈 Investments", group: "saving", type: "inventments" },
  { name: "🌴 Vacations", group: "saving", type: "for_vacations" },
  { name: "👶 Baby", group: "saving", type: "for_baby" },
  { name: "🏠 New Home", group: "saving", type: "new home" },
  { name: "💍 Wedding", group: "saving", type: "for_wedding" },
];

export const extraList = [
  { name: "🍽️ Dining out", group: "wants", type: "food" },
  { name: "❤️ Charity", group: "wants", type: "charity" },
  { name: "👥 My spending money", group: "wants", type: "spending" },
  { name: "🍿 Entertainment", group: "wants", type: "entertainment" },
  { name: "🎁 Gifts", group: "wants", type: "gifts" },
  { name: " 👥 Their spending money", group: "wants", type: "spending" },
  { name: "🎮 Video games", group: "wants", type: "games" },
  { name: "🖼️ Home decor", group: "wants", type: "decor" },
  { name: "🌱 Hobbies", group: "wants", type: "fun" },
  { name: "🎉 Celebrations", group: "wants", type: "fun" },
];

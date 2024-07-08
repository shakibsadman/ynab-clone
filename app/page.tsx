import { Poppins } from "next/font/google";

import { Header } from "@/components/features/landing";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}

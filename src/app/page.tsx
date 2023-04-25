import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { Community, Hero, Ideas } from "../sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <Hero />
        <Ideas />
        <Community />
      </main>
      <Footer />
    </>
  );
}

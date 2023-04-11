import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { Hero } from "../sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

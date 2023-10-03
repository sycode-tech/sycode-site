import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { Community, Hero, Ideas, Projects } from "../../sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <Hero />
        <Ideas />
        <Projects />
        <Community />
      </main>
      <Footer />
    </>
  );
}

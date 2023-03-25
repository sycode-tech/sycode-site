import { Button } from "@/components/Button";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="w-full h-screen bg-hero bg-cover bg-center text-gray-50 flex flex-col justify-center items-center gap-y-8">
          <h1 className="font-semibold text-5xl text-center">
            Simplificamos a vida com nossas soluções.
          </h1>
          <h3 className="text-xl text-center">
            Potencialize seu negócio, inove e otimize com nossas soluções.
          </h3>
          <Button>Get Start</Button>
        </section>
      </main>
    </>
  );
}

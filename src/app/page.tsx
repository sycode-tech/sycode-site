import { Button } from "@/components/Button";
import { CardService } from "@/components/CardService";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { cardService } from "@/utils/cardService";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <section className="w-full h-[calc(100vh-3.5rem)] bg-hero bg-cover bg-center text-gray-50 centralize gap-y-10">
          <h1 className="-mt-10 font-semibold text-4xl text-center w-full max-w-md md:max-w-lg md:text-5xl lg:max-w-3xl lg:text-6xl">
            Simplificamos a vida com nossas soluções
          </h1>
          <h3 className="text-2xl text-center font-medium -mt-4 w-full max-w-md">
            Potencialize seu negócio, inove e otimize com nossas soluções.
          </h3>
          <Button>Saiba mais</Button>
          <div className="w-full absolute z-0 left-0 bottom-16 after:block after:bg-gray-50 after:w-full after:h-2 after:absolute after:-bottom-2 after:left-0">
            <svg
              className="text-gray-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 60"
            >
              <path
                fill="currentColor"
                d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"
              ></path>
            </svg>
          </div>
        </section>
        <section className="pb-32 -mt-40">
          <div className="relative z-10 bg-transparent flex flex-wrap justify-center gap-5 pb-32">
            {cardService.map(({ title, description, link }, index) => {
              return (
                <CardService
                  key={index}
                  title={title}
                  description={description}
                  link={link}
                />
              );
            })}
          </div>
          <Title
            subtitle="Por que escolher a Sycode?"
            title="Aqui estão algumas razões pelas quais nossos clientes escolhem a Sycode"
          />
        </section>
      </main>
    </>
  );
}

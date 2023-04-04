import { Button } from "@/components/Button";
import { CardService } from "@/components/CardService";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContentSectionTwo } from "@/components/SectionTwo/Content";
import { SelectIdea } from "@/components/SectionTwo/SelectIdea";
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
              viewBox="0 0 1440 60">
              <path
                fill="currentColor"
                d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"></path>
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
          <div className="mt-10 flex flex-col items-center lg:flex-row">
            <SelectIdea />
            <SelectIdea />
            <SelectIdea />
          </div>
          <div className="mt-14">
            <ContentSectionTwo />
          </div>
        </section>
        <section className="">
          <div className="w-full bg-hero h-full py-12 lg:py-16 px-10 flex centralize gap-6 rounded-lg text-gray-100">
            <h4 className="font-medium uppercase text-lg">
              Entre na comunidade
            </h4>
            <h2 className="text-3xl lg:text-4xl font-bold text-center -mt-2 max-w-2xl">
              Temos a confiança de vários clientes, seja mais um deles e entre
              no time!
            </h2>
            <Button>Começe já</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

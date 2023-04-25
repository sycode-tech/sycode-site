import { Carousel } from "@/components/Carousel";
import { Title } from "@/components/Title";

export const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto pb-28">
      <div className="space-y-10">
        <Title
          subtitle="Projetos recentes"
          title="Veja alguns dos nossos projetos incríveis"
        />
        <Carousel />
      </div>
    </section>
  );
};

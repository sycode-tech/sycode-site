import { Carousel } from "@/components/Slider/Carousel";
import { Title } from "@/components/Title";

export const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto pb-28">
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

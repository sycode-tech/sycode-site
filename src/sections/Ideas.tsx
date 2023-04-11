import Image from "next/image";

import { cardService } from "@/utils/cardService";

import { CardService } from "@/components/CardService";
import { ContentSectionTwo } from "@/components/SectionTwo/Content";
import { SelectIdea } from "@/components/SectionTwo/SelectIdea";
import { Title } from "@/components/Title";

export const Ideas = () => {
  return (
    <section className="pb-32 -mt-40">
      <div className="relative z-10 bg-transparent flex flex-wrap justify-center gap-5 pb-32">
        {cardService.map(({ title, description, link, icon }, index) => {
          return (
            <CardService
              key={index}
              title={title}
              description={description}
              link={link}
              icon={<Image src={icon} className="w-12" alt="" />}
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
  );
};

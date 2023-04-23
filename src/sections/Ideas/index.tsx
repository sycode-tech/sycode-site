"use client";

import Image from "next/image";
import { useState } from "react";

import { CardService } from "@/sections/Ideas/components/CardService";
import { cardService } from "@/utils/cardService";

import { Title } from "@/components/Title";

export const Ideas = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="pb-28 -mt-40">
      <div className="relative z-10 bg-transparent flex flex-wrap justify-center gap-5 pb-32">
        {cardService.map(({ title, description, link, icon }, index) => (
          <CardService
            key={index}
            title={title}
            description={description}
            link={link}
            icon={<Image src={icon} className="w-12" alt="" />}
          />
        ))}
      </div>
      <Title
        subtitle="Por que escolher a Sycode?"
        title="Aqui estão algumas razões pelas quais nossos clientes escolhem a Sycode"
      />
      {/* <div className=" mt-10 flex flex-col items-center lg:flex-row">
        {ideasSelection.map(({ imageUrl, title, description }, index) => (
          <SelectIdea
            isActive={isActive}
            key={index}
            imageUrl={imageUrl}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="mt-14 max-w-2xl mx-auto lg:max-w-none">
        <Content />
      </div> */}
    </section>
  );
};

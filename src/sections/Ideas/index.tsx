"use client";

import Image from "next/image";

import { CardService } from "@/sections/Ideas/components/CardService";
import { cardService } from "@/utils/cardService";
import { ideasSelection } from "@/utils/ideasSelection";
import { Tab } from "@headlessui/react";

import { Title } from "@/components/Title";

import { Painel } from "./components/Painel";
import { TabCard } from "./components/TabCard";

export const Ideas = () => {
  return (
    <section className="pb-28 -mt-40 max-w-7xl mx-auto">
      <div className="relative z-0 bg-transparent flex flex-wrap justify-center gap-5 pb-32">
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
      <div className="mt-10 flex justify-center lg:flex-row">
        <Tab.Group>
          <div className="space-y-10 ">
            <Tab.List className="flex flex-col lg:flex-row mx-auto items-center gap-1">
              {ideasSelection.map(({ imageUrl, title, description }, index) => (
                <TabCard
                  key={index}
                  imageUrl={imageUrl}
                  title={title}
                  description={description}
                />
              ))}
            </Tab.List>
            <Tab.Panels>
              <Painel />
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
};

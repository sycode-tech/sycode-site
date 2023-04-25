import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import { Tab } from "@headlessui/react";

import { Button } from "@/components/Button";

type Props = {
  imageUrl: string;
  title: string;
  paragraph: string;
  list: string[];
};

export const Content = ({ imageUrl, paragraph, list, title }: Props) => {
  return (
    <Tab.Panel className="flex flex-col lg:flex-row items-center w-full gap-16">
      <div className="flex-1 rounded-lg overflow-hidden max-w-xl">
        <Image src={imageUrl} alt="" />
      </div>
      <div className="flex-1 flex flex-col gap-5 items-start max-w-xl">
        <h3 className="font-semibold text-2xl text-gray-800">{title}</h3>
        <p className="text-lg font-normal">{paragraph}</p>
        <ul className="flex flex-col gap-2">
          {list.map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <FaCheckCircle className="text-violet-500 w-3" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button style="bg-violet-600 text-gray-100">Saiba mais</Button>
      </div>
    </Tab.Panel>
  );
};

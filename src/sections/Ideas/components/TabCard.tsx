import Image from "next/image";
import { Fragment } from "react";

import { Tab } from "@headlessui/react";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

export const TabCard = ({ imageUrl, title, description }: Props) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div
          className={`w-full rounded-lg py-8 px-5 flex items-center gap-4 bg-transparent hover:shadow-xl hover:shadow-gray-300/30 max-w-lg transition-all duration-300 cursor-pointer ${
            selected && "shadow-xl shadow-gray-300/30"
          }`}>
          <Image src={imageUrl} alt="" className="w-14" />
          <div>
            <h3 className="font-semibold text-xl text-gray-700 mb-2">
              {title}
            </h3>
            <p className="text-gray-500 font-medium text-base">{description}</p>
          </div>
        </div>
      )}
    </Tab>
  );
};

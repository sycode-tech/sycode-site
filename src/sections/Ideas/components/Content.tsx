import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

import { Button } from "@/components/Button";

import wallpaper from "../../../../public/images/meet.jpg";

export const Content = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full gap-16">
      <div className="rounded-lg overflow-hidden">
        <Image src={wallpaper} alt="" />
      </div>
      <div className="flex flex-col gap-5 items-start">
        <h3 className="font-semibold text-2xl text-gray-800">Collect Ideas</h3>
        <p className="text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          totam sit facilis quis veniam impedit corporis quos consequatur
          voluptatem sapiente recusandae, modi enim corrupti eaque ipsa
          similique aspernatur molestiae quibusdam!
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-violet-500" /> Aenean eu leo quam.
            Pellentesque ornare.
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-violet-500" /> Nullam quis risus eget
            urna mollis ornare.
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-violet-500" /> Donec id elit non mi
            porta gravida at eget.
          </li>
        </ul>
        <Button style="bg-violet-600 text-gray-100">Saiba mais</Button>
      </div>
    </div>
  );
};

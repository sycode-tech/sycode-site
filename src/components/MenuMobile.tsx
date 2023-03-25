import logoLight from "../../public/logo-light.png";

import Image from "next/image";
import { FaTimes } from "react-icons/fa";

type Props = {
  setActive: (value: boolean) => void;
  isActive: boolean;
  extraClass: string;
};

export const MenuMobile = ({ isActive, extraClass, setActive }: Props) => {
  return (
    <div
      className={`w-full absolute top-0 left-0 transition-transform duration-200 ${extraClass} ${
        isActive ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <aside className="max-w-xs w-full h-screen px-8 pt-8 pb-10 bg-gray-800 flex flex-col justify-between">
        <ul className="flex flex-col gap-y-4 text-gray-50 font-medium">
          <li className="flex items-center mb-5 ml-2 justify-between">
            <div className="w-32">
              <Image src={logoLight} alt="Logo Sycode" />
            </div>{" "}
            <button
              onClick={() => setActive(!isActive)}
              className="cursor-pointer rounded-full hover:bg-gray-700 p-2"
            >
              <FaTimes className="text-xl" />
            </button>
          </li>
          <li className="hover:bg-gray-700 pl-2 py-2 cursor-pointer rounded">
            Projetos
          </li>
          <li className="hover:bg-gray-700 pl-2 py-2 cursor-pointer rounded">
            Sobre nós
          </li>
          <li className="hover:bg-gray-700 pl-2 py-2 cursor-pointer rounded">
            Contato
          </li>
          <li className="ml-2">Alter Ling</li>
        </ul>
        <ul className="text-gray-50 space-y-1">
          <li>
            <a href="#">info@gmail.com</a>
          </li>
          <li>+55 81 99999-9999</li>
          <li>
            <ul className="flex">
              <li>F</li>
              <li>I</li>
              <li>YT</li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
};

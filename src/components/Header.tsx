"use client";

import logoLight from "../../public/logo-light.png";

import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MenuMobile } from "./MenuMobile";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="w-full h-28 bg-transparent absolute inset-0">
      <nav className="w-full h-full flex items-center justify-between lg:justify-center">
        <div className="lg:hidden w-36">
          <Image src={logoLight} alt="Logo Sycode" />
        </div>
        <button
          onClick={() => setIsActive(!isActive)}
          className="text-2xl text-gray-50 cursor-pointer lg:hidden"
        >
          <FaBars />
        </button>
        <MenuMobile
          isActive={isActive}
          setActive={setIsActive}
          extraClass="lg:hidden"
        />
        <ul className="hidden lg:flex gap-x-20 text-gray-50 text-lg font-semibold tracking-wide">
          <li>Projetos</li>
          <li>Sobre nós</li>
          <li className="hidden lg:block">Logo</li>
          <li>Contato</li>
          <li>Alter Ling</li>
        </ul>
      </nav>
    </header>
  );
};

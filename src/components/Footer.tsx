import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
  return (
    <footer className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row lg:justify-around">
        <div className="text-lg">
          <div className="mb-2 text-3xl font-bold text-gray-600">Sycode</div>
          <p>&copy; 2023 Sycode. All rights reserved.</p>
          <SocialMedia />
        </div>
        <div className="flex flex-col gap-5 text-lg md:w-60 lg:w-auto">
          <h4 className="text-xl text-gray-700 font-semibold">
            Entre em contato
          </h4>
          <p>Moonshine St. 14/05 Light City, London, United Kingdom</p>
          <ul className="text-gray-700 space-y-1 text-lg">
            <li>
              <a href="mailto:sycode.devv@gmail.com">sycode.devv@gmail.com</a>
            </li>
            <li>+55 81 99999-9999</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-xl text-gray-700 font-semibold">Saiba mais</h4>
          <ul className="flex flex-col gap-2 text-lg font-medium text-gray-600">
            <li>Projeto</li>
            <li>Sobre nós</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

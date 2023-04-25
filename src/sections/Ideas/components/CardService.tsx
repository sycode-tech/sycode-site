import { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  title: string;
  description: string;
  link: string;
};

export const CardService = ({ title, description, link, icon }: Props) => {
  return (
    <div className="bg-white w-full max-w-lg flex flex-col gap-4 p-10 rounded-lg shadow-md md:max-w-[20.8125rem] lg:max-w-[25.9375rem] xl:max-w-[15.125rem] 2xl:max-w-[18.75rem]">
      <div>{icon}</div>
      <h3 className="text-xl font-bold text-gray-700">{title}</h3>
      <p className="text-lg font-medium text-gray-500">{description}</p>
      <a href={link} className="text-violet-500 font-semibold text-lg">
        Saiba mais
      </a>
    </div>
  );
};

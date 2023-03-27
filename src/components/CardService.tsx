import { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  title: string;
  description: string;
  link: string;
};

export const CardService = ({ title, description, link }: Props) => {
  return (
    <div className="bg-white w-full max-w-lg flex flex-col gap-4 p-10 rounded-lg shadow-md md:max-w-[333px] lg:max-w-[415px] xl:max-w-[242px] 2xl:max-w-[300px]">
      <div>Icon</div>
      <h3 className="text-xl font-bold text-gray-700">{title}</h3>
      <p className="text-lg font-medium text-gray-500">{description}</p>
      <a href="" className="text-teal-500 font-semibold">
        {link}
      </a>
    </div>
  );
};

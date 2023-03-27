import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Button = ({ children }: Props) => {
  return (
    <button className="rounded-lg px-6 py-3.5 bg-gray-50 text-gray-700 font-semibold">
      {children}
    </button>
  );
};

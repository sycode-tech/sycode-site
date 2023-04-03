import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  style?: string;
};

export const Button = ({ children, style }: Props) => {
  return (
    <button
      className={`rounded-lg px-6 py-3.5 bg-gray-50 text-gray-700 font-semibold ${style}`}
    >
      {children}
    </button>
  );
};

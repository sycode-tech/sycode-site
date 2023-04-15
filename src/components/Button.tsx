import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  style?: string;
};

export const Button = ({ children, style }: Props) => {
  return (
    <button
      className={`rounded-lg px-6 py-3.5 bg-gray-50 font-semibold hover:brightness-75 transition-all ${style}`}>
      {children}
    </button>
  );
};

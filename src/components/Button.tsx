import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Button = ({ children }: Props) => {
  return (
    <button className="rounded-md px-4 py-2 bg-gray-50 text-gray-700 text-lg font-semibold">
      {children}
    </button>
  );
};

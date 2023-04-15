import Image from "next/image";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  isActive: boolean;
};

export const SelectIdea = ({
  imageUrl,
  title,
  description,
  isActive
}: Props) => {
  return (
    <div
      className={`rounded-lg py-8 px-5 flex items-center gap-4 bg-transparent hover:shadow-xl max-w-lg transition-all duration-300 cursor-pointer ${
        isActive ? "shadow-xl" : "shadow-none"
      }`}>
      <Image src={imageUrl} alt="" className="w-14" />
      <div>
        <h3 className="font-semibold text-xl text-gray-700 mb-2">{title}</h3>
        <p className="text-gray-500 font-medium text-base">{description}</p>
      </div>
    </div>
  );
};

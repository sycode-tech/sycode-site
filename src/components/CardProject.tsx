import Image from "next/image";

import placeholder from "../../public/images/project-placeholder.jpg";

export const CardProject = () => {
  return (
    <div className="space-y-4 p-6 shadow-md rounded-lg">
      <div className="overflow-hidden rounded">
        <Image src={placeholder} alt="" className="w-full max-w-sm" />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl md:text-2xl text-gray-800 font-semibold">
          Inflow
        </h3>
        <h4 className="text-sm md:text-base uppercase text-gray-400 font-semibold">
          WebSite Development
        </h4>
      </div>
    </div>
  );
};

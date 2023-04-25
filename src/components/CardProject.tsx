import Image from "next/image";

import placeholder from "../../public/images/project-placeholder.jpg";

export const CardProject = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg shadow-gray-300/40">
      <Image className="rounded-t-lg" src={placeholder} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

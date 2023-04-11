import { Button } from "@/components/Button";

export const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-3.5rem)] bg-hero bg-cover bg-center text-gray-50 centralize gap-y-10">
      <h1 className="-mt-10 font-semibold text-4xl text-center w-full max-w-md md:max-w-lg md:text-5xl lg:max-w-3xl lg:text-6xl">
        Simplificamos a vida com nossas soluções
      </h1>
      <h3 className="text-2xl text-center font-medium -mt-4 w-full max-w-md">
        Potencialize seu negócio, inove e otimize com nossas soluções.
      </h3>
      <Button>Saiba mais</Button>
      <div className="w-full absolute z-0 left-0 bottom-16 after:block after:bg-gray-50 after:w-full after:h-2 after:absolute after:-bottom-2 after:left-0">
        <svg
          className="text-gray-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 60">
          <path
            fill="currentColor"
            d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"></path>
        </svg>
      </div>
    </section>
  );
};

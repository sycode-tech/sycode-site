import { Button } from "@/components/Button";

export const Community = () => {
  return (
    <section className="">
      <div className="w-full bg-hero h-full py-12 lg:py-16 px-10 flex centralize gap-6 rounded-lg text-gray-100">
        <h4 className="font-medium uppercase text-lg">Entre na comunidade</h4>
        <h2 className="text-3xl lg:text-4xl font-bold text-center -mt-2 max-w-2xl">
          Temos a confiança de vários clientes, seja mais um deles e entre no
          time!
        </h2>
        <Button>Comece já</Button>
      </div>
    </section>
  );
};

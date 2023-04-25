type Props = {
  title: string;
  subtitle: string;
};

export const Title = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col gap-y-2 text-center max-w-2xl mx-auto">
      <h4 className="text-gray-400 font-medium uppercase text-lg">
        {subtitle}
      </h4>
      <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
    </div>
  );
};

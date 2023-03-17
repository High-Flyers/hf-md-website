type Props = {
  name: string;
};

export const SmallHeader = ({ name }: Props) => {
  return (
    <div className="font-special text-md md:text-xl w-fit mr-auto">
      <h3 className="text-center w-fit mx-auto">{name}</h3>
      <div className="h-accent-sm w-full bg-my-contrast mx-auto" />
    </div>
  );
};

export default SmallHeader;

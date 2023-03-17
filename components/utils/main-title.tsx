type Props = {
  name: string;
  className?: string;
  classNameUnderline?: string;
};

const MainTitle = ({ name, className, classNameUnderline }: Props) => {
  return (
    <div
      className={
        "font-additional font-bold text-xl mx-auto w-fit md:text-2xl lg:text-4xl " +
        className
      }
    >
      <h3 className="text-center w-fit mx-auto">{name}</h3>
      <div
        className={
          "h-accent-sm w-1/2 bg-my-contrast mt-[-0.2em] mx-auto " +
          classNameUnderline
        }
      />
    </div>
  );
};

export default MainTitle;

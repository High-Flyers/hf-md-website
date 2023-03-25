type Props = {
  children: string;
  className?: string;
};

const BaseText = ({ children, className }: Props) => {
  return (
    <p className={"font-base text-md md:text-lg " + className}>
      {children}
    </p>
  );
};

export default BaseText;
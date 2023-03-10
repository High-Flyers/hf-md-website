type Props = {};

export const Footer: React.FC<Props> = () => {
  return (
    <footer className="bg-my-foreground py-4 w-full z-20">
      <div className="container mx-auto flex justify-center font-saira text-md text-white">
        &copy; {new Date().getFullYear()} High Flyers
      </div>
    </footer>
  );
};

export default Footer;

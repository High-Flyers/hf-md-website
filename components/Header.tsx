import Link from "next/link";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="bg-bg-beubl py-2 sticky top-0 z-10">
      <div className="container mx-auto flex ">
        <Link href="/">
          <div className="flex items-center">
            <img src="/hf_logo.png" className="max-h-12 p-1 flex-none" />
            <h1 className="hidden md:block font-bold text-xl ">High Flyers</h1>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

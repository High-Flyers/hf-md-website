import Link from "next/link";

type Props = {
  children: JSX.Element;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-bg-beubl py-2 sticky top-0 z-10">
        <div className="container mx-auto flex ">
          <Link href="/">
            <div className="flex items-center">
              <img src="/hf_logo.png" className="max-h-12 p-1 flex-none" />
              <h1 className="hidden md:block font-bold text-xl ">
                High Flyers
              </h1>
            </div>
          </Link>
        </div>
      </header>
      <main className="container mx-auto flex-1 p-2 bg-bg-forga text-white">
        {children}
      </main>
      <footer className="bg-bg-popstar py-4">
        <div className="container mx-auto flex justify-center">
          &copy; 2022 High Flyers
        </div>
      </footer>
    </div>
  );
};

export default Layout;

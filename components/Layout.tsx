import Link from "next/link";

type Props = {
  children: JSX.Element;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-red-600 py-2 sticky top-0 z-10">
        <div className="container mx-auto flex ">
          <Link href="/">
            <div className="flex items-center">
              <img src="/hf_logo.png" className="max-h-14 p-1 flex-none" />
              <h1 className="font-bold text-xl ">High Flyers</h1>
            </div>
          </Link>
        </div>
      </header>
      <main className="container mx-auto flex-1 p-2 bg-slate-900 text-white">
        {children}
      </main>
      <footer className="bg-fuchsia-100 py-4">
        <div className="container mx-auto flex justify-center">
          &copy; 2022 High Flyers
        </div>
      </footer>
    </div>
  );
};

export default Layout;

import Sponsors from "./sponsors";
import Header from "./Header";

type Props = {
  children: JSX.Element;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-1 p-4 bg-bg-forga text-white">
        {children}
        <Sponsors />
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

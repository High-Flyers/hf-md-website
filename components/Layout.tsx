import Sponsors from "./sponsors";
import Header from "./Header";

type Props = {
  children: JSX.Element;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-[250px] font-saira">
      <Header />
      <main className="container flex flex-col gap-y-8 mx-auto flex-1 p-4 bg-my-background text-black">
        {children}
        <Sponsors/>
      </main>
    </div>
  );
};

export default Layout;

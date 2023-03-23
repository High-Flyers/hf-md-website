import Sponsors from "./sponsors";
import Header from "./Header";
import SectionTitle from "./utils/section-title";

type Props = {
  children: JSX.Element;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-[250px] font-saira">
      <Header />
      <main className="flex flex-col gap-y-8 mx-auto flex-1 px-0 bg-my-background text-black">
        {children}
      </main>
    </div>
  );
};

export default Layout;

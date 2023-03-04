import Link from "next/link";

type Props = {};

const Header = ({}: Props) => {
  const panels: DescProps[] = [
    {
      children: "O NAS",
      link: "/sites/about-us",
    },
    {
      children: "PROJEKTY",
      link: "/sites/projects",
    },
    {
      children: "KONTAKT",
      link: "/sites/contact",
    },
  ];

  return (
    <>
      <header className="bg-my-foreground py-2 sticky top-0 z-10">
        <div className="container mx-auto flex ">
          <Link href="/">
            <div className="flex items-center">
              <img
                src="/hf_logo_white.png"
                className="max-h-12 p-1 flex-none"
                alt="logo"
              />
              <div className="ml-2">
                <h1 className="block font-orbitron font-extrabold text-white text-2xl">
                  HIGH FLYERS
                </h1>
                <div className="bg-my-contrast w-2/3 h-1 mt-1" />
              </div>
            </div>
          </Link>{" "}
          <div className="md:hidden max-h-14 ml-auto mr-4 mt-auto mb-auto">
            <img src="/hamburger.svg" alt="hamburger" />
          </div>
          {/* <div className="ml-auto mr-4 mt-auto mb-auto flex"> */}
          {/*   {panels.map((p, i) => ( */}
          {/*     <Desc link={p.link} key={i.toString()}> */}
          {/*       {p.children} */}
          {/*     </Desc> */}
          {/*   ))} */}
          {/* </div> */}
        </div>
      </header>
    </>
  );
};

type DescProps = {
  link: string;
  children: JSX.Element | string;
};

const Desc = ({ link, children }: DescProps) => {
  return (
    <Link href={link}>
      <a className="text-sm md:text-l p-3 hover:underline font-orbitron">
        {children}
      </a>
    </Link>
  );
};

export default Header;

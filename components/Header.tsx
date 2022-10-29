import Link from "next/link";

type Props = {};

const Header = ({}: Props) => {
  const panels: DescProps[] = [
    {
      children: "O NAS",
      link: "/site/about-us",
    },
    {
      children: "PROJEKTY",
      link: "#",
    },
    {
      children: "KONTAKT",
      link: "#",
    },
  ];

  return (
    <>
      <header className="bg-bg-beubl py-2 sticky top-0 z-10">
        <div className="container mx-auto flex ">
          <Link href="/">
            <div className="flex items-center">
              <img src="/hf_logo.png" className="max-h-12 p-1 flex-none" />
              <h1 className="hidden md:block font-bold text-xl ">
                High Flyers
              </h1>
            </div>
          </Link>{" "}
          <div className="ml-auto mr-4 mt-auto mb-auto flex">
            {panels.map((p) => (
              <Desc link={p.link}>{p.children}</Desc>
            ))}
          </div>
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
      <a className="p-3 hover:underline font-bold">{children}</a>
    </Link>
  );
};

export default Header;

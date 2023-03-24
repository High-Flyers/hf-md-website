import disableScroll from "disable-scroll";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {};

const Header = ({ }: Props) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) disableScroll.on();
    else disableScroll.off();
  }, [toggle]);

  const panels: any[] = [
    {
      children: "O NAS",
      link: "/about-us",
    },
    {
      children: "REKRUTACJA",
      link: "/recruitment",
    },
    {
      children: "PROJEKTY",
      link: "/our_projects",
    },
    {
      children: "KONTAKT",
      link: "/sites/contact",
    },
  ];

  return (
    <>
      <header className="bg-my-foreground py-2 h-16 sticky top-0 z-20">
        <div className="mx-auto h-full flex items-center px-3">
          <Link href="/">
            <div
              className="flex gap-x-3 items-center hover:cursor-pointer"
              onClick={() => setToggle(false)}
            >
              <img
                src="/hf_logo_white.png"
                className="h-8 md:h-10 pt-1"
                alt="logo"
              />
              <div>
                <h1 className="block font-special font-bold text-white text-sm sm:text-base md:text-lg">
                  HIGH FLYERS
                </h1>
                <div className="bg-my-contrast w-2/3 h-1 mt-0.5" />
              </div>
            </div>
          </Link>{" "}
          <button
            className="md:hidden max-h-14 ml-auto mt-auto mb-auto"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle && <img src="/hamburger.svg" alt="hamburger" />}{" "}
            {toggle && <img src="/close.svg" alt="close menu" />}
          </button>
          <div className="ml-auto mt-auto mb-auto hidden md:flex">
            {panels.map((p, i) => (
              <DescPC link={p.link} key={i.toString()}>
                {p.children}
              </DescPC>
            ))}
          </div>
        </div>
      </header>
      {toggle && (
        <div className="flex flex-col gap-y-8 sticky pt-8 block w-screen h-footer bg-my-foreground z-10">
          {panels.map((p, i) => (
            <DescMobile
              link={p.link}
              key={i.toString()}
              setToggle={() => setToggle(false)}
            >
              {p.children}
            </DescMobile>
          ))}
        </div>
      )}
    </>
  );
};

type DescPCProps = {
  link: string;
  children: JSX.Element | string;
};

const DescPC = ({ link, children }: DescPCProps) => {
  return (
    <Link href={link}>
      <a className="text-md font-special text-white ml-4 hover:font-bold">
        {children}
      </a>
    </Link>
  );
};

type DescMobileProps = {
  link: string;
  setToggle: () => void;
  children: JSX.Element | string;
};

const DescMobile = ({ link, children, setToggle }: DescMobileProps) => {
  return (
    <div className="w-screen flex justify-center hover:cursor-pointer">
      <Link href={link}>
        <div className="w-menubar">
          <div
            className="text-white font-special text-base text-center sm:text-lg"
            onClick={() => setToggle()}
          >
            {children}
          </div>
          <div className="bg-white w-auto h-px2 mt-2" />
        </div>
      </Link>
    </div>
  );
};

export default Header;

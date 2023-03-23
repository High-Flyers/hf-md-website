import Link from "next/link";
import LinkButton from "./utils/link-button";
import MainTitle from "./utils/main-title";
import Socials from "./utils/socials";
type Props = {};

export const Hero = ({}: Props) => {
  return (
    <section className="mx-auto">
      <MainTitle
        name="KOŁO NAUKOWE BEZZAŁOGOWYCH OBIEKTÓW LATAJĄCYCH"
        classNameUnderline="sm:w-1/3 md:w-1/2"
      />
      <div className="flex flex-col md:flex-row gap-y-6 justify-center items-center my-6 md:gap-x-6 lg:my-10">
        <img className="block md:w-7/12" src="/hero.png" alt="High Flyers" />
        <p className="basis-1/2 text-center font-additional font-regular text-lg lg:text-xl xl:text-2xl">
          Jesteśmy pasjonatami lotnictwa bezzałogowego. Rozwijamy się w
          dziedzinach konstruowania maszyn bezzałogowych i ich programowania.
          Robotyka i wizja komputerowa nie jest nam straszna!
        </p>
      </div>
      <LinkButton
        name="DOWIEDZ SIĘ O NAS WIĘCEJ!"
        link="/about-us"
        className="mx-auto"
      />
      <Socials className="mt-4"/>
    </section>
  );
};

export default Hero;

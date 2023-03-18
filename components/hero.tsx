import Link from "next/link";
import LinkButton from "./utils/link-button";
import MainTitle from "./utils/main-title";
type Props = {};

export const Hero = ({}: Props) => {
  return (
    <section className="mx-auto">
      <MainTitle
        name="KOŁO NAUKOWE BEZZAŁOGOWYCH OBIEKTÓW LATAJĄCYCH"
        className="sm:w-2/3 md:w-full"
        classNameUnderline="sm:w-1/3 md:w-1/2"
      />
      <div className="flex flex-col md:flex-row gap-x-8 gap-y-6 justify-center items-center my-6 lg:my-10">
        <img className="block md:w-7/12" src="/hero.png" alt="High Flyers" />
        <p className="basis-1/2 text-center font-additional font-regular text-lg lg:text-xl xl:text-2xl">
          Jesteśmy pasjonatami lotnictwa bezzałogowego. Rozwijamy się w
          dziedzinach konstruowania maszyn bezzałogowych i ich programowania.
          Robotyka i wizja komputerowa nie jest nam straszna!
        </p>
      </div>
      <LinkButton name="DOWIEDZ SIĘ O NAS WIĘCEJ!" link="/about-us" className="mx-auto"/>
      <div className="flex gap-10 justify-center mt-4">
        <a
          className="w-10"
          href="https://www.instagram.com/highflyers.polsl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo-ig.png" alt="instagram link" />
        </a>
        <a
          className="w-10"
          href="https://www.linkedin.com/company/high-flyers-polsl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo-in.png" alt="linkedin link" />
        </a>
        <a
          className="w-10"
          href="https://www.facebook.com/high.flyers.polsl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo-fb.png" alt="facebook link" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

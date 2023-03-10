import Link from "next/link";
type Props = {};

export const Hero = ({}: Props) => {
  return (
    <section className="mx-auto">
      <div>
        <h3 className="font-orbitron font-bold text-sm md:text-base lg:text-xl text-center">
          KOŁO NAUKOWE BEZZAŁOGOWYCH OBIEKTÓW LATAJĄCYCH
        </h3>
        <div className="h-accent-sm w-1/2 bg-my-contrast mx-auto mt-1" />
      </div>
      <div className="flex flex-col md:flex-row gap-x-8 gap-y-6 justify-center items-center my-6">
        <img className="block md:w-7/12" src="/hero.png" alt="High Flyers" />
        <p className="basis-1/2 text-center font-orbitron text-sm lg:text-lg">
          Jesteśmy pasjonatami lotnictwa bezzałogowego. Rozwijamy się w
          dziedzinach konstruowania maszyn bezzałogowych i ich programowania.
          Robotyka i wizja komputerowa nie jest nam straszna!
        </p>
      </div>
      <button className="block bg-my-button text-white font-saira px-5 py-2 mx-auto">
        <Link href="/sites/about-us">DOWIEDZ SIĘ O NAS WIĘCEJ!</Link>
      </button>
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

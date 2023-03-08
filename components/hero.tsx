import Link from "next/link";
type Props = {};

export const Hero = ({}: Props) => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div>
          <div className="font-orbitron font-bold text-lg text-center">
            <h3>KOŁO NAUKOWE BEZZAŁOGOWYCH OBIEKTÓW LATAJĄCYCH</h3>
          </div>
          <div className="h-accent w-1/2 bg-my-contrast mx-auto mt-2" />
      </div>
      <div className="flex gap-x-8 justify-center items-center md:flex-row mt-12">
        <div className="basis-1/2">
            <img
              src="/hero.png"
              alt="High Flyers"
            />
        </div>
        <div className="hidden md:block basis-1/2">
          <div className="text-center font-orbitron text-sm md:text-lg">
            <p>Jesteśmy pasjonatami lotnictwa bezzałogowego. Rozwijamy się w dziedzinach konstruowania maszyn bezzałogowych i ich programowania. Robotyka i wizja komputerowa nie jest nam straszna!</p>
          </div>
        </div>

        <div className="md:hidden mx-4">
          <div className="text-center font-orbitron text-xl mt-1">
            <p>Jesteśmy pasjonatami lotnictwa bezzałogowego. Rozwijamy się w dziedzinach konstruowania maszyn bezzałogowych i ich programowania. Robotyka i wizja komputerowa nie jest nam straszna!</p>
          </div>
        </div>
      </div>
      <Link href="/sites/about-us">
        <div className="bg-my-button h-10 sm:w-4/6 md:w-64 font-saira text-md text-white mx-auto text-center m-4">
          <p className="inline-block align-middle mt-2">
            DOWIEDZ SIĘ O NAS WIĘCEJ!
          </p>
        </div>
      </Link>
      <div className="flex gap-10 justify-center">
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
    </div>
  );
};

export default Hero;

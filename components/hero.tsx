import Link from "next/link";
type Props = {};

export const Hero = ({}: Props) => {
  return (
    <div>
      <div className="font-orbitron font-bold text-xl text-center">
        <h3>KOŁO NAUKOWE</h3>
        <h3>BEZZAŁOGOWYCH</h3>
        <h3>OBIEKTÓW LATAJĄCYCH</h3>
      </div>
      <div className="h-accent w-1/2 bg-my-contrast mx-auto mt-2" />
      <div className="md:flex">
        <img
          src="/hero.png"
          alt="High Flyers"
          className="sm:mt-4 p-2 md:w-3/5"
        />
        <div className="hidden md:block mx-4">
          <div className="text-center font-orbitron text-sm lg:text-lg mt-12 xl:mt-24">
            <p>Jesteśmy pasjonatami</p>
            <p>lotnictwa bezzałogowego.</p>
            <p>Rozwijamy się w dziedzinach</p>
            <p>konstruowania maszyn</p>
            <p>bezzałogowych i ich</p>
            <p>programowania. Robotyka i</p>
            <p>wizja komputerowa nie jest</p>
            <p>nam straszna!</p>
          </div>
        </div>

        <div className="md:hidden mx-4">
          <div className="text-center font-orbitron text-xl mt-1">
            <p>Jesteśmy pasjonatami</p>
            <p>lotnictwa bezzałogowego.</p>
            <p>Rozwijamy się w</p>
            <p>dziedzinach</p>
            <p>konstruowania maszyn</p>
            <p>bezzałogowych i ich</p>
            <p>programowania. Robotyka</p>
            <p>i wizja komputerowa nie</p>
            <p>jest nam straszna!</p>
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

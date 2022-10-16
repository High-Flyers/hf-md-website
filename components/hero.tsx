type Props = {};

export const Hero = ({ }: Props) => {
  return (
    <div>
      <img
        src="/hero.png"
        alt="High Flyers"
        className="md:w-11/12 ml-auto mr-auto mt-4"
      />
      <div className="mt-4 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-4">
        <div>
          <h3 className="text-xl mb-4 md:text-3xl md:ml-8 lg:text-4xl leading-tight">
            KOŁO NAUKOWE BEZZAŁOGOWYCH OBIEKTÓW LATAJĄCYCH
          </h3>
        </div>
        <div>
          <p className="hidden md:block md:text-lg leading-relaxed mb-4 mt-4 mr-4">
            Jesteśmy pasjonatami lotnictwa bezzałogowego. Rozwijamy się w
            dziedzinach konstruowania maszyn bezzałogowych i ich programowania.
            Robotyka i wizja komputerowa nie jest nam straszna!{" "}
          </p>
        </div>
      </div>
      <div className="flex gap-16 justify-center content-center mb-16 md:mb-18">
        <a
          className="w-14"
          href="https://www.instagram.com/highflyers.polsl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo-ig.png" alt="instagram link" />
        </a>
        <a
          className="w-14"
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

type Props = {};

export const Hero = ({}: Props) => {
  return (
    <div>
      <img
        src="/hero.png"
        alt="High Flyers"
        className="w-11/12 ml-auto mr-auto mt-4"
      />
      <div className="mt-4 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-3xl md:ml-8 lg:text-4xl leading-tight">
            KOŁO NAUKOWE BEZZAŁOGOWYCH OBIEKTÓW LATAJĄCYCH
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 mr-4">
            Jesteśmy pasjonatami lotnictwa bezzałogowego. Rozwijamy się w
            dziedzinach konstruowania maszyn bezzałogowych i ich programowania.
            Robotyka i wizja komputerowa nie jest nam straszna!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import SponsorImage from "./sponsor-image";

type Props = {};

export const Sponsors = ({}: Props) => {
  return (
    <div className="lg:w-4/6 lg:mx-auto lg:my-auto">
      <div className="mt-4 w-full mx-auto">
        <SponsorImage
          src="/sponsors/ft.png"
          alt="Flytronic"
          link="https://www.wbgroup.pl/flytronic/"
          small={false}
        />
        <h2 className="font-special text-md md:text-xl font-bold text-center">
          SPONSOR STRATEGICZNY
        </h2>
      </div>
      <div className="mt-8 bg-bg-beubl rounded-2xl border-4 border-white grid justify-items-center content-around grid-cols-1 md:grid-cols-3 gap-8">
        <SponsorImage
          src="/sponsors/logo-dron.png"
          alt="DronEdu"
          link="https://dron.edu.pl"
          small={true}
        />
        <SponsorImage
          src="/sponsors/polsl.png"
          alt="PolSl"
          link="https://www.polsl.pl"
          small={true}
        />
        <SponsorImage
          src="/sponsors/botland.png"
          alt="Botland"
          link="https://botland.com.pl"
          small={true}
        />
      </div>
    </div>
  );
};

export default Sponsors;

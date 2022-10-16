import SponsorImage from "./sponsor-image";

type Props = {};

export const Sponsors = ({ }: Props) => {
  return (
    <div className="lg:w-4/6 lg:mx-auto lg:my-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-2">Sponsorzy</h1>
      <div className="p-8 m-8 bg-bg-beubl rounded-2xl border-4 border-white grid justify-items-center content-around grid-cols-1 md:grid-cols-2 gap-8">
        <SponsorImage
          src="/sponsors/ft.png"
          alt="Flytronic"
          link="https://www.wbgroup.pl/flytronic/"
        />
        <SponsorImage
          src="/sponsors/logo-dron.png"
          alt="DronEdu"
          link="https://dron.edu.pl/"
        />
        <SponsorImage
          src="/sponsors/botland.png"
          alt="Botland"
          link="https://botland.com.pl/"
        />
        <SponsorImage
          src="/sponsors/uzss.png"
          alt="UZSS"
          link="https://www.polsl.pl/ribek/samorzad-studencki/"
        />
      </div>
    </div>
  );
};

export default Sponsors;

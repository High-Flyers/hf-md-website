import type { NextPage } from "next";
import Sponsors from "../components/sponsors";
import SectionTitle from "../components/utils/section-title";
import Socials from "../components/utils/socials";

const AboutUs: NextPage<{}> = () => {
  return (
    <section className="pb-4 flex flex-col gap-y-6">
      <img
        src="/vtol.jpg"
        alt="High Flyers"
        className="object-cover object-bottom w-screen h-[300px]"
      />
      <Socials className="max-w-[250px]"/>
      <div className="container mx-auto px-4">
        <section>
          <SectionTitle name="KIM JESTEŚMY?" />
          <p className="font-base text-md mt-4">
            High Flyers to Międzywydziałowe Studenckie Koło Naukowe, którego celem
            jest tworzenie bezzałogowych pojazdów powietrznych oraz systemów
            autonomicznych z ich wykorzystaniem.
            <br />
            <br />
            Nasza formułka:
            <br />
            “W listopadzie 2010 roku, z inicjatywy studentów, pracowników
            Politechniki Śląskiej oraz firmy Flytronic powstało Międzywydziałowe
            Koło Naukowe Bezzałogowych Obiektów Latających High Flyers.”
          </p>
        </section>
        <section>
          <SectionTitle name="OSIĄGNIĘCIA" />
          <div className="font-base text-md mt-4">
            2023:
            <ul className="list-disc my-4 ml-8 marker:text-my-contrast">
              <li>Droniada, Polska, zawody krajowe - II miejsce</li>
              <li>AUAV, USA, zawody międzynarodowe - III miejsce</li>
            </ul>
            2022:
            <ul className="list-disc my-4 ml-8 marker:text-my-contrast">
              <li>Droniada, Polska, zawody krajowe - I miejsce</li>
              <li>
                AUAV, USA, zawody międzynarodowe - I miejsce w kwalifikacjach,
                finaliści
              </li>
              <li>
                ICUAS, Chorwacja, zawody międzynarodowe - VII miejsce w
                kwalifikacjach
              </li>
            </ul>
          </div>
        </section>
        <section>
          <SectionTitle name="SPONSORZY" />
          <p className="font-base text-bold text-lg mt-4">
            Nasze koło nie mogłoby rozwijać się bez wsparcia finansowego i
            sprzętowego naszych sponsorów.
          </p>
          <Sponsors />
        </section>
      </div>
    </section>
  );
};

export default AboutUs;

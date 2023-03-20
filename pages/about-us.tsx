import type { NextPage } from "next";
import Sponsors from "../components/sponsors";
import SectionTitle from "../components/utils/section-title";

const AboutUs: NextPage<{}> = () => {
  return (
    <section className="py-4">
      <SectionTitle name="KIM JESTEŚMY?" />
      <p className="font-base text-md">
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
      <SectionTitle name="OSIĄGNIĘCIA" />
      <div className="py-4 font-base text-md">
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
      <SectionTitle name="SPONSORZY" />
      <Sponsors />
    </section>
  );
};

export default AboutUs;

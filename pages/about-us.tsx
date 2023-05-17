import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Sponsors from "../components/sponsors";
import BaseText from "../components/utils/base-text";
import SectionTitle from "../components/utils/section-title";
import Socials from "../components/utils/socials";
import SponsorImage from "../components/sponsor-image";
import { PolslImage } from "../components/PolslImage";

const AboutUs: NextPage<{}> = () => {
  return (
    <section className="pb-4 flex flex-col gap-y-6">
      <img
        src="/vtol.jpg"
        alt="High Flyers"
        className="object-cover object-bottom w-screen h-[300px]"
      />
      <Socials className="max-w-[250px]" />
      <div className="container mx-auto px-4 flex flex-col gap-y-6">
        <section>
          <SectionTitle name="KIM JESTEŚMY?" />
          <BaseText className="mt-4 text-center sm:text-justify">
            W listopadzie 2010 roku, powstaliśmy jako Międzywydziałowe Koło
            Naukowe Bezzałogowych Obiektów Latających &quot;High Flyers&quot;.
            Obecnie zrzeszamy 30 członków. Jesteśmy zespołem, który jest
            nastawiony na rozwój i pracę nad ciekawymi rozwiązaniami w
            przyjemnej atmosferze pasjonatów. Naszym celem jest poszerzanie
            wiedzy z zakresu projektowania, budowy i eksploatacji autonomicznie
            sterowanych obiektów latających typu UAV (ang. Unmanned Aerial
            Vehicle). Skupiamy miłośników elektroniki, mechaniki, informatyki,
            modelarstwa lotniczego, modelowania i projektowania CAD, oraz
            analizy obrazów cyfrowych.
          </BaseText>
        </section>
        <section>
          <SectionTitle name="OSIĄGNIĘCIA" />
          <div className="font-base text-md mt-4">
            <BaseText>2023:</BaseText>
            <ul className="list-disc my-4 ml-8 marker:text-my-contrast">
              <li>
                <BaseText>
                  AUAV, USA, zawody międzynarodowe - III miejsce
                </BaseText>
              </li>
            </ul>
            <BaseText>2022:</BaseText>
            <ul className="list-disc my-4 ml-8 marker:text-my-contrast">
              <li>
                <BaseText>
                  Droniada, Polska, zawody krajowe - I miejsce
                </BaseText>
              </li>
              <li>
                <BaseText>
                  AUAV, USA, zawody międzynarodowe - I miejsce w kwalifikacjach,
                  finaliści
                </BaseText>
              </li>
              <li>
                <BaseText>
                  ICUAS, Chorwacja, zawody międzynarodowe - VII miejsce w
                  kwalifikacjach
                </BaseText>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <PolslImage />
          <SectionTitle name="SPONSORZY" />
          <p className="font-base text-bold text-lg mt-4 text-center">
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

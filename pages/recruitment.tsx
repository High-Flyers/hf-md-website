import type { NextPage } from "next";
import { useState } from "react";
import MainTitle from "../components/utils/main-title";
import SectionTitle from "../components/utils/section-title";

const job_descriptions: ExpaderData[] = [
  {
    title: "Software programmer",
    desc: "Jeśli interesują cię algorytmy np. przetwarzania obrazu, omijania przeszkód, kontroli pojazdów lub chciałbyś je poznać i wykorzystywać w praktyce, to właśnie ciebie szukamy na to stanowisko!",
    list: [
      {
        title: "ROLA:",
        bullets: [
          "Programowanie systemów autonomicznych sterowania dronem, tworzenie algorytmów path planningu oraz przetwarzania obrazów.",
        ],
      },
      {
        title: "DOŚWIADCZENIE",
        bullets: ["C++/Python, git", "Programowanie obiektowe"],
      },
      {
        title: "MILE WIDZIANE:",
        bullets: [
          "Doświadczenie z ROSem",
          "Znajomość autopilota PX4/Ardupilot",
          "Praca z systemem Linux",
        ],
      },
    ],
  },
  {
    title: "Embedded developer",
    desc: "Lubisz grzebać w mikrokontrolerach i tworzyć rzeczywiste namacalne urządzenia? To właśnie ciebie potrzebujemy do tworzenia modułów na nasze platformy latające.",
    list: [
      {
        title: "ROLA:",
        bullets: [
          "Programowanie mikrokontrolerów odpowiedzialnych za odpowiednią pracę modułów zamieszczanych na dronie lub nisko poziomowego kontrolera do mini dronów.",
        ],
      },
      {
        title: "DOŚWIADCZENIE",
        bullets: [
          "Podstawy C++ lub C oraz praca z systemem kontroli wersji git",
          "Praca z jakimś mikrokontrolerem w przeszłości",
        ],
      },
      {
        title: "MILE WIDZIANE:",
        bullets: ["Doświadczenie z ESP-32 lub Arduino, a także freeRTOS"],
      },
    ],
  },
  {
    title: "Konstruktor",
    desc: "Jeśli interesuje cię modelowanie CAD, a w tym tworzenie wyspecjalizowanych systemów wielozadaniowych np. dostarczanie ładunku, autonomiczna platforma kołowa, działo na paintball, czy tworzenie całego drona, to u nas masz szansę spróbować swoich sił w ciekawych i wymagających projektach! ",
    list: [
      {
        title: "ROLA:",
        bullets: [
          "Projektowanie i budowanie dronów i ich modułów wykonawczych",
          "Konstrukcja wyspecjalizowanych pojazdów latających",
          "Konstrukcja wyspecjalizowanych pojazdów naziemnych",
        ],
      },
      {
        title: "DOŚWIADCZENIE",
        bullets: ["CAD", "Lutowanie", "Zdolności manualne"],
      },
      {
        title: "MILE WIDZIANE:",
        bullets: [
          "Fusion 360",
          "Druk 3D",
          "CAM",
          "CFD",
          "Materiały kompozytowe",
        ],
      },
    ],
  },
  {
    title: "PR",
    desc: "Jeśli czujesz się w kontakcie z ludźmi jak ryba w wodzie lub lubisz social media, to ta działka jest dla ciebie! Tutaj możesz poznać, jak wygląda organizacja promocyjna, szukanie sponsorów oraz ogólne reklamowanie działalności.",
    list: [
      {
        title: "ROLA:",
        bullets: [
          "Pisanie postów na Instagram FB oraz na stronie koła",
          "Działalność promocyjna",
        ],
      },
      {
        title: "DOŚWIADCZENIE",
        bullets: ["Doświadczenie w tworzeniu grafik."],
      },
      {
        title: "MILE WIDZIANE:",
        bullets: ["Znajomość Latex."],
      },
    ],
  },
  {
    title: "Operator Dronów",
    desc: "Jeśli uwielbiasz latać dronami lub płatowcami, a chciałbyś mieć do czynienia z większymi maszynami, to u nas będziesz mieć możliwość pracy z zaawansowanym sprzętem oraz sprawować pieczę nad skomplikowanymi misjami autonomicznymi! ",
    list: [
      {
        title: "ROLA:",
        bullets: [
          "Konfigurowanie PX4 autopilot",
          "Pilotowanie dronów",
          "Przygotowanie maszyn pod misje.",
        ],
      },
      {
        title: "DOŚWIADCZENIE",
        bullets: [
          "Znajomość konstrukcji wielowirnikowców",
          "Pilot drona A1/A3",
        ],
      },
      {
        title: "MILE WIDZIANE:",
        bullets: ["Kurs operatora BVLOS", "Umiejętność pilotowania płatowców"],
      },
    ],
  },
  {
    title: "Grafik/Designer",
    desc: "Lubisz tworzyć grafiki oraz kreować nowoczesne designy? U nas będziesz mieć możliwość tworzenia dla szerszej publiki, co na pewno będzie godne pochwalenia się w przyszłości.",
    list: [
      {
        title: "ROLA:",
        bullets: [
          "Tworzenie grafik sponsorskich",
          "Wzory na ubrania oraz przedmioty promocyjne",
          "Grafiki na posty FB, Insta, oraz na stronę koła.",
        ],
      },
      {
        title: "DOŚWIADCZENIE",
        bullets: [
          "Tworzenie grafik na posty",
          "Podstawowe umiejętności obsługi najbardziej znanych programów graficznych",
        ],
      },
      {
        title: "MILE WIDZIANE:",
        bullets: ["Canva", "Figma"],
      },
    ],
  },
];

const Recruitment: NextPage<{}> = () => {
  const [opened, setOpened] = useState(-1);
  return (
    <section className="container px-4 mx-auto flex flex-col gap-y-4 py-4">
      <section>
        <MainTitle name="REKRUTACJA TRWA!" />
        <p className="font-base text-md md:text-lg text-center max-w-xl mx-auto my-4">
          Po wybraniu interesującego cię stanowisko wypełnij formularz
          wybierając odpowiednią rolę, a my skontaktujemy się z tobą w przeciągu
          kolejnych dni.
        </p>
        <button className="block px-5 py-2 mx-auto bg-my-button text-white text-xs lg:text-sm hover:bg-my-button-hover">
          <a
            href="https://www.google.pl/"
            rel="noopener noreferrer"
            target="_blank"
          >
            WYPEŁNIJ FORMULARZ!
          </a>
        </button>
      </section>
      <div>
        <SectionTitle name="DLACZEGO MY?" />
        <ul className="list-disc mt-4 ml-6 md:ml-12 text-md md:text-lg marker:text-my-contrast">
          <li>Dobry kontakt z firmami</li>
          <li>Luźna atmosfera</li>
        </ul>
      </div>
      <div>
        <SectionTitle name="KOGO SZUKAMY?" />
        <div className="flex flex-col gap-y-4 mt-4">
          {job_descriptions.map((job, i) => (
            <Expander
              key={i}
              data={job}
              active={i == opened}
              setActive={() => {
                if (i == opened) setOpened(-1);
                else setOpened(i);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type ExpaderData = {
  title: string;
  desc: string;
  list: {
    title: string;
    bullets: string[];
  }[];
};

type ExpanderProps = {
  data: ExpaderData;
  active: boolean;
  setActive: () => void;
};

const Expander = ({ data, active, setActive }: ExpanderProps) => {
  const [contrastBar, contrastHover, contrastText] = active
    ? ["bg-my-special", "bg-my-contrast-hover", "text-my-special"]
    : ["bg-my-button", "bg-my-button-hover", "text-my-button"];
  return (
    <div className="flex  mx-auto w-full">
      <div className={`w-[32px] ${contrastBar}`} />
      <div className="bg-my-dark-background p-4 w-full">
        <h3 className="font-base font-bold text-md md:text-lg mb-2">
          {data.title}
        </h3>
        <p className="font-base text-xs md:text-md">{data.desc}</p>
        {active &&
          data.list.map((l, i) => {
            return (
              <div className="w-10/12" key={i}>
                <h4 className="font-base font-bold text-md md:text-lg my-2">
                  {l.title}
                </h4>
                <ul
                  className={`list-disc text-xs md:text-md marker:${contrastText} ml-8`}
                >
                  {l.bullets.map((b, j) => {
                    return <li key={j}>{b} </li>;
                  })}
                </ul>
              </div>
            );
          })}

        <button
          className={`block px-5 py-2 ml-auto mr-2 mt-2 text-white \
          text-xs lg:text-sm ${contrastBar} hover:${contrastHover}`}
          onClick={() => setActive()}
        >
          {active ? "MNIEJ" : "WIĘCEJ"}
        </button>
      </div>
    </div>
  );
};

export default Recruitment;

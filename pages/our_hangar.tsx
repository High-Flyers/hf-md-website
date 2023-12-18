import type { NextPage } from "next";
import { getAllVehicles } from "../lib/api";
import Post from "../interfaces/post";
import ItemsSection from "../components/items-section";

type Props = {
  vehicles: Post[];
};

const OurProjects: NextPage<Props> = ({ vehicles }: Props) => {
  return (
    <div className="container px-4 mx-auto flex flex-col gap-y-8 py-4">
      <ItemsSection posts={vehicles} title="NASZE POJAZDY" name="vehicles" />
    </div>
  );
};

export default OurProjects;

export const getStaticProps = async () => {
  const vehicles = getAllVehicles([
    "title",
    "slug",
    "coverImage",
    "excerpt",
    "ogImage",
    "priority",
  ]);

  return {
    props: { vehicles },
  };
};

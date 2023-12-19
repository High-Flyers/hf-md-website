import type { NextPage } from "next";
import {
  getAllVehicles,
  getAtoBVehicles,
  getNumOfVehicles,
} from "../../lib/api";
import Post from "../../interfaces/post";
import ItemsSection from "../../components/items-section";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Pagination from "../../components/pagination";

const VEHICLES_PER_PAGE = 4;

type Props = {
  vehicles: Post[];
  pageNo: number;
  allPages: number;
};

const OurProjects: NextPage<Props> = ({
  vehicles,
  pageNo,
  allPages,
}: Props) => {
  const router = useRouter();
  if (!router.isFallback && vehicles == []) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="container px-4 mx-auto flex flex-col gap-y-8 py-4">
      <ItemsSection posts={vehicles} title="NASZE POJAZDY" name="vehicles" />
      <Pagination allPages={allPages} currentPage={pageNo} parent="our-hangar" />
    </div>
  );
};

export default OurProjects;

type Params = {
  params: {
    page: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const pageNo = Number(params.page);
  const vehicles = getAtoBVehicles(
    pageNo * VEHICLES_PER_PAGE,
    (pageNo + 1) * VEHICLES_PER_PAGE,
    ["title", "slug", "coverImage", "excerpt", "ogImage", "priority"]
  );

  const allPages = Math.ceil(getNumOfVehicles() / VEHICLES_PER_PAGE);

  return {
    props: { vehicles, pageNo, allPages },
  };
};

export async function getStaticPaths() {
  const vehicles = getAllVehicles(["slug"]);

  const paths = [];
  let cnt = 0;
  for (let i = 0; i < vehicles.length; i += VEHICLES_PER_PAGE) {
    paths.push({
      params: { page: cnt.toString() },
    });
    cnt++;
  }

  return {
    paths,
    fallback: false,
  };
}

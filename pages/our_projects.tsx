import type { NextPage } from "next";
import { getAllProjects } from "../lib/api";
import Post from "../interfaces/post";
import MoreProjects from "../components/more-projects";

type Props = {
  projects: Post[];
};

const OurProjects: NextPage<Props> = ({ projects }: Props) => {
  return (
    <div className="container px-4 mx-auto flex flex-col gap-y-8 py-4">
      <MoreProjects posts={projects} />
    </div>
  );
};

export default OurProjects;

export const getStaticProps = async () => {
  const projects = getAllProjects([
    "title",
    "slug",
    "coverImage",
    "excerpt",
    "ogImage",
    "priority",
  ]);

  return {
    props: { projects },
  };
};

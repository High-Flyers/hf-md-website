import type { NextPage } from "next";
import Hero from "../components/hero";
import { getNPosts } from "../lib/api";
import Post from "../interfaces/post";
import MoreStories from "../components/more-stories";
import LinkButton from "../components/utils/link-button";
import SectionTitle from "../components/utils/section-title";
import Sponsors from "../components/sponsors";
import { PolslImage } from "../components/PolslImage";

type Props = {
  posts: Post[];
};

const Index: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div className="container px-4 mx-auto flex flex-col gap-y-8 py-4">
      <Hero />
      <MoreStories posts={posts} />
      <LinkButton name="WIĘCEJ" link="/all-posts/0" className="mx-auto px-14" />
      <PolslImage />
      <SectionTitle name="SPONSORZY" />
      <Sponsors />
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const posts = getNPosts(2, [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { posts },
  };
};

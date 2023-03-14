import type { NextPage } from "next";
import Hero from "../components/hero";
import { getNPosts } from "../lib/api";
import Post from "../interfaces/post";
import MoreStories from "../components/more-stories";
import AllStories from "../components/all-stories";

type Props = {
  posts: Post[];
};

const Index: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div className="flex flex-col gap-y-8">
      <Hero />
      <MoreStories posts={posts} />
      <AllStories />
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

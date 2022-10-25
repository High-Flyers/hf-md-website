import { useRouter } from "next/router";
import ErrorPage from "next/error";
import type { NextPage } from "next";
import { getAtoBPosts, getAllPosts } from "../../lib/api";
import Post from "../../interfaces/post";
import MoreStories from "../../components/more-stories";

const POSTS_PER_PAGE = 8;

type Props = {
  posts: Post[];
};

const AllPosts: NextPage<Props> = ({ posts }: Props) => {
  const router = useRouter();
  if (!router.isFallback && posts == []) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="">
      <MoreStories posts={posts} />
    </div>
  );
};

export default AllPosts;

type Params = {
  params: {
    page: string;
    allPages: number;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const pageNo = Number(params.page);
  const posts = getAtoBPosts(pageNo, pageNo + POSTS_PER_PAGE, [
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

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  const allPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paths = [];
  for (let i = 0; i < posts.length; i += POSTS_PER_PAGE) {
    paths.push({
      params: { page: i.toString(), allPages },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

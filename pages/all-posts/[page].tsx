import { useRouter } from "next/router";
import ErrorPage from "next/error";
import type { NextPage } from "next";
import { getAtoBPosts, getAllPosts, getNumOfPosts } from "../../lib/api";
import Post from "../../interfaces/post";
import MoreStories from "../../components/more-stories";
import Pagination from "../../components/pagination";

const POSTS_PER_PAGE = 4;

type Props = {
  posts: Post[];
  pageNo: number;
  allPages: number;
};

const AllPosts: NextPage<Props> = ({ posts, pageNo, allPages }: Props) => {
  const router = useRouter();
  if (!router.isFallback && posts == []) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="">
      <MoreStories posts={posts} />
      <Pagination allPages={allPages} currentPage={pageNo} />
    </div>
  );
};

export default AllPosts;

type Params = {
  params: {
    page: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const pageNo = Number(params.page);
  const posts = getAtoBPosts(
    pageNo * POSTS_PER_PAGE,
    (pageNo + 1) * POSTS_PER_PAGE,
    ["title", "date", "slug", "author", "coverImage", "excerpt"]
  );

  const allPages = Math.ceil(getNumOfPosts() / POSTS_PER_PAGE);

  return {
    props: { posts, pageNo, allPages },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  const paths = [];
  let cnt = 0;
  for (let i = 0; i < posts.length; i += POSTS_PER_PAGE) {
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

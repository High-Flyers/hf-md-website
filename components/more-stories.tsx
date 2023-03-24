import PostPreview from "./post-preview";
import SectionTitle from "./utils/section-title";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <SectionTitle name="AKTUALNOŚCI" />
      <div className="grid grid-cols-1 mt-8 md:pr-[10px] items-center gap-x-8 gap-y-8 md:grid-cols-2">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;

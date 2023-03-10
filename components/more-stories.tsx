import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div>
        <h3 className="font-orbitron font-bold text-sm md:text-base lg:text-xl text-center">
          AKTUALNOŚCI
        </h3>
        <div className="h-accent-sm w-1/4 bg-my-contrast mx-auto mt-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 xl:gap-x-64 gap-y-20 md:gap-y-32 mb-4 p-4">
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

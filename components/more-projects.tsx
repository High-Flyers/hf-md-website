import SectionTitle from "./utils/section-title";
import type Post from "../interfaces/post";
import ProjectPreview from "./project-preview";

type Props = {
  posts: Post[];
};

const MoreProjects = ({ posts }: Props) => {
  return (
    <section>
      <SectionTitle name="NASZE PROJEKTY" />
      <div className="grid grid-cols-1 mt-8 md:pr-[10px] items-center gap-x-8 gap-y-8 md:grid-cols-2">
        {posts.map((post) => (
          <ProjectPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreProjects;

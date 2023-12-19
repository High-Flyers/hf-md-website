import SectionTitle from "./utils/section-title";
import type Post from "../interfaces/post";
import ItemPreview from "./item-preview";

type Props = {
  posts: Post[];
  title: string;
  name: string;
};

const ItemsSection = ({ posts, title, name }: Props) => {
  return (
    <section>
      <SectionTitle name={title} />
      <div className="grid grid-cols-1 mt-8 md:pr-[10px] items-center gap-x-8 gap-y-8 md:grid-cols-2">
        {posts.map((post) => (
          <ItemPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            excerpt={post.excerpt}
            parent={name}
          />
        ))}
      </div>
    </section>
  );
};

export default ItemsSection;

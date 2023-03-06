import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <div className="bg-my-postshow relative">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-xl font-saira m-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg m-3 mt-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed m-3 mb-16 font-saira">{excerpt}</p>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div className="absolute bottom-0 bg-my-button h-10 w-1/2 font-saira text-md m-3 text-white text-center hover:cursor-pointer">
          <p className="inline-block align-middle mt-2">CZYTAJ DALEJ</p>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;

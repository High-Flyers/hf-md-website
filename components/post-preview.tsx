import DateFormatter from "./date-formatter";
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
    <div className="bg-my-postshow relative h-full flex flex-col justify-between max-w-[460px]">
      <div>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <div className="mb-5 h-[260px] overflow-hidden">
            <img
              src={coverImage}
              alt={`Cover Image for ${title}`}
              className="block h-full w-full object-cover object-center hover:scale-105 transition duration-150"
            />
          </div>
        </Link>
        <div className="flex flex-col gap-y-3 mx-3">
          <h3 className="text-xl font-saira leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="text-lg ">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed  font-saira">{excerpt}</p>
        </div>
      </div>
      <button className="block m-3 bg-my-button self-start font-saira text-md p-3 text-white text-center hover:cursor-pointer ">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          CZYTAJ DALEJ
        </Link>
      </button>
    </div>
  );
};

export default PostPreview;

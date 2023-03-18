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
    <div className="bg-my-postshow w-full h-full flex flex-col max-w-[460px] mx-auto">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div className="mb-5 w-full h-[150px] overflow-hidden md:h-[200px]">
          <img
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="block h-full w-full object-cover object-center hover:scale-105 transition duration-150"
          />
        </div>
      </Link>
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-y-3">
            <h3 className="text-base font-saira leading-snug md:text-xl">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <div className="text-2xs md:text-sm">
              <DateFormatter dateString={date} />
            </div>
            <p className="text-xs leading-relaxed font-saira md:text-base">{excerpt}</p>
          </div>
        </div>
        <button className="block mt-3 bg-my-button self-start font-saira text-base p-3 text-white text-center hover:cursor-pointer ">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            CZYTAJ DALEJ
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PostPreview;

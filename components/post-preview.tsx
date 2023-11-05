import DateFormatter from "./date-formatter";
import Link from "next/link";
import LinkButton from "./utils/link-button";

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
      <div className="w-full h-[150px] overflow-hidden sm:h-[170px] md:h-[200px]">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <img
            src={coverImage || "/hero.png"}
            alt={`Cover Image for ${title}`}
            className="block h-full w-full object-cover object-center hover:scale-105 transition duration-150 hover:cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between grow p-3 ">
        <div>
          <div className="flex flex-col gap-y-1">
            <h3 className="text-sm font-saira leading-snug md:text-lg">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <div className="text-2xs md:text-xs">
              {date &&
                <DateFormatter dateString={date} />
              }
            </div>
            <p className="text-xs leading-relaxed font-saira md:text-sm">
              {excerpt}
            </p>
          </div>
        </div>
        <LinkButton
          name="CZYTAJ DALEJ"
          link={`/posts/${slug}`}
          className="mt-3 self-start text-2xs"
        />
      </div>
    </div>
  );
};

export default PostPreview;

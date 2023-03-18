// import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
// import PostTitle from "./post-title";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <div className="max-w-2xl mr-auto font-base mb-2 mt-8 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-8 sm:mx-0">
        <img
          src={coverImage}
          alt={`Cover Image for ${title}`}
          className="block h-full w-full object-cover object-center hover:scale-105 transition duration-150"
        />
      </div>
    </>
  );
};

export default PostHeader;

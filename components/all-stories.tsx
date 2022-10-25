import Link from "next/link";

type Props = {};

const AllStories = ({}: Props) => {
  return (
    <div className="flex flex-row-reverse text-4xl mb-4">
      <Link as="/all-posts/0" href="/all-posts/0">
        <a className="hover:underline mr-4">Wszystkie Artykuły</a>
      </Link>
    </div>
  );
};

export default AllStories;
